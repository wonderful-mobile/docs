# Wonderful Mobile Docs

This repository holds two MkDocs sites for the Wonderful Mobile Project:

| Folder | What | Look |
|---|---|---|
| `docs/` + `mkdocs.yml` | Documentation: install, upgrade, root managers, devices, building, porting | readthedocs theme, with search |
| `website/` | Website: home, Wonderful Kernel, download guide, Tools and Patches, our team | GNOME style theme in `website/theme/` |

Both only need `mkdocs` and `pymdown-extensions`.

## Running locally

```bash
git clone https://github.com/wonderful-mobile/docs.git
cd docs/

mkdocs serve -a 127.0.0.1:8000                     # docs
cd website && DOCS_URL=http://127.0.0.1:8000/ \
  mkdocs serve -a 127.0.0.1:8001                   # website
```

With Nix, prefix each command with `nix-shell --run` (see `shell.nix`).

In website pages, links written as `@docs/...` point to the docs site. The
default target is the published docs; `DOCS_URL` overrides it.

## Adding a device

1. Add a device page under `docs/wonderful-kernel/` and list it in `mkdocs.yml`.
2. Add the device to `website/pages/assets/devices.json` so the download guide offers it.

## Contributing

Create a PR for new devices, extra information, typo fixes, etc.

## License

This project is licensed under CC BY-SA 4.0, see [LICENSE](/LICENSE) for more information.
