# Tools and Patches

The tools and patches behind Wonderful Kernel. They live in each kernel
repository, next to the source they build.

- [Building the kernel](building.md): build Wonderful Kernel yourself with one script. Works on Ubuntu, Debian, and any Linux with Nix.
- [Porting to your kernel](porting.md): reuse the build script, root manager hooks and SUSFS port in another kernel.

## What is included

| Tool | What it does |
|---|---|
| `run.sh` | Asks which root manager you want, then builds |
| `build.sh` | Downloads the compiler, adds the root driver and patches, builds the kernel and packs a flashable zip |
| `shell.nix` | Build environment for Nix and NixOS users |
| `wonderful/device.conf` | Per-device settings, so the same script works for other devices |
| `wonderful/anykernel.sh` | AnyKernel3 install script for the device |

| Patch set | What it does |
|---|---|
| `patches/susfs/5.4/` | SUSFS v2.4.0, ported by hand to Samsung's 5.4 kernel |
| `patches/root/sukisu/`, `sukisu-susfs/` | Kernel hooks SukiSU needs, without and with SUSFS |
| `patches/root/bakasu/`, `bakasu-susfs/` | Kernel hooks BakaSU needs, without and with SUSFS |
| `patches/driver/sukisu/` | Two fixes so SukiSU v3.0.0 builds on Linux 5.4 |

KernelSU-Next uses the hooks already in the kernel source, with or without
SUSFS.

Patches are applied only while building and removed afterwards, so the
kernel source stays clean.

Source: [android_kernel_samsung_a23xq](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq),
folder [`wonderful/`](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq/tree/ksun-legacy-hooks/wonderful).
