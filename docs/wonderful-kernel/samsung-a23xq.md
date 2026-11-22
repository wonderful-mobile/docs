# Samsung Galaxy A23 5G

![Samsung Galaxy A23 5G](https://dl.techtransthai.org/wonderful-mobile/devices/a23xq.webp){ width="96" }

!!! warning "Stock One UI, GSIs and One UI ports only"
    Wonderful Kernel for the Galaxy A23 5G is made for **stock One UI**,
    **GSIs** and **One UI ports**. **Do not use it on device-specific AOSP ROMs**
    such as LineageOS builds for a23xq: they will not boot. We will start
    working on a kernel for AOSP ROMs when those ROMs are ready.

| | |
|---|---|
| Model | Tested on SM-A236B and SM-A236E; any a23xq model with an unlockable bootloader should work |
| Codename | a23xq |
| SoC | Qualcomm Snapdragon 695 (2× Cortex-A78, 6× Cortex-A55, Adreno 619) |
| Kernel | Linux 5.4.254 (QGKI) |
| Built from | Samsung open source for firmware A236BXXSEEZB1 |
| Firmware | Android 14 vendor (One UI 6). Works with stock One UI, GSIs and One UI ports |
| Recovery | [Official TWRP](https://twrp.me/samsung/samsunggalaxya23xq.html) |
| Source | [android_kernel_samsung_a23xq](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq) |

## Download

Pick a file from the
[latest release](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq/releases/latest).
Not sure which one? See [Root managers](root-managers.md).

| File | Root manager | SUSFS |
|---|---|---|
| `Wonderful-a23xq-Vanilla.zip` | None | No |
| `Wonderful-a23xq-KernelSU-Next.zip` | KernelSU-Next | No |
| `Wonderful-a23xq-KernelSU-Next-SUSFS.zip` | KernelSU-Next | Yes |
| `Wonderful-a23xq-SukiSU.zip` | SukiSU | No |
| `Wonderful-a23xq-SukiSU-SUSFS.zip` | SukiSU | Yes |
| `Wonderful-a23xq-BakaSU.zip` | BakaSU | No |
| `Wonderful-a23xq-BakaSU-SUSFS.zip` | BakaSU | Yes |

Older builds: [dl.techtransthai.org](https://dl.techtransthai.org/wonderful-mobile/Wonderful-Kernel/a23xq/).

Then follow [Install](install.md) or [Upgrade](upgrade.md).

## Notes for this phone

- Samsung Knox kernel features (hypervisor, DEFEX, PROCA, FIVE, Knox network
  monitoring) are switched off. See [Tweaks](tweaks.md#samsung-knox-removed).
- Samsung's prebuilt vendor modules (camera, audio, Wi-Fi) are loaded as they
  are. That is why some debug options stay on: turning them off would change
  structures those modules depend on.
- The A23 5G uses dynamic partitions. TWRP can back up and flash **boot**, but
  not the individual system partitions.

## Known issues

None reported for the current release. Report problems on
[GitHub](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq/issues)
or in the [Telegram chat](https://t.me/wonderful_mobile_chat).

## Build it yourself

```bash
git clone https://github.com/wonderful-mobile/android_kernel_samsung_a23xq.git
cd android_kernel_samsung_a23xq
./run.sh
```

See [Building the kernel](../tools/building.md).
