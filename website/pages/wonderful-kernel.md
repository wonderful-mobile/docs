---
description: Wonderful Kernel is a custom Android kernel built from the phone maker's source code, with optional built-in root.
---

# Wonderful Kernel

Wonderful Kernel is a custom Android kernel. We start from the kernel source
the phone maker publishes, keep everything the phone needs to work, and change
only what we can explain. We do not overclock or undervolt.

<div class="buttons">
<a class="button accent" href="../download/">Download</a>
<a class="button" href="@docs/wonderful-kernel/install/">Install guide</a>
<a class="button" href="@docs/wonderful-kernel/upgrade/">Upgrade guide</a>
</div>

## What it changes

<div class="card-grid">
<div class="card">
<h3>Performance</h3>
<p>Built with Clang at -O3 with ThinLTO, tuned for the phone's CPU. Samsung's scheduler settings are kept.</p>
</div>
<div class="card">
<h3>Battery</h3>
<p>schedutil CPU governor and power-efficient workqueues, so idle cores stay idle.</p>
</div>
<div class="card">
<h3>Networking</h3>
<p>BBR congestion control with the fq_codel queue for lower latency.</p>
</div>
<div class="card">
<h3>Samsung Knox removed</h3>
<p>Knox's hypervisor (uh, RKP, KDP), DEFEX, PROCA, FIVE and Knox network monitoring are switched off. APatch and root work, and less runs in the background.</p>
</div>
<div class="card">
<h3>Root</h3>
<p>Optional. KernelSU-Next, SukiSU or BakaSU built into the kernel, each with or without SUSFS.</p>
</div>
</div>

The full list is on the [Tweaks](@docs/wonderful-kernel/tweaks/) page.

## Supported phones

<div class="card-grid">
<a class="card device-card" href="@docs/wonderful-kernel/samsung-a23xq/">
<img src="https://dl.techtransthai.org/wonderful-mobile/devices/a23xq.webp" alt="" width="72" height="72" loading="lazy">
<span>
<h3>Samsung Galaxy A23 5G</h3>
<p>SM-A236B, SM-A236E (any a23xq) · Snapdragon 695 · Linux 5.4</p>
<span class="tags"><span class="tag">a23xq</span><span class="tag beta">Beta</span></span>
</span>
</a>
</div>

<div class="notice">
<strong>Stock One UI, GSIs and One UI ports only.</strong> Do not use Wonderful
Kernel for the Galaxy A23 5G on device-specific AOSP ROMs such as LineageOS:
they will not boot. We will start working on a kernel for AOSP ROMs when those
ROMs are ready.
</div>

Want Wonderful Kernel on another phone?
[Fill in the device request form](https://forms.gle/Nhc1xfisRKfXGBL47).

## Variants

Every release comes in seven variants: no root, or one of three root managers
with or without SUSFS.

<div class="card-grid">
<div class="card logo-row">
<img src="../assets/logos/kernelsu-next.webp" alt="KernelSU-Next logo" width="48" height="48">
<span><h3>KernelSU-Next</h3><p>KernelSU fork with extra module features. A good default.</p></span>
</div>
<div class="card logo-row">
<img src="../assets/logos/sukisu.svg" alt="SukiSU logo" width="48" height="48">
<span><h3>SukiSU</h3><p>KernelSU fork with SUSFS built in.</p></span>
</div>
<div class="card logo-row">
<img src="../assets/logos/bakasu.svg" alt="BakaSU logo" width="48" height="48">
<span><h3>BakaSU</h3><p>KernelSU fork with SUSFS built in. Needs the fewest kernel hooks.</p></span>
</div>
<div class="card logo-row">
<img src="../assets/logos/susfs.webp" alt="SUSFS logo" width="48" height="48">
<span><h3>+ SUSFS</h3><p>Optional for every root manager. Hides root from apps that block rooted phones.</p></span>
</div>
</div>

There is also a **Vanilla** variant without root.

**No official KernelSU:** KernelSU dropped support for non-GKI and GKI 1.0
kernels (Linux older than 5.10), so it cannot be built for our 5.4 kernel.
Comparison and manager apps: [Root managers](@docs/wonderful-kernel/root-managers/).
