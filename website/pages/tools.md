---
description: The build script, Nix shell and patch set behind Wonderful Kernel.
---

# Tools and Patches

The tools and patches we use to build Wonderful Kernel. They are open source
and live in each kernel repository, so you can build the kernel yourself or
reuse our work in your own kernel.

<div class="buttons">
<a class="button accent" href="@docs/tools/building/">Build the kernel</a>
<a class="button" href="@docs/tools/porting/">Port to your kernel</a>
</div>

## Build tools

<div class="card-grid">
<div class="card">
<h3>run.sh</h3>
<p>Asks which root manager you want, then builds. The easiest way to start.</p>
</div>
<div class="card">
<h3>build.sh</h3>
<p>Downloads the compiler, adds the root driver and patches, builds the kernel and packs a flashable zip.</p>
</div>
<div class="card">
<h3>shell.nix</h3>
<p>The whole build environment for Nix and NixOS. No packages to install by hand.</p>
</div>
<div class="card">
<h3>CI</h3>
<p>GitHub Actions builds every variant and publishes release zips with fixed names.</p>
</div>
</div>

## Patch sets

<div class="card-grid">
<div class="card logo-row">
<img src="../assets/logos/susfs.webp" alt="" width="48" height="48">
<span><h3>SUSFS for Linux 5.4</h3><p>SUSFS v2.4.0 ported by hand to Samsung's 5.4 kernel.</p></span>
</div>
<div class="card logo-row">
<img src="../assets/logos/kernelsu-next.webp" alt="" width="48" height="48">
<span><h3>KernelSU-Next hooks</h3><p>Manual hooks for KernelSU-Next, in the kernel source. They also fit the SUSFS driver.</p></span>
</div>
<div class="card logo-row">
<img src="../assets/logos/sukisu.svg" alt="" width="48" height="48">
<span><h3>SukiSU hooks</h3><p>Kernel hooks for SukiSU, with and without SUSFS, plus two driver fixes for 5.4.</p></span>
</div>
<div class="card logo-row">
<img src="../assets/logos/bakasu.svg" alt="" width="48" height="48">
<span><h3>BakaSU hooks</h3><p>Kernel hooks for BakaSU, with and without SUSFS. They pass BakaSU's build-time hook checks.</p></span>
</div>
</div>

Patches are applied only while building and removed afterwards, so the kernel
source stays clean. Source:
[`wonderful/`](https://github.com/wonderful-mobile/android_kernel_samsung_a23xq/tree/ksun-legacy-hooks/wonderful)
in the A23 5G kernel repository.
