# nix-shell --run 'mkdocs serve'   ->  http://127.0.0.1:8000
{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  packages = [
    (pkgs.python3.withPackages (p: [ p.mkdocs p.pymdown-extensions ]))
  ];
}
