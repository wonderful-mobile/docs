# Building

You don't need to be a kernel developer to build Wonderful Kernel. One script
downloads the compiler, asks what you want, and gives you a flashable zip.

## What you need

- A 64-bit Linux PC (Intel or AMD), or WSL2 on Windows.
- About **15 GB** of free disk space and **8 GB** of RAM.
- Either **Nix** (any Linux distro, including NixOS), or the packages below on
  Ubuntu / Debian.

## 1. Get the source

```bash
git clone https://github.com/wonderful-mobile/android_kernel_samsung_a23xq.git
cd android_kernel_samsung_a23xq
```

## 2. Install the tools

### With Nix (recommended)

Nothing to install by hand. `run.sh` uses `shell.nix` automatically when Nix is
available. To install Nix on another distro:

```bash
sh <(curl -L https://nixos.org/nix/install) --daemon
```

### Ubuntu / Debian

```bash
sudo apt update
sudo apt install -y bc bison flex git make perl python3 curl zip cpio lz4 libssl-dev libelf-dev
```

## 3. Build

```bash
./run.sh
```

It asks three questions:

1. **Root manager:** none, KernelSU-Next or SukiSU.
2. **SUSFS:** only offered with SukiSU.
3. **Clean build:** say yes after pulling updates.

The first build downloads Android Clang (about 1.4 GB, kept in
`~/.cache/wonderful/`) and takes 5 to 30 minutes depending on your PC. When it
finishes, your zip is in `dist/`:

```text
dist/Wonderful-0.8-a23xq-KernelSU-Next-5b7c369.zip
dist/Wonderful-0.8-a23xq-KernelSU-Next-5b7c369.txt   <- what is inside
```

## Without questions

`run.sh` passes options straight to `build.sh`, so you can script builds:

```bash
./run.sh --root ksun                # KernelSU-Next
./run.sh --root sukisu --susfs      # SukiSU with SUSFS
./run.sh --clean                    # vanilla, from scratch
./build.sh --help                   # every option
```

| Option | Meaning |
|---|---|
| `--root none\|ksun\|sukisu` | Root manager to build in (default: none) |
| `--susfs` | Add SUSFS (SukiSU only) |
| `--jobs N` | Parallel jobs (default: all CPU cores) |
| `--lto none\|thin\|full` | Override link-time optimization |
| `--clean` | Delete `out/` first |
| `--no-zip` | Only build the kernel Image |

Root drivers are pinned to tested commits. To try a newer one:
`KSUN_REF=legacy ./run.sh --root ksun`.

## Your source tree stays clean

The root driver and SUSFS are added only while building and removed afterwards,
so `git status` stays clean and `git pull` never conflicts with them. If a build
is interrupted, the next run cleans up the leftovers first.

## Troubleshooting

| Problem | Fix |
|---|---|
| `missing 'bc'` (or another tool) | Install the packages from step 2, or use Nix. |
| `on NixOS, run this from the Nix shell` | Use `./run.sh`, or `nix-shell --run './build.sh ...'`. |
| `... does not apply cleanly` | The kernel changed under a patch. Report it, or see [Porting](porting.md). |
| Build fails after `git pull` | Run `./run.sh --clean`. |
