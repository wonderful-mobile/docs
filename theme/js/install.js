// Install guide: asks which device, root manager and SUSFS, then links the
// matching flashable zip from the device's latest GitHub release.
//
// Release assets must be named:  Wonderful-<codename>-<variant>.zip
// e.g. Wonderful-a23xq-KernelSU-Next.zip, Wonderful-a23xq-SukiSU-SUSFS.zip
// Devices and root managers live in docs/assets/devices.json.

(function () {
  "use strict";

  const root = document.getElementById("wizard");
  if (!root) return;
  const docsBase = root.dataset.docs;

  const state = { step: 0, device: null, root: null, susfs: null };
  let data = null;

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v === null || v === undefined) continue;
      if (k === "class") node.className = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? "" : v);
    }
    for (const c of children.flat()) {
      if (c === null || c === undefined || c === false) continue;
      node.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }

  const device = () => data.devices.find((d) => d.codename === state.device);
  const susfsPossible = () => device() && device().susfs.includes(state.root);

  function steps() {
    const list = ["Device", "Root"];
    if (state.root === null || susfsPossible()) list.push("SUSFS");
    list.push("Download");
    return list;
  }

  function stepName() {
    return steps()[state.step];
  }

  function go(delta) {
    state.step = Math.max(0, Math.min(steps().length - 1, state.step + delta));
    render();
    root.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function choice({ selected, disabled, image, title, badge, text, onclick }) {
    return el("button", { class: "choice" + (selected ? " selected" : ""), type: "button", disabled, onclick },
      image ? el("img", { src: image, alt: "", width: 48, height: 48, loading: "lazy" }) : null,
      el("span", {},
        el("strong", {}, title, badge ? el("span", { class: "badge" }, badge) : null),
        el("small", {}, text)));
  }

  function nav(canNext) {
    return el("div", { class: "wizard-nav" },
      state.step > 0 ? el("button", { class: "button", type: "button", onclick: () => go(-1) }, "Back") : el("span"),
      stepName() !== "Download"
        ? el("button", { class: "button accent", type: "button", disabled: !canNext, onclick: () => go(1) }, "Next")
        : el("span"));
  }

  function questionDevice() {
    return el("div", { class: "question" },
      el("h2", {}, "Which phone do you have?"),
      el("p", { class: "help" }, "Check Settings → About phone → Model number."),
      el("div", { class: "choices" },
        data.devices.map((d) => choice({
          selected: state.device === d.codename,
          image: d.image,
          title: d.name,
          badge: d.status,
          text: `${d.models} · ${d.soc} · ${d.firmware}`,
          onclick: () => {
            if (state.device !== d.codename) { state.root = null; state.susfs = null; }
            state.device = d.codename;
            render();
          },
        }))),
      el("p", { class: "help" }, "Phone not listed? It is not supported yet. Ask in the Telegram chat."),
      nav(state.device !== null));
  }

  function questionRoot() {
    const d = device();
    return el("div", { class: "question" },
      el("h2", {}, "Do you want root?"),
      el("p", { class: "help" }, "Root lets apps and modules change the system. The root manager is built into the kernel, so pick one now."),
      el("div", { class: "choices" },
        Object.entries(data.roots).map(([id, r]) => choice({
          selected: state.root === id,
          disabled: !d.roots.includes(id),
          title: r.name,
          badge: r.recommended ? "Recommended" : null,
          text: d.roots.includes(id) ? r.summary : "Not available for this phone yet.",
          onclick: () => { state.root = id; state.susfs = susfsPossible() ? state.susfs : false; render(); },
        }))),
      nav(state.root !== null));
  }

  function questionSusfs() {
    return el("div", { class: "question" },
      el("h2", {}, "Add SUSFS?"),
      el("p", { class: "help" },
        "SUSFS hides root from apps that refuse to run on rooted phones, such as some banking apps and games. " +
        "It is optional. If you are not sure, choose No: you can always flash the other zip later."),
      el("div", { class: "choices" },
        choice({ selected: state.susfs === false, title: "No", badge: "Recommended",
          text: "Simpler and closest to the tested setup.",
          onclick: () => { state.susfs = false; render(); } }),
        choice({ selected: state.susfs === true, title: "Yes, add SUSFS",
          text: "You will also need the SUSFS module in your root manager.",
          onclick: () => { state.susfs = true; render(); } })),
      nav(state.susfs !== null));
  }

  function result() {
    const d = device();
    const r = data.roots[state.root];
    const variant = r.variant + (state.susfs ? "-SUSFS" : "");
    const file = `Wonderful-${d.codename}-${variant}.zip`;
    const url = `https://github.com/${d.repo}/releases/latest/download/${file}`;

    return el("div", { class: "question" },
      el("h2", {}, "Your kernel is ready"),
      el("div", { class: "result" },
        el("dl", {},
          el("dt", {}, "Phone"), el("dd", {}, `${d.name} (${d.codename})`),
          el("dt", {}, "Root"), el("dd", {}, r.name),
          el("dt", {}, "SUSFS"), el("dd", {}, state.susfs ? "Yes" : "No"),
          el("dt", {}, "File"), el("dd", {}, file)),
        el("div", { class: "buttons" },
          el("a", { class: "button accent", href: url }, "Download flashable zip"),
          el("a", { class: "button", href: `https://github.com/${d.repo}/releases/latest`, target: "_blank", rel: "noopener" }, "Release notes"))),

      el("div", { class: "notice" },
        el("strong", {}, "Before you flash: "),
        "unlocking the bootloader trips Knox and can void your warranty. Back up your data, and keep a copy of your stock boot.img so you can go back."),

      el("h3", {}, "How to flash"),
      el("ol", { class: "flash-steps" },
        el("li", {}, "Your bootloader must be unlocked, and you need a custom recovery or a root app that can flash AnyKernel3 zips."),
        el("li", {}, "Start from the stock (unrooted) boot image if you are switching from another kernel or root method."),
        el("li", {}, "Copy the zip to your phone and flash it in recovery (Install → select zip), or with your current root manager."),
        el("li", {}, "Reboot.",),
        r.manager ? el("li", {}, "Install the ", el("a", { href: r.manager, target: "_blank", rel: "noopener" }, r.manager_name), " app to manage root.") : null,
        state.susfs ? el("li", {}, "Install the SUSFS module from your root manager to configure what gets hidden.") : null),
      el("p", {}, "More details: ", el("a", { href: docsBase + d.docs }, `${d.name} guide`), "."),
      nav(true));
  }

  function render() {
    const names = steps();
    const body = { Device: questionDevice, Root: questionRoot, SUSFS: questionSusfs, Download: result }[stepName()]();
    root.replaceChildren(
      el("div", { class: "steps" },
        names.map((n, i) => el("span", { class: i === state.step ? "current" : i < state.step ? "done" : "" }, `${i + 1}. ${n}`))),
      body);
  }

  fetch(root.dataset.devices)
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then((json) => {
      data = json;
      if (data.devices.length === 1) state.device = data.devices[0].codename;
      render();
    })
    .catch(() => {
      root.replaceChildren(el("div", { class: "notice" }, "Could not load the device list. Please reload the page."));
    });
})();
