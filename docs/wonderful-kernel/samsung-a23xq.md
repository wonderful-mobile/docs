# Samsung Galaxy A23 5G (samsung-a23xq)

Wonderful Kernel for Samsung Galaxy A23 5G (samsung-a23xq).

## Known issues

- ~~Android System warning: "Internal problem with your device."~~ (Fixed at v0.5)
- Found another issue? Let us know in our Telegram group chat!

## Building the kernel

We recommend using **Ubuntu 24.04 LTS or newer** on **Intel or AMD 64-bit architecture**. Using Toolbox or Distrobox is also possible.

This guide is tested on Ubuntu 24.04 LTS in a Toolbox on a Fedora Silverblue host.

### Install needed dependencies

```bash
sudo apt update -y
sudo apt install -y bc cpio flex bison git python-is-python3 tar perl wget curl lz4 libssl-dev make
```

### Clone the Kernel Source

```bash
git clone https://github.com/wonderful-mobile/android_kernel_samsung_a23xq.git
cd android_kernel_samsung_a23xq
```

### Set up extra toolchains

```bash
mkdir toolchain
cd toolchain
```

Set up GCC 4.9

```bash
git clone --depth=1 https://github.com/rsuntk/toolchains.git -b androidcc-4.9 google
```

Set up Clang 12.0.7

```bash
mkdir clang-12.0.7
cd clang-12.0.7
wget https://android.googlesource.com/platform/prebuilts/clang/host/linux-x86/+archive/refs/heads/android12L-security-release/clang-r416183b1.tar.gz
tar -xvf clang-r416183b1.tar.gz
```

Now return to the kernel source directory

```bash
cd ../..
```

### Finalize configuration and build

Make the script executable

```bash
chmod +x run.sh
```

Edit build hostname in `run.sh` as needed

```
# edit in run.sh
export KBUILD_BUILD_USER="username"      # Change to your desired username
export KBUILD_BUILD_HOST="hostname"      # Change to your desired hostname
```

Disable KernelSU and SuSFS in `run.sh` (for now, at least until fixed by upstream)

```
# edit in run.sh
export KERNELSU=false
export SUSFS4KSU=false
```

Start building

```
./run.sh
```