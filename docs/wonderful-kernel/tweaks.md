# Tweaks

What Wonderful Kernel changes compared to the stock Samsung kernel. Every
change is chosen so Samsung's own drivers and modules keep working.

!!! note
    Wonderful Kernel never overclocks or undervolts. On the Snapdragon 695 the
    CPU voltage is controlled by firmware, and overclocking costs battery and
    stability for little real gain.

## Performance

| Tweak | What it does |
|---|---|
| Clang -O3 build | The whole kernel is compiled with Android Clang 12 at optimization level 3. |
| ThinLTO | Link-time optimization across the whole kernel, for smaller and faster code. |
| Cortex-A55 tuning | Code is scheduled for the phone's efficiency cores, which also runs well on the two Cortex-A78 cores. |
| Stock-tuned scheduler | Samsung's own scheduler (WALT) and boost settings are kept, so touch and app launches stay responsive. |
| I/O schedulers | Kyber, BFQ and mq-deadline are available in addition to Samsung's SSG. |

## Battery

| Tweak | What it does |
|---|---|
| schedutil by default | The CPU speed follows the scheduler's real load instead of guessing. |
| Power-efficient workqueues | Background kernel work is moved to whichever CPU is already awake, instead of waking an idle one. |
| Debug info removed | Less memory used by debugging data that phones never need. |
| More governors | Performance, powersave, userspace, ondemand and conservative are available for tuning apps. |

## Networking

| Tweak | What it does |
|---|---|
| BBR | Google's congestion control: faster downloads and lower lag on mobile and Wi-Fi. |
| fq_codel | Keeps queues short, so games and calls do not lag while something downloads. |

## Memory

| Tweak | What it does |
|---|---|
| ZRAM with LZ4 and ZSTD | Compressed swap in RAM, with fast and strong compression available. |
| ZRAM writeback | Rarely used compressed pages can be moved out to storage. |

## Root and freedom

| Tweak | What it does |
|---|---|
| Root built in (optional) | KernelSU-Next, SukiSU or BakaSU, chosen when you download. See [Root managers](root-managers.md). |
| SUSFS (optional) | Hides root from apps that block rooted phones. Available with every root manager. See [SUSFS](root-managers.md#susfs). |
| APatch compatible | The vanilla kernel can be patched with APatch, like Magisk. |

## Samsung Knox removed

Samsung's kernel ships several Knox security and monitoring features. They
block APatch and root, and some of them check every process start or network
connection. Wonderful Kernel switches them off:

| Stock feature | What it does | Why it is off |
|---|---|---|
| uh, RKP, KDP | Knox hypervisor that locks kernel memory and process credentials | Blocks APatch and root from changing credentials |
| HDM | Knox hypervisor device manager | Depends on the hypervisor |
| DEFEX | Samsung's root and exec restrictions | Kills or blocks root processes |
| PROCA, FIVE | Checks the integrity of every started process and its files | Not useful once the system is modified, and runs on every process start |
| Knox NCM | Knox network monitoring (per-app connection reporting for Knox enterprise) | Not needed outside managed work phones, and runs on every network connection |

Knox is already tripped once the bootloader is unlocked, so Knox apps such as
Secure Folder and Samsung Pay stop working either way.
