#!/usr/bin/env bash
set -euo pipefail
mkdir -p -- git
mkdir -p -- .
touch -- nx.json
mkdir -p -- .
touch -- package.json
mkdir -p -- .
touch -- pnpm-workspace.yaml
mkdir -p -- .
touch -- tsconfig.base.json
mkdir -p -- .
touch -- eslint.config.mjs
mkdir -p -- .
touch -- nx.json
mkdir -p -- .
touch -- project.json
mkdir -p -- apps
mkdir -p -- apps//web
touch -- apps//web/project.json
mkdir -p -- apps//admin
touch -- apps//admin/project.json
mkdir -p -- apps//extension
touch -- apps//extension/project.json
mkdir -p -- apps//docs
touch -- apps//docs/project.json
mkdir -p -- apps//storybook
touch -- apps//storybook/project.json
mkdir -p -- git
mkdir -p -- .nx
mkdir -p -- .nx//cache
mkdir -p -- .nx//workspace-data
mkdir -p -- .
touch -- nx.json
mkdir -p -- apps
mkdir -p -- apps//web
mkdir -p -- apps//web//src
mkdir -p -- apps//web//src//state
mkdir -p -- apps//web//src//state//redux
mkdir -p -- apps//web//src//state//rxjs
mkdir -p -- apps//web//src//state//selectors
mkdir -p -- apps//web//src//db
mkdir -p -- apps//web//src//db//dexie
mkdir -p -- apps//web//src//db//watermelon
mkdir -p -- apps//web//src//streams
mkdir -p -- apps//admin
mkdir -p -- apps//admin//src
mkdir -p -- apps//admin//src//state
mkdir -p -- apps//admin//src//state//redux
mkdir -p -- apps//admin//src//state//rxjs
mkdir -p -- apps//admin//src//state//selectors
mkdir -p -- apps//admin//src//streams
mkdir -p -- apps//extension
mkdir -p -- apps//extension//src
mkdir -p -- apps//extension//src//state
mkdir -p -- apps//extension//src//state//redux
mkdir -p -- apps//extension//src//state//rxjs
mkdir -p -- apps//extension//src//db
mkdir -p -- apps//extension//src//db//dexie
mkdir -p -- apps//extension//src//streams
mkdir -p -- apps//storybook
mkdir -p -- apps//storybook//src
mkdir -p -- apps//storybook//src//state
mkdir -p -- apps//storybook//src//fixtures
mkdir -p -- apps//flutter
mkdir -p -- packages
mkdir -p -- packages//state
mkdir -p -- packages//state//src
mkdir -p -- packages//state//src//redux
mkdir -p -- packages//state//src//redux//store
mkdir -p -- packages//state//src//redux//slices
mkdir -p -- packages//state//src//redux//reducers
mkdir -p -- packages//state//src//redux//actions
mkdir -p -- packages//state//src//redux//selectors
mkdir -p -- packages//state//src//redux//middleware
mkdir -p -- packages//state//src//rxjs
mkdir -p -- packages//state//src//rxjs//observables
mkdir -p -- packages//state//src//rxjs//subjects
mkdir -p -- packages//state//src//rxjs//operators
mkdir -p -- packages//state//src//rxjs//effects
mkdir -p -- packages//state//src//rxjs//streams
mkdir -p -- packages//state//src//events
mkdir -p -- packages//state//src//selectors
mkdir -p -- packages//state
touch -- packages//state//package.json
mkdir -p -- packages//state
touch -- packages//state//README.md
mkdir -p -- packages//dexie
mkdir -p -- packages//dexie//src
mkdir -p -- packages//dexie//src//database
mkdir -p -- packages//dexie//src//schemas
mkdir -p -- packages//dexie//src//tables
mkdir -p -- packages//dexie//src//repositories
mkdir -p -- packages//dexie//src//transactions
mkdir -p -- packages//dexie//src//migrations
mkdir -p -- packages//dexie//src//live-queries
mkdir -p -- packages//dexie//src//sync
mkdir -p -- packages//dexie
touch -- packages//dexie//package.json
mkdir -p -- packages//dexie
touch -- packages//dexie//README.md
mkdir -p -- packages//watermelondb
mkdir -p -- packages//watermelondb//src
mkdir -p -- packages//watermelondb//src//database
mkdir -p -- packages//watermelondb//src//models
mkdir -p -- packages//watermelondb//src//collections
mkdir -p -- packages//watermelondb//src//migrations
mkdir -p -- packages//watermelondb//src//adapters
mkdir -p -- packages//watermelondb//src//sync
mkdir -p -- packages//watermelondb
touch -- packages//watermelondb//package.json
mkdir -p -- packages//watermelondb
touch -- packages//watermelondb//README.md
mkdir -p -- packages//rxjs
mkdir -p -- packages//rxjs//src
mkdir -p -- packages//rxjs//src//operators
mkdir -p -- packages//rxjs//src//observables
mkdir -p -- packages//rxjs//src//subjects
mkdir -p -- packages//rxjs//src//schedulers
mkdir -p -- packages//rxjs//src//streams
mkdir -p -- packages//rxjs//src//interop
mkdir -p -- packages//rxjs
touch -- packages//rxjs//package.json
mkdir -p -- packages//rxjs
touch -- packages//rxjs//README.md
mkdir -p -- packages//redux
mkdir -p -- packages//redux//src
mkdir -p -- packages//redux//src//store
mkdir -p -- packages//redux//src//slices
mkdir -p -- packages//redux//src//reducers
mkdir -p -- packages//redux//src//actions
mkdir -p -- packages//redux//src//selectors
mkdir -p -- packages//redux//src//middleware
mkdir -p -- packages//redux//src//devtools
mkdir -p -- packages//redux
touch -- packages//redux//package.json
mkdir -p -- packages//redux
touch -- packages//redux//README.md
mkdir -p -- tools
mkdir -p -- tools//nx
mkdir -p -- tools//nx//generators
mkdir -p -- tools//nx//executors
mkdir -p -- tools//nx//plugins
mkdir -p -- tools//nx//presets
mkdir -p -- tools//workspace
mkdir -p -- tools//workspace//generators
mkdir -p -- tools//workspace//scripts
mkdir -p -- tools//workspace//graph
mkdir -p -- tools//testing
mkdir -p -- tools//testing//fixtures
mkdir -p -- tools//testing//mocks
mkdir -p -- tools//testing//utilities
