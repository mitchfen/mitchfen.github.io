# Mitchell Fenner's Personal Website

[![Publish to GitHub Pages](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publish.yaml/badge.svg)](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publish.yaml)
[![Build and Push Docker Container](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/docker-push.yml/badge.svg)](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/docker-push.yml)

Being more interested in DevOps than front-end development, I am using this site as an opportunity to play with CI/CD pipelines, Docker, and cloud hosting platforms. The [implementing-backend](https://github.com/mitchfen/mitchfen.github.io/tree/implementing-backend) branch is where I am experimenting with a .NET Core 5.0 backend.

## How I automate it

1. publish.yaml 🚀
   - When code is pushed to the master branch, the [publish workflow](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publish.yaml) automatically runs. This action clones my repo to an Ubuntu environment, uses npm to create a production build, and publishes the build to the gh-pages branch.
2. docker-push.yaml 🐳
   - Upon success of the publish workflow, a [second workflow](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/docker-push.yml) builds and pushes my Docker image to dockerhub. This will be especially useful if I switch to Azure app service or Digital Ocean in the future.

## History

I started out using the static site generator [Jekyll](https://github.com/jekyll/jekyll) to build my site. It worked well and I liked being able to add new pages as markdown, but soon I wanted something more custom. I reworked the site using just HTML and Bootstrap CSS. Again that was a "good enough" solution, but it was tedious to copy the same HTML boilerplate to each page. Rewriting the site with React alleviated much of the tediousness, helped improve my JavaScript skills, and allowed me to implement Docker and CI/CD pipelines.
