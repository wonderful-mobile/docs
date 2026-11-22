# Upgrade

How to move to a newer Wonderful Kernel release, switch variants, or update
your phone's firmware. First time? See [Install](install.md).

## Which case are you in?

| You want to | Do this |
|---|---|
| Install a newer release, **same variant** | [Flash over it](#same-variant) |
| Change root manager, or add/remove SUSFS | [Go back to stock first](#change-variant) |
| Update One UI (Samsung firmware) | [Update firmware](#update-firmware) |
| Remove Wonderful Kernel | [Go back to stock](#go-back-to-stock) |

Check which variant you have in Settings → About phone → Software information
→ **Kernel version**, for example `5.4.254-wonderful-0.8-KernelSU-Next`.

## Same variant {: #same-variant }

1. Download the new release of the **same variant** from your
   [device page](samsung-a23xq.md#download).
2. Flash it in TWRP (**Install** → select the zip → swipe), or with
   Kernel Flasher if you flash from the phone.
3. Reboot.
4. If the release notes say the root driver was updated, update the manager
   app too (see the table in [Install, step 6](install.md#6-set-up-root-root-variants-only)).

Your apps, data, root settings and modules are kept.

## Change variant {: #change-variant }

Root managers keep their own settings and modules, and switching directly
from one to another can leave the phone half-rooted.

1. In your current root manager, disable or uninstall your modules.
2. In TWRP, restore your **stock boot backup**, or flash the `boot.img` from
   your stock firmware (**Install → Install Image → Boot**).
3. Reboot once, then uninstall the old manager app.
4. Reboot to TWRP and flash the new variant.
5. Install the new manager app, then reinstall your modules.

## Update firmware {: #update-firmware }

Each Wonderful Kernel release is built for a specific firmware version, listed
on the [device page](samsung-a23xq.md). A firmware update replaces the
kernel, and often TWRP too.

1. Wait until a Wonderful Kernel release supports the new firmware.
2. Enter Download mode ([Install, step 3](install.md#3-install-twrp)) and
   flash the new firmware (BL, AP, CP and **HOME_CSC**). Use HOME_CSC, not CSC,
   or your data is wiped.
    - **Odin3 (Windows):** put each file in its slot and click **Start**.
    - **odin4 (Linux):** `sudo odin4 -b BL_*.tar.md5 -a AP_*.tar.md5 -c CP_*.tar.md5 -s HOME_CSC_*.tar.md5 --reboot`
3. Install TWRP again ([Install, step 3](install.md#3-install-twrp)) and take
   a new boot backup.
4. Flash the matching Wonderful Kernel release.

Using a kernel built for older firmware on newer firmware can break Wi-Fi,
the camera or booting.

## Go back to stock {: #go-back-to-stock }

Restore your stock boot backup in TWRP, or flash the `boot.img` from your
stock firmware. To also remove TWRP, flash the stock firmware with Odin3 or
odin4 (HOME_CSC keeps your data).
