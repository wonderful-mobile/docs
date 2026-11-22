# Wonderful Kernel

Wonderful Kernel is a custom Android kernel. We start from the kernel source
the phone maker publishes for each firmware update, keep everything the phone
needs to work, and change only what we can explain:

- **Performance:** built with Clang at -O3 with ThinLTO, tuned for the phone's CPU.
- **Battery:** schedutil CPU governor and power-efficient workqueues.
- **Networking:** BBR congestion control with the fq_codel queue.
- **Root (optional):** KernelSU, KernelSU-Next or SukiSU built in, with optional SUSFS on SukiSU.

We do not overclock or undervolt. Every change is listed on the
[Tweaks](tweaks.md) page, and the full history is on
[GitHub](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq).

<div class="buttons">
<a class="button accent" href="download/">Download</a>
<a class="button" href="install/">Install guide</a>
<a class="button" href="upgrade/">Upgrade guide</a>
</div>

## Devices

| Phone | Model | Codename | Kernel | Firmware | Status |
|---|---|---|---|---|---|
| [Samsung Galaxy A23 5G](samsung-a23xq.md) | SM-A236B | a23xq | Linux 5.4 | Android 14 (One UI 6) | Beta |

## Variants

Each release comes in five variants. They differ only in the root manager
built into the kernel. The [download page](download.md) picks the right one
for you.

| Variant | Root manager | SUSFS |
|---|---|---|
| Vanilla | None | No |
| KernelSU | [KernelSU](root-managers.md#kernelsu) | No |
| KernelSU-Next | [KernelSU-Next](root-managers.md#kernelsu-next) | No |
| SukiSU | [SukiSU](root-managers.md#sukisu) | No |
| SukiSU-SUSFS | [SukiSU](root-managers.md#sukisu) | [Yes](root-managers.md#susfs) |

## Before you install

- Wonderful Kernel is in beta. Report problems on
  [GitHub](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq/issues)
  or in the [Telegram chat](https://t.me/wonderful_mobile_chat).
- Unlocking the bootloader on a Samsung phone trips Knox permanently and wipes
  your data.
- Flash Wonderful Kernel over the stock, unrooted boot image. If you used
  another kernel or root method before (Edward KernelSU, ro2rw, Magisk), go back
  to stock first.
- Do not make your vendor partition writeable because a guide or module asks
  you to. It can break the camera, and a bad module can stop the phone from
  booting.
