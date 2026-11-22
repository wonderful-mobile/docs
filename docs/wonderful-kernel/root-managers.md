# Root managers

A root manager built into the kernel gives apps root access and lets you
install modules. Wonderful Kernel offers three, plus a version without root.
Each has its own manager app. Install the one that matches your kernel
variant.

| | KernelSU | KernelSU-Next | SukiSU |
|---|---|---|---|
| Modules | Yes | Yes | Yes |
| SUSFS | No | No | Yes |
| How it hooks the kernel | Syscall table | Manual hooks | Manual hooks |
| Manager app | [backslashxx/KernelSU](https://github.com/backslashxx/KernelSU/releases) | [KernelSU-Next](https://github.com/KernelSU-Next/KernelSU-Next/releases) | [SukiSU](https://github.com/SukiSU-Nova/SukiSU-Nova/releases) |

Not sure? Pick **KernelSU-Next**. If you don't need root, pick **Vanilla**;
you can still root it later with APatch.

## KernelSU { #kernelsu }

<div class="card device-card">
<img src="../../assets/logos/kernelsu.webp" alt="KernelSU logo" width="72" height="72">
<span>
<h3>KernelSU</h3>
<p>The original kernel-based root solution.</p>
</span>
</div>

The official KernelSU only supports GKI kernels (Linux 5.10 and newer). For our
5.4 kernel we use [backslashxx/KernelSU](https://github.com/backslashxx/KernelSU),
a driver that follows upstream KernelSU and supports Linux 3.0 to 5.4. Install
the manager app from the same release page, because the app and driver must
match.

## KernelSU-Next { #kernelsu-next }

<div class="card device-card">
<img src="../../assets/logos/kernelsu-next.webp" alt="KernelSU-Next logo" width="72" height="72">
<span>
<h3>KernelSU-Next</h3>
<p>A KernelSU fork with extra module features.</p>
</span>
</div>

We use its `legacy` branch, which is the one for non-GKI kernels.
KernelSU-Next no longer supports SUSFS on non-GKI kernels.

## SukiSU { #sukisu }

<div class="card device-card">
<img src="../../assets/logos/sukisu.webp" alt="SukiSU logo" width="72" height="72">
<span>
<h3>SukiSU</h3>
<p>A KernelSU fork with built-in SUSFS support.</p>
</span>
</div>

SukiSU (formerly SukiSU-Ultra, now [SukiSU-Nova](https://github.com/SukiSU-Nova/SukiSU-Nova))
is the only option here that works with SUSFS on our kernel.

## SUSFS { #susfs }

<div class="card device-card">
<img src="../../assets/logos/susfs.webp" alt="SUSFS logo" width="72" height="72">
<span>
<h3>SUSFS</h3>
<p>Kernel-side root hiding, available with SukiSU.</p>
</span>
</div>

[SUSFS](https://gitlab.com/simonpunk/susfs4ksu) hides root, mounts and
modified files from apps that refuse to run on rooted phones. It is configured
with the [SUSFS module](https://github.com/sidex15/susfs4ksu-module/releases),
installed from the SukiSU manager. SUSFS changes many parts of the kernel, so
only use it if you need it.
