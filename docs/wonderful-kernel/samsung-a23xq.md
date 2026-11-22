# Samsung Galaxy A23 5G (a23xq)

<div class="card device-card">
<img src="https://dl.techtransthai.org/wonderful-mobile/devices/a23xq.webp" alt="" width="72" height="72">
<span>
<h3>Samsung Galaxy A23 5G</h3>
<p>SM-A236B · Snapdragon 695 · Android 14 (One UI 6) · Linux 5.4</p>
<span class="tags"><span class="tag">a23xq</span><span class="tag beta">Beta</span></span>
</span>
</div>

## Warning

- **Modifying your device trips the Knox e-fuse and can void your warranty.**
- **You are responsible for any damage to your phone, soft or hard brick.**
- Built from Samsung's SM-A236B source (firmware A236BXXSEEZB1). Other models
  of the A23 5G are not tested.

## Download

The easiest way is the [install guide](../install.md): it asks which root
manager you want and gives you the right zip.

Or pick a file from the [latest release](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq/releases/latest):

| File | Root | SUSFS |
|---|---|---|
| `Wonderful-a23xq-Vanilla.zip` | None | No |
| `Wonderful-a23xq-KernelSU-Next.zip` | KernelSU-Next | No |
| `Wonderful-a23xq-SukiSU.zip` | SukiSU | No |
| `Wonderful-a23xq-SukiSU-SUSFS.zip` | SukiSU | Yes |

Older builds are on [dl.techtransthai.org](https://dl.techtransthai.org/wonderful-mobile/Wonderful-Kernel/a23xq/).

## Flashing

1. Unlock the bootloader.
2. Make sure you are on the **stock, unrooted boot image**. Keep a copy of it.
3. Flash the zip with a custom recovery, or with an app that flashes
   AnyKernel3 zips. The zip only replaces the kernel; the rest of your boot
   image is kept.
4. Reboot, then install the manager app for your root manager:
   [KernelSU-Next](https://github.com/KernelSU-Next/KernelSU-Next/releases) or
   [SukiSU](https://github.com/SukiSU-Nova/SukiSU-Nova/releases).

To go back to stock, flash your stock boot image again.

## Known issues

- Found an issue? Tell us in the [issue tracker](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq/issues)
  or the [Telegram chat](https://t.me/wonderful_mobile_chat).

## Building it yourself

See [Building](building.md). In short:

```bash
git clone https://github.com/wonderful-mobile/android_kernel_samsung_a23xq.git
cd android_kernel_samsung_a23xq
./run.sh
```
