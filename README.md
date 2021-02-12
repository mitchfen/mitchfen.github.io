# Mitchell Fenner's personal website

![CI/CD](https://github.com/mitchfen/mitchfen.github.io/workflows/CI/CD/badge.svg)

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black)]()
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=Bootstrap&logoColor=white)]()
[![Node](https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white)]()
[![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat&logo=NPM&logoColor=white)]()

## Overview

- Displays all my links and projects: [mitchfen.xyz](https://mitchfen.xyz)

- I was using the static site generator [Jekyll](https://github.com/jekyll/jekyll), but I wanted to learn more about these technologies.

## GitHub Actions 🚀

- When code is pushed to the master branch, the [CI/CD workflow](https://github.com/mitchfen/mitchfen.github.io/actions) executes and does the following:
  1. Clones the repo to an Ubuntu environment.
  2. Sets up node.js and installs the dependencies.
  3. Builds the project, including copying CNAME and 404.html.
  4. Pushes the build to the gh-pages branch where it is deployed.
