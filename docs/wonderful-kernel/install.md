# Install

How to install Wonderful Kernel for the first time. Already have it? See
[Upgrade](upgrade.md).

!!! danger "Read first"
    Unlocking the bootloader wipes your phone and trips Knox permanently
    (Samsung Pay, Secure Folder and some banking apps stop working). You are
    responsible for your device.

## What you need

- A supported phone running **stock One UI, a GSI or a One UI port**, see
  [Devices](index.md#devices). Not for device-specific AOSP ROMs such as LineageOS.
- A Windows PC with Odin (Samsung's flashing tool), the
  [Samsung USB driver](https://developer.samsung.com/android-usb-driver), and a
  USB cable.
- The Wonderful Kernel zip for your phone, from its device page
  (e.g. [Galaxy A23 5G](samsung-a23xq.md#download)). Not sure which variant?
  See [Root managers](root-managers.md).
- Your phone's stock firmware, in case you need to go back. Download the exact
  version you are running (Settings → About phone → Software information →
  Build number) with a tool such as [samfirm.js](https://github.com/jesec/samfirm.js)
  or [Bifrost](https://github.com/zacharee/SamloaderKotlin).

## 1. Back up your phone

Unlocking the bootloader erases everything on the phone. Back up photos,
chats and anything else you want to keep.

## 2. Unlock the bootloader

1. Settings → About phone → Software information → tap **Build number** seven
   times to turn on Developer options.
2. Settings → Developer options → turn on **OEM unlocking**. If it is missing,
   connect to the internet, wait a few days, and check again.
3. Turn the phone off. Hold **Volume Up + Volume Down** and plug in the USB
   cable to enter Download mode.
4. Long-press **Volume Up** to go to the unlock screen, then press
   **Volume Up** again to confirm. The phone wipes itself and reboots.
5. Set the phone up again, connect to the internet, and check that
   **OEM unlocking** is still on and greyed out.

## 3. Install TWRP

Wonderful Kernel is installed as a zip from a custom recovery. The Galaxy A23 5G
has [official TWRP](https://twrp.me/samsung/samsunggalaxya23xq.html).

1. Download the latest `.tar` for **a23xq** from the TWRP page.
2. Boot the phone into Download mode (step 2.3).
3. Open Odin, put the TWRP `.tar` in the **AP** slot, and in **Options** turn
   **Auto Reboot** off. Click **Start**.
4. When Odin says **PASS**, hold **Volume Down + Power** until the screen goes
   off, then immediately hold **Volume Up + Power** to boot straight into TWRP.
   If the phone boots to Android first, the stock recovery comes back and you
   have to repeat this step.

Follow the TWRP page and its XDA support thread if they list extra steps for
your firmware.

## 4. Back up the stock boot image

In TWRP, go to **Backup**, select **Boot**, and swipe. Copy the backup
(`TWRP/BACKUPS/` on your storage) to your PC. This is how you go back to the
stock kernel.

## 5. Flash Wonderful Kernel

1. Copy the zip to the phone (or use **Advanced → ADB Sideload**).
2. In TWRP, go to **Install**, select the zip, and swipe to flash.
3. **Reboot → System.**

The zip only replaces the kernel. Your data, apps and the rest of the boot
image stay as they are.

## 6. Set up root (root variants only)

Install the manager app that matches your variant. The app and the kernel
must come from compatible versions, so use the release linked here:

| Variant | Manager app |
|---|---|
| KernelSU-Next, KernelSU-Next-SUSFS | [KernelSU-Next releases](https://github.com/KernelSU-Next/KernelSU-Next/releases) |
| SukiSU, SukiSU-SUSFS | [SukiSU releases](https://github.com/SukiSU-Nova/SukiSU-Nova/releases) |
| BakaSU, BakaSU-SUSFS | [BakaSU releases](https://github.com/Baka-SU/BakaSU/releases) |

For a SUSFS variant, also install the
[SUSFS module](https://github.com/sidex15/susfs4ksu-module/releases) from your
root manager.

## Check that it worked

Settings → About phone → Software information → **Kernel version** should
contain `wonderful`.

## If the phone does not boot

1. Hold **Volume Down + Power** to force a restart, then **Volume Up + Power**
   to enter TWRP.
2. **Restore** the boot backup from step 4, or flash the `boot.img` from your
   stock firmware with **Install → Install Image → Boot**.
3. Ask in the [Telegram chat](https://t.me/wonderful_mobile_chat) with your
   variant and firmware version.

## Already rooted? Flash from an app

If your phone already has root (Magisk, APatch or KernelSU), you can flash the
zip without TWRP using [Kernel Flasher](https://github.com/fatalcoder524/KernelFlasher)
or [Horizon Kernel Flasher](https://apt.izzysoft.de/packages/xzr.hkf). Back up
the boot partition in the app first.
