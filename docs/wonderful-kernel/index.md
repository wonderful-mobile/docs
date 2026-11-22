# Wonderful Kernel

Wonderful Kernel is a custom Android kernel. We start from the kernel source
the phone maker publishes for each firmware update, keep everything the phone
needs to work, and change only what we can explain:

- **Performance:** built with Clang at -O3 with ThinLTO, tuned for the phone's CPU.
- **Battery:** schedutil CPU governor and power-efficient workqueues.
- **Networking:** BBR congestion control with the fq_codel queue.
- **Root (optional):** KernelSU-Next, SukiSU or BakaSU built in, each with an optional SUSFS variant.

We do not overclock or undervolt. Every change is listed on the
[Tweaks](tweaks.md) page, and the full history is on
[GitHub](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq).

Next: [Install](install.md) · [Upgrade](upgrade.md) · [Downloads for the Galaxy A23 5G](samsung-a23xq.md#download)

## Devices

| Phone | Model | Codename | Kernel | Firmware | Status |
|---|---|---|---|---|---|
| [Samsung Galaxy A23 5G](samsung-a23xq.md) | SM-A236B | a23xq | Linux 5.4 | Android 14 (One UI 6) | Beta |

## Variants

Each release comes in seven variants. They differ only in the root manager
built into the kernel and whether SUSFS is included. See
[Root managers](root-managers.md) to choose.

| Variant | Root manager | SUSFS |
|---|---|---|
| Vanilla | None | No |
| KernelSU-Next | [KernelSU-Next](root-managers.md#kernelsu-next) | No |
| KernelSU-Next-SUSFS | [KernelSU-Next](root-managers.md#kernelsu-next) | [Yes](root-managers.md#susfs) |
| SukiSU | [SukiSU](root-managers.md#sukisu) | No |
| SukiSU-SUSFS | [SukiSU](root-managers.md#sukisu) | [Yes](root-managers.md#susfs) |
| BakaSU | [BakaSU](root-managers.md#bakasu) | No |
| BakaSU-SUSFS | [BakaSU](root-managers.md#bakasu) | [Yes](root-managers.md#susfs) |

There is no official KernelSU variant: KernelSU dropped support for non-GKI
and GKI 1.0 kernels (Linux older than 5.10). See
[Root managers](root-managers.md).

## Before you install

!!! warning
    Unlocking the bootloader on a Samsung phone trips Knox permanently and
    wipes your data.

- Wonderful Kernel is in beta. Report problems on
  [GitHub](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq/issues)
  or in the [Telegram chat](https://t.me/wonderful_mobile_chat).
- Flash Wonderful Kernel over the stock, unrooted boot image. If you used
  another kernel or root method before (Edward KernelSU, ro2rw, Magisk), go back
  to stock first.
- Do not make your vendor partition writeable because a guide or module asks
  you to. It can break the camera, and a bad module can stop the phone from
  booting.
