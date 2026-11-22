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
- A computer, a USB cable, and a Samsung flashing tool (see the table below).
- The Wonderful Kernel zip for your phone, from its device page
  (e.g. [Galaxy A23 5G](samsung-a23xq.md#download)). Not sure which variant?
  See [Root managers](root-managers.md).
- Your phone's stock firmware, in case you need to go back. Download the exact
  version you are running (Settings → About phone → Software information →
  Build number) from [samfw.com](https://samfw.com/).

### Flashing tools

| Computer | Tool | Notes |
|---|---|---|
| Windows | [Odin3](https://samfw.com/blog/download-odin-all-version) | Install the [Samsung USB driver](https://developer.samsung.com/android-usb-driver) first |
| Linux | [odin4](https://github.com/Llucs/odin4) or [Heimdall](https://git.sr.ht/~grimler/Heimdall) | Run with `sudo` |
| Other (macOS, ChromeOS, ...) | [Odin Web](https://samfw.com/Odinweb) | Untested |

## 1. Back up your phone

Unlocking the bootloader erases everything on the phone. Back up photos,
chats and anything else you want to keep.

## 2. Unlock the bootloader

### Prepare the phone

1. **Remove your screen lock first** (recommended): Settings → Lock screen →
   Screen lock type → **None**.
2. If Settings → Developer options shows **OEM unlocking**, turn it on.
   (To show Developer options: Settings → About phone → Software information →
   tap **Build number** seven times.)
3. On the latest firmware, turn on **Maintenance mode**: Settings →
   **Device care** → **Maintenance mode** → Turn on. Wait until the phone has
   restarted into Maintenance mode.

### Enter Download mode

With Maintenance mode on, restart the phone. While it restarts, hold
**Volume Up + Volume Down** with the USB cable connected to a **computer**
(not a charger).

### Unlock

One of two screens appears:

- **A message about unlocking the bootloader:** hold **Volume Up** for 5–7
  seconds until the unlock confirmation appears, then press **Volume Up** to
  confirm.
- **A blue screen with nothing on it:** hold **Volume Up** for 5–7 seconds
  until the screen flashes, then press **Volume Up** once more to confirm.

If the phone restarts, the bootloader is unlocked. The phone erases itself and
starts the setup wizard.

!!! note
    On some firmware the screen stays black after the Samsung logo. That is the
    bootloader warning screen: press the **Power** button to continue.

Set the phone up again before continuing.

## 3. Install TWRP

Wonderful Kernel is installed as a zip from a custom recovery. The Galaxy A23 5G
has [official TWRP](https://twrp.me/samsung/samsunggalaxya23xq.html).

1. Download the latest `.tar` for **a23xq** from the TWRP page.
2. Turn the phone off, then hold **Volume Up + Volume Down** while plugging
   it into the computer to enter Download mode.
   You see a warning screen first: press **Volume Up** to continue. On the
   latest firmware the warning text may be missing and the screen is just
   blue. Press **Volume Up** anyway, until you see the Download mode screen
   with a barcode and the Knox status.
3. Flash the TWRP `.tar` without rebooting:
    - **Odin3 (Windows):** put the `.tar` in the **AP** slot, turn **Auto
      Reboot** off in **Options**, and click **Start**.
    - **odin4 (Linux):** `sudo odin4 -a twrp-a23xq.tar` (it does not reboot
      unless you add `--reboot`).
    - **Heimdall (Linux):** extract `recovery.img` from the `.tar`, then
      `sudo heimdall flash --RECOVERY recovery.img --no-reboot`.
4. When flashing finishes (Odin3 shows **PASS**), hold **Volume Down + Power** until the screen goes
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
