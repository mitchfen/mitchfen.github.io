# Mitchell Fenner's Personal Website

![CI/CD](https://github.com/mitchfen/mitchfen.github.io/workflows/CI/CD/badge.svg)

I was originally using the static site generator [Jekyll](https://github.com/jekyll/jekyll) to build my site, but eventually built my own static site with just HTML and Bootstrap CSS. That was a "good enough" solution, but I wanted to play around with React, GitHub actions, and Docker.

### GitHub Actions 🚀

- When code is pushed to the master branch, the [CI/CD workflow](https://github.com/mitchfen/mitchfen.github.io/actions) publishes the site.

### Docker 🐳

- I built a Docker image in order to test the website on platforms like Azure and Digital Ocean.
