# Root managers

A root manager built into the kernel gives apps root access and lets you
install modules. Wonderful Kernel offers three, each with or without SUSFS,
plus a version without root. Each root manager has its own app; install the
one that matches your kernel variant.

| | KernelSU-Next | SukiSU | BakaSU |
|---|---|---|---|
| Based on | KernelSU | KernelSU | KernelSU |
| Modules | Yes | Yes | Yes |
| SUSFS variant | Yes | Yes | Yes |
| Manager app | [KernelSU-Next](https://github.com/KernelSU-Next/KernelSU-Next/releases) | [SukiSU](https://github.com/SukiSU-Nova/SukiSU-Nova/releases) | [BakaSU](https://github.com/Baka-SU/BakaSU/releases) |

Not sure? Pick **KernelSU-Next** without SUSFS. If you don't need root, pick
**Vanilla**; you can still root it later with APatch.

!!! note "Why there is no official KernelSU"
    [KernelSU](https://github.com/tiann/KernelSU) dropped support for non-GKI
    and GKI 1.0 kernels (Linux older than 5.10). Wonderful Kernel for the
    Galaxy A23 5G is Linux 5.4, so the official KernelSU cannot be built for
    it. The three root managers above are KernelSU forks that still support
    these kernels.

## KernelSU-Next {: #kernelsu-next }

![KernelSU-Next logo](../assets/logos/kernelsu-next.webp){ width="56" }

A KernelSU fork with extra module features. We use its `legacy` branch, which
is the one for non-GKI kernels.

KernelSU-Next itself no longer ships SUSFS for non-GKI kernels. The
KernelSU-Next-SUSFS variant uses sidex15's
[`legacy-susfs-v2`](https://github.com/sidex15/KernelSU-Next/tree/legacy-susfs-v2)
branch, which the KernelSU-Next team points to for this. It has no app of its
own: use the KernelSU-Next manager.

## SukiSU {: #sukisu }

![SukiSU logo](../assets/logos/sukisu.svg){ width="140" }

A KernelSU fork with SUSFS built in (formerly SukiSU-Ultra, now
[SukiSU-Nova](https://github.com/SukiSU-Nova/SukiSU-Nova)).

## BakaSU {: #bakasu }

![BakaSU logo](../assets/logos/bakasu.svg){ width="140" }

A KernelSU fork with SUSFS built in ([Baka-SU/BakaSU](https://github.com/Baka-SU/BakaSU)).
Without SUSFS, BakaSU handles boot scripts, setuid and safe mode itself, so it
needs fewer kernel hooks than the others.

## SUSFS {: #susfs }

![SUSFS logo](../assets/logos/susfs.webp){ width="56" }

[SUSFS](https://gitlab.com/simonpunk/susfs4ksu) hides root, mounts and
modified files from apps that refuse to run on rooted phones. Every root
manager above has a SUSFS variant. Configure it with the
[SUSFS module](https://github.com/sidex15/susfs4ksu-module/releases), installed
from your root manager.

SUSFS changes many parts of the kernel. Only use it if you need it.

---

Logos belong to their projects. The BakaSU logo is by
[OukaroMF](https://github.com/OukaroMF), licensed
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/), and is
shown unmodified.
