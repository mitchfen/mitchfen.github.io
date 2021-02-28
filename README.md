# Mitchell Fenner's Personal Website

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black)]()
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=Bootstrap&logoColor=white)]()
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)]()

## Overview

My personal website displays all my links and projects.  
I originally built it using the static site generator Jekyll, but shifted to a hand written static site hosted on GitHub pages.

That was a "good enough" solution, but I wanted to learn React and ended up rewriting it again. That was a good opportunity to use GitHub Actions for CI/CD, but GitHub pages didn't make it easy to incorporate React Router.

Cue Docker and Azure. After implementing a minimal backend using ASP.NET Core 5.0, I Dockerized the site and now host it using Azure App Service. This is admittedly overkill for the time being, but it provides me a platform that I can build upon as I continue to learn.
