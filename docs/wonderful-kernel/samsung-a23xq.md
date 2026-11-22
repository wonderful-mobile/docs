# Samsung Galaxy A23 5G

<div class="card device-card">
<img src="https://dl.techtransthai.org/wonderful-mobile/devices/a23xq.webp" alt="" width="72" height="72">
<span>
<h3>Samsung Galaxy A23 5G</h3>
<p>SM-A236B · a23xq · Snapdragon 695</p>
<span class="tags"><span class="tag beta">Beta</span></span>
</span>
</div>

| | |
|---|---|
| Model | SM-A236B (other models are not tested) |
| Codename | a23xq |
| SoC | Qualcomm Snapdragon 695 (2× Cortex-A78, 6× Cortex-A55, Adreno 619) |
| Kernel | Linux 5.4.254 (QGKI) |
| Built from | Samsung open source for firmware A236BXXSEEZB1 |
| Firmware | Android 14, One UI 6 |
| Recovery | [Official TWRP](https://twrp.me/samsung/samsunggalaxya23xq.html) |
| Source | [android_kernel_samsung_a23xq](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq) |

## Download

Use the [download page](download.md), or pick a file from the
[latest release](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq/releases/latest):

| File | Root manager | SUSFS |
|---|---|---|
| `Wonderful-a23xq-Vanilla.zip` | None | No |
| `Wonderful-a23xq-KernelSU.zip` | KernelSU | No |
| `Wonderful-a23xq-KernelSU-Next.zip` | KernelSU-Next | No |
| `Wonderful-a23xq-SukiSU.zip` | SukiSU | No |
| `Wonderful-a23xq-SukiSU-SUSFS.zip` | SukiSU | Yes |

Older builds: [dl.techtransthai.org](https://dl.techtransthai.org/wonderful-mobile/Wonderful-Kernel/a23xq/).

Then follow [Install](install.md) or [Upgrade](upgrade.md).

## Notes for this phone

- Samsung's Knox hypervisor (uh, RKP, KDP) and DEFEX are disabled in Wonderful
  Kernel. This is needed for root to work reliably.
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
