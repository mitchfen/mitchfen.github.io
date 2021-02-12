# Mitchell Fenner's personal website

[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black)]()
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white)]()
[![Node](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)]()
[![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=NPM&logoColor=white)]()

## Overview

- Displays all my links and projects: [mitchfen.xyz](https://mitchfen.xyz)

- I was using the static site generator [Jekyll](https://github.com/jekyll/jekyll), but I wanted to learn more about these technologies.

## GitHub Actions 🚀

- When code is pushed to the master branch, the CI/CD workflow outlined in publish.yaml executes:
  - Clone the repo to an Ubuntu environment
  - Setup Node.js and install dependencies
  - Build the project, including CNAME and 404.html
  - Publish to the gh-pages branch
