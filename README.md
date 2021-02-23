# Mitchell Fenner's Personal Website

![CI/CD](https://github.com/mitchfen/mitchfen.github.io/workflows/CI/CD/badge.svg)  
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black)]()
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=Bootstrap&logoColor=white)]()
[![Node](https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white)]()
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)]()

## Overview

- Displays all my links and projects!

### GitHub Actions

- When code is pushed to the master branch, the [CI/CD workflow](https://github.com/mitchfen/mitchfen.github.io/actions) executes and does the following:
  1. Clones the repo to an Ubuntu environment.
  2. Sets up node.js and installs the dependencies.
  3. Builds the project, including copying CNAME and 404.html.
  4. Pushes the build to the gh-pages branch where it is deployed.

### Docker

- I built a Docker image in case I deploy the site elsewhere in the future. View it on [Docker Hub](https://hub.docker.com/r/mitchfen/personal_website).
- For now I will be building new images manually when I make big changes to the site. Hopefully soon I can setup a second GitHub actions workflow which will automate this process.
