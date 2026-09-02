#!/usr/bin/env bash
set -euo pipefail
mkdir -p -- git
mkdir -p -- .github
mkdir -p -- .github//workflows
mkdir -p -- .github//workflows
touch -- .github//workflows//ci.yml
mkdir -p -- .github//workflows
touch -- .github//workflows//security.yml
mkdir -p -- .github//workflows
touch -- .github//workflows//docker.yml
mkdir -p -- .github//workflows
touch -- .github//workflows//release.yml
mkdir -p -- .github
touch -- .github//dependabot.yml
mkdir -p -- .github
touch -- .github//CODEOWNERS
mkdir -p -- apps
mkdir -p -- apps//web
mkdir -p -- apps//web//src
mkdir -p -- apps//web//src//components
mkdir -p -- apps//web//src//layouts
mkdir -p -- apps//web//src//pages
mkdir -p -- apps//web//src//workers
mkdir -p -- apps//web//src//lib
mkdir -p -- apps//web//public
mkdir -p -- apps//web
touch -- apps//web//astro.config.mjs
mkdir -p -- apps//web
touch -- apps//web//package.json
mkdir -p -- apps//web
touch -- apps//web//tsconfig.json
mkdir -p -- apps//admin
mkdir -p -- apps//admin//src
mkdir -p -- apps//admin//src//app
mkdir -p -- apps//admin//src//components
mkdir -p -- apps//admin//src//features
mkdir -p -- apps//admin//src//services
mkdir -p -- apps//admin//src//state
mkdir -p -- apps//admin
touch -- apps//admin//angular.json
mkdir -p -- apps//admin
touch -- apps//admin//package.json
mkdir -p -- apps//admin
touch -- apps//admin//tsconfig.json
mkdir -p -- apps//extension
mkdir -p -- apps//extension//src
mkdir -p -- apps//extension//src//background
mkdir -p -- apps//extension//src//content
mkdir -p -- apps//extension//src//popup
mkdir -p -- apps//extension//src//options
mkdir -p -- apps//extension//src//sidepanel
mkdir -p -- apps//extension//src//devtools
mkdir -p -- apps//extension//public
mkdir -p -- apps//extension
touch -- apps//extension//manifest.json
mkdir -p -- apps//extension
touch -- apps//extension//package.json
mkdir -p -- apps//docs
mkdir -p -- apps//docs//src
mkdir -p -- apps//docs//src//content
mkdir -p -- apps//docs//src//layouts
mkdir -p -- apps//docs//src//components
mkdir -p -- apps//docs//src//pages
mkdir -p -- apps//docs
touch -- apps//docs//astro.config.mjs
mkdir -p -- apps//docs
touch -- apps//docs//package.json
mkdir -p -- services
mkdir -p -- services//gateway
mkdir -p -- services//gateway//src
mkdir -p -- services//gateway//src//routes
mkdir -p -- services//gateway//src//middleware
mkdir -p -- services//gateway//src//controllers
mkdir -p -- services//gateway//src//services
mkdir -p -- services//gateway//src//schemas
mkdir -p -- services//gateway
touch -- services//gateway//server.js
mkdir -p -- services//gateway
touch -- services//gateway//package.json
mkdir -p -- services//api
mkdir -p -- services//api//src
mkdir -p -- services//api//src//routes
mkdir -p -- services//api//src//controllers
mkdir -p -- services//api//src//domain
mkdir -p -- services//api//src//repositories
mkdir -p -- services//api//src//services
mkdir -p -- services//api//src//schemas
mkdir -p -- services//api
touch -- services//api//package.json
mkdir -p -- services//strapi
mkdir -p -- services//strapi//src
mkdir -p -- services//strapi//src//api
mkdir -p -- services//strapi//src//components
mkdir -p -- services//strapi//src//extensions
mkdir -p -- services//strapi//src//middlewares
mkdir -p -- services//strapi//config
mkdir -p -- services//strapi
touch -- services//strapi//package.json
mkdir -p -- services//realtime
mkdir -p -- services//realtime//src
mkdir -p -- services//realtime//src//channels
mkdir -p -- services//realtime//src//sessions
mkdir -p -- services//realtime//src//presence
mkdir -p -- services//realtime//src//telemetry
mkdir -p -- services//realtime
touch -- services//realtime//package.json
mkdir -p -- services//workers
mkdir -p -- services//workers//src
mkdir -p -- services//workers//src//consumers
mkdir -p -- services//workers//src//producers
mkdir -p -- services//workers//src//jobs
mkdir -p -- services//workers//src//handlers
mkdir -p -- services//workers
touch -- services//workers//package.json
mkdir -p -- services//go
mkdir -p -- services//go//cmd
mkdir -p -- services//go//internal
mkdir -p -- services//go//pkg
mkdir -p -- services//go//schemas
mkdir -p -- services//go
touch -- services//go//go.mod
mkdir -p -- services//go
touch -- services//go//go.sum
mkdir -p -- services//rust
mkdir -p -- services//rust//src
mkdir -p -- services//rust//crates
mkdir -p -- services//rust//tests
mkdir -p -- services//rust
touch -- services//rust//Cargo.toml
mkdir -p -- services//gleam
mkdir -p -- services//gleam//src
mkdir -p -- services//gleam//test
mkdir -p -- services//gleam
touch -- services//gleam//gleam.toml
mkdir -p -- services//java
mkdir -p -- services//java//src
mkdir -p -- services//java//src//main
mkdir -p -- services//java//src//test
mkdir -p -- services//java
touch -- services//java//pom.xml
mkdir -p -- services//php
mkdir -p -- services//php//src
mkdir -p -- services//php//tests
mkdir -p -- services//php
touch -- services//php//composer.json
mkdir -p -- services//php
touch -- services//php//phpunit.xml
mkdir -p -- services//hack
mkdir -p -- services//hack//src
mkdir -p -- services//hack//tests
mkdir -p -- services//hack
touch -- services//hack//hhvm.hhconfig
mkdir -p -- services//racket
mkdir -p -- services//racket//src
mkdir -p -- services//raku
mkdir -p -- services//raku//src
mkdir -p -- packages
mkdir -p -- packages//contracts
mkdir -p -- packages//contracts//src
mkdir -p -- packages//contracts//src//api
mkdir -p -- packages//contracts//src//events
mkdir -p -- packages//contracts//src//telemetry
mkdir -p -- packages//contracts//src//sync
mkdir -p -- packages//contracts//schemas
mkdir -p -- packages//contracts
touch -- packages//contracts//package.json
mkdir -p -- packages//sdk
mkdir -p -- packages//sdk//src
mkdir -p -- packages//sdk//src//http
mkdir -p -- packages//sdk//src//websocket
mkdir -p -- packages//sdk//src//sync
mkdir -p -- packages//sdk//src//events
mkdir -p -- packages//sdk
touch -- packages//sdk//package.json
mkdir -p -- packages//ui
mkdir -p -- packages//ui//src
mkdir -p -- packages//ui//src//components
mkdir -p -- packages//ui//src//primitives
mkdir -p -- packages//ui//src//themes
mkdir -p -- packages//ui
touch -- packages//ui//package.json
mkdir -p -- packages//wasm
mkdir -p -- packages//wasm//src
mkdir -p -- packages//wasm
touch -- packages//wasm//Cargo.toml
mkdir -p -- packages//wasm
touch -- packages//wasm//package.json
mkdir -p -- packages//config
mkdir -p -- packages//config//src
mkdir -p -- packages//config
touch -- packages//config//package.json
mkdir -p -- messaging
mkdir -p -- messaging//rabbitmq
mkdir -p -- messaging//rabbitmq//exchanges
mkdir -p -- messaging//rabbitmq//queues
mkdir -p -- messaging//rabbitmq//bindings
mkdir -p -- messaging//rabbitmq//policies
mkdir -p -- messaging//rabbitmq
touch -- messaging//rabbitmq//definitions.json
mkdir -p -- messaging//redis
mkdir -p -- messaging//redis//config
mkdir -p -- messaging//redis//scripts
mkdir -p -- messaging//redis//schemas
mkdir -p -- infra
mkdir -p -- infra//nginx
mkdir -p -- infra//nginx
touch -- infra//nginx//nginx.conf
mkdir -p -- infra//nginx//conf.d
mkdir -p -- infra//nginx//snippets
mkdir -p -- infra//nginx//sites
mkdir -p -- infra//docker
mkdir -p -- infra//docker//base
mkdir -p -- infra//docker//gateway
mkdir -p -- infra//docker//api
mkdir -p -- infra//docker//realtime
mkdir -p -- infra//docker//workers
mkdir -p -- infra//docker//strapi
mkdir -p -- infra//docker//compose
mkdir -p -- infra//kubernetes
mkdir -p -- infra//kubernetes//namespaces
mkdir -p -- infra//kubernetes//config
mkdir -p -- infra//kubernetes//secrets
mkdir -p -- infra//kubernetes//deployments
mkdir -p -- infra//kubernetes//services
mkdir -p -- infra//kubernetes//ingress
mkdir -p -- infra//kubernetes//jobs
mkdir -p -- infra//kubernetes//network-policies
mkdir -p -- infra//argocd
mkdir -p -- infra//argocd//projects
mkdir -p -- infra//argocd//applications
mkdir -p -- infra//argocd//applicationsets
mkdir -p -- infra//argocd//repositories
mkdir -p -- infra//terraform
mkdir -p -- infra//terraform//modules
mkdir -p -- infra//terraform//modules//network
mkdir -p -- infra//terraform//modules//compute
mkdir -p -- infra//terraform//modules//database
mkdir -p -- infra//terraform//modules//kubernetes
mkdir -p -- infra//terraform//modules//registry
mkdir -p -- infra//terraform//environments
mkdir -p -- infra//terraform//environments//dev
mkdir -p -- infra//terraform//environments//staging
mkdir -p -- infra//terraform//environments//production
mkdir -p -- infra//terraform
touch -- infra//terraform//versions.tf
mkdir -p -- infra//ansible
mkdir -p -- infra//ansible//inventories
mkdir -p -- infra//ansible//inventories//dev
mkdir -p -- infra//ansible//inventories//staging
mkdir -p -- infra//ansible//inventories//production
mkdir -p -- infra//ansible//playbooks
mkdir -p -- infra//ansible//roles
mkdir -p -- infra//ansible//group_vars
mkdir -p -- registry
mkdir -p -- registry//verdaccio
mkdir -p -- registry//verdaccio//config
mkdir -p -- registry//verdaccio//config
touch -- registry//verdaccio//config//config.yaml
mkdir -p -- registry//verdaccio//storage
mkdir -p -- ci
mkdir -p -- ci
touch -- ci//Jenkinsfile
mkdir -p -- ci//pipelines
mkdir -p -- ci//scripts
mkdir -p -- ci//agents
mkdir -p -- scripts
mkdir -p -- scripts
touch -- scripts//bootstrap.sh
mkdir -p -- scripts
touch -- scripts//doctor.sh
mkdir -p -- scripts
touch -- scripts//build.sh
mkdir -p -- scripts
touch -- scripts//test.sh
mkdir -p -- scripts
touch -- scripts//lint.sh
mkdir -p -- scripts
touch -- scripts//security.sh
mkdir -p -- scripts
touch -- scripts//dev.sh
mkdir -p -- scripts
touch -- scripts//release.sh
mkdir -p -- scripts
touch -- scripts//clean.sh
mkdir -p -- docs
mkdir -p -- docs//mdx
mkdir -p -- docs//mdx
touch -- docs//mdx//index.mdx
mkdir -p -- docs//mdx//architecture
mkdir -p -- docs//mdx//api
mkdir -p -- docs//mdx//frontend
mkdir -p -- docs//mdx//backend
mkdir -p -- docs//mdx//messaging
mkdir -p -- docs//mdx//infrastructure
mkdir -p -- docs//mdx//security
mkdir -p -- docs//mdx//operations
mkdir -p -- docs//wiki
mkdir -p -- docs//wiki
touch -- docs//wiki//Home.md
mkdir -p -- docs//wiki
touch -- docs//wiki//Architecture.md
mkdir -p -- docs//wiki
touch -- docs//wiki//API.md
mkdir -p -- docs//wiki
touch -- docs//wiki//Development.md
mkdir -p -- docs//wiki
touch -- docs//wiki//Deployment.md
mkdir -p -- docs//wiki
touch -- docs//wiki//Operations.md
mkdir -p -- docs//wiki
touch -- docs//wiki//Troubleshooting.md
mkdir -p -- docs//api
mkdir -p -- docs//api//generated
mkdir -p -- docs//api
touch -- docs//api//openapi.json
mkdir -p -- docs//api
touch -- docs//api//asyncapi.yaml
mkdir -p -- docs//api//jsdoc
mkdir -p -- docs//architecture
mkdir -p -- docs//architecture
touch -- docs//architecture//topology.mdx
mkdir -p -- docs//architecture
touch -- docs//architecture//data-flow.mdx
mkdir -p -- docs//architecture
touch -- docs//architecture//event-flow.mdx
mkdir -p -- docs//architecture
touch -- docs//architecture//deployment-flow.mdx
mkdir -p -- docs//architecture
touch -- docs//architecture//security-boundaries.mdx
mkdir -p -- templates
mkdir -p -- templates//ejs
mkdir -p -- templates//ejs
touch -- templates//ejs//layout.ejs
mkdir -p -- templates//ejs
touch -- templates//ejs//page.ejs
mkdir -p -- templates//ejs
touch -- templates//ejs//api.ejs
mkdir -p -- templates//ejs
touch -- templates//ejs//sidebar.ejs
mkdir -p -- templates//ejs
touch -- templates//ejs//header.ejs
mkdir -p -- templates//ejs
touch -- templates//ejs//footer.ejs
mkdir -p -- tests
mkdir -p -- tests//integration
mkdir -p -- tests//contract
mkdir -p -- tests//e2e
mkdir -p -- tests//load
mkdir -p -- tests//security
mkdir -p -- config
mkdir -p -- config//environments
mkdir -p -- config//environments
touch -- config//environments//development.env
mkdir -p -- config//environments
touch -- config//environments//staging.env
mkdir -p -- config//environments
touch -- config//environments//production.env
mkdir -p -- config//eslint
mkdir -p -- config//prettier
mkdir -p -- config//typescript
mkdir -p -- .
touch -- .dockerignore
mkdir -p -- .
touch -- .editorconfig
mkdir -p -- .
touch -- .env.example
mkdir -p -- .
touch -- .gitignore
mkdir -p -- .
touch -- .npmrc
mkdir -p -- .
touch -- .prettierignore
mkdir -p -- .
touch -- Dockerfile
mkdir -p -- .
touch -- docker-compose.yml
mkdir -p -- .
touch -- jsdoc.json
mkdir -p -- .
touch -- openapi.yaml
mkdir -p -- .
touch -- asyncapi.yaml
mkdir -p -- .
touch -- package.json
mkdir -p -- .
touch -- pnpm-workspace.yaml
mkdir -p -- .
touch -- README.md
mkdir -p -- .
touch -- CONTRIBUTING.md
mkdir -p -- .
touch -- SECURITY.md
mkdir -p -- .
touch -- CHANGELOG.md
mkdir -p -- .
touch -- LICENSE
mkdir -p -- .
touch -- sitemap.xml
