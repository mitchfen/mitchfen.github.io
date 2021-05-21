[![Publish site](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishSite.yaml/badge.svg)](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishSite.yaml)
[![Publish container](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishContainer.yml/badge.svg)](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishContainer.yml)

# Mitchell Fenner's Personal Website

I'm more interested in DevOps than front-end development, so I'm using this site as an opportunity to play with CI/CD pipelines, Docker, and cloud hosting platforms.

## Tech Stack

**Client:** React

**CI/CD:** GitHub Actions

## Run Locally

Clone, install dependencies, and run:

```bash
  git clone https://github.com/mitchfen/mitchfen.github.io.git
  cd mitchfen.github.io
  npm install
  npm run start
```

## Appendix

### How I automate it

- publish.yaml 🚀
  - When code is pushed to the master branch, the [publish workflow](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publish.yaml) automatically runs. This action clones my repo to an Ubuntu environment, uses npm to create a production build, and publishes the build to the gh-pages branch.
- docker-push.yaml 🐳
  - Upon success of the publish workflow, a [second workflow](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/docker-push.yml) builds and pushes my Docker image to dockerhub. This will be especially useful if I switch to Azure app service or Digital Ocean in the future.

### History

I started out using the static site generator [Jekyll](https://github.com/jekyll/jekyll) to build my site.
It worked well and I liked being able to add new pages as markdown, but soon I wanted something more custom.
I reworked the site using just HTML and Bootstrap CSS.
Again that was a "good enough" solution, but it was tedious to copy the same HTML boilerplate to each page.
Rewriting the site with React alleviated much of the tediousness, helped improve my JavaScript skills, and allowed me to implement Docker and CI/CD pipelines.
