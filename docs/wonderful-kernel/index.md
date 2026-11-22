# Wonderful Kernel

Wonderful Kernel is a custom kernel built from the source code phone makers
publish. It keeps everything that makes your phone work, and makes it smoother,
better on battery and easier to root.

<div class="buttons">
<a class="button accent" href="../install/">Install</a>
<a class="button" href="tweaks/">See all tweaks</a>
</div>

## Features

- **Smoother:** compiled with Clang at -O3 with ThinLTO, tuned for the phone's CPU.
- **Better battery:** schedutil by default and power-efficient background work.
- **Faster networking:** BBR and fq_codel.
- **Root your way:** KernelSU-Next or SukiSU built in, optional SUSFS, or no root.
- **APatch compatible:** the vanilla kernel can be patched with APatch.
- **No Knox hypervisor:** Samsung's hypervisor and DEFEX are disabled.
- **Open:** every change is in public git history, and anyone can [build it](building.md).

## Supported devices

| Phone | Codename | Status |
|---|---|---|
| [Samsung Galaxy A23 5G](samsung-a23xq.md) | a23xq | Beta |

## Choosing a root manager

| | No root | KernelSU-Next | SukiSU |
|---|---|---|---|
| Root built into the kernel | No | Yes | Yes |
| Modules | No (or use APatch) | Yes | Yes |
| SUSFS available | No | No | Yes |
| Best for | Stock-like use | Most people | Hiding root from strict apps |

KernelSU-Next stopped supporting SUSFS on older (non-GKI) kernels like ours, so
SUSFS builds use SukiSU.

## Before you install

- Wonderful Kernel is in **beta**. Expect bugs and report them.
- Unlocking the bootloader trips **Knox** and can void your warranty.
- Always flash over the **stock, unrooted boot image**. Reflash stock before switching from another kernel or root method (Edward KernelSU, ro2rw, ...).
- Never make your **vendor partition** read-writeable because someone told you to. It can break the camera, and untrusted modules can brick your phone.
