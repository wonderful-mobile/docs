# Porting to your kernel

For kernel developers who want Wonderful's build tools or patches in their own
kernel.

## How the kernel repo is laid out

```text
build.sh                    the build script (device independent)
run.sh                      friendly front end that asks questions
shell.nix                   build environment for Nix users
wonderful/
  device.conf               device name, defconfig, supported root managers
  anykernel.sh              AnyKernel3 script for this device
  patches/
    susfs/5.4/              SUSFS, ported to this kernel
    root/sukisu/            hooks that SukiSU needs
    root/sukisu-susfs/      hooks that SukiSU + SUSFS needs
```

The KernelSU-Next manual hooks are part of the kernel source itself (guarded by
`CONFIG_KSU`), because they are small and stable. Everything else is applied
at build time and removed afterwards.

## Reusing the build tools

To use `build.sh` for another device, copy `build.sh`, `run.sh`, `shell.nix`
and the `wonderful/` folder, then edit:

1. `wonderful/device.conf`: `DEVICE`, `DEVICE_NAME`, `DEFCONFIG` and which root
   managers you support.
2. `wonderful/anykernel.sh`: `device.name1` (your `ro.product.device`) and
   `BLOCK` (your boot partition).
3. Remove patch folders your kernel does not need.

## Patch order

When building, `build.sh` does this:

| Build | Applied |
|---|---|
| `--root ksun` | KernelSU-Next driver only (hooks are in the source) |
| `--root sukisu` | SukiSU driver, then `patches/root/sukisu/` |
| `--root sukisu --susfs` | SukiSU driver, then `patches/susfs/<kernel version>/`, then `patches/root/sukisu-susfs/` |

Patches in a folder are applied in name order with `git apply`, and reverted in
reverse order after the build.

## Porting SUSFS to a new kernel base

Upstream SUSFS patches rarely apply cleanly to vendor kernels. The workflow is
to port once by hand, then keep your own patch:

```bash
git switch -c susfs-port
git apply --reject susfs_patch_to_5.4.patch   # failed hunks go to *.rej files
find . -name '*.rej'                          # fix each one by hand, then delete it
./build.sh --root sukisu --susfs              # make sure it builds
git add -A
git diff --cached HEAD > wonderful/patches/susfs/5.4/0001-susfs-v2.4.0.patch
git switch - && git branch -D susfs-port
```

Write down where the patch came from in a `SOURCE` file next to it. A patch made
from your own tree can later be re-applied with `git apply -3` after a vendor
source update, which is much easier than starting over.

## Root driver hooks at a glance

| Hook | KernelSU-Next legacy | SukiSU | SukiSU + SUSFS |
|---|---|---|---|
| `execve` | `ksu_handle_execveat` | same | `ksu_handle_execveat_ksud` + `_sucompat` + `_post_` |
| `faccessat`, `stat` | user pointer | user pointer | `struct filename` |
| `read` (init.rc) | `ksu_handle_sys_read(fd)` | `ksu_handle_sys_read(fd, &buf, &count)` | same, static key |
| `newfstat` | `ksu_handle_newfstat_ret` | `ksu_handle_vfs_fstat` | same, static key |
| `setresuid` | LSM hook | LSM hook | `ksu_handle_setresuid` |
| Gate flags | `ksu_init_rc_hook`, `ksu_input_hook` | `ksu_vfs_read_hook`, `ksu_input_hook` | `ksu_is_init_rc_hook_enabled` |

Mixing these up still compiles but crashes on the phone, because the C
declarations live in different files. Always check hook signatures against the
exact driver commit you pin.
