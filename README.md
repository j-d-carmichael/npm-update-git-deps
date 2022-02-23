# npm-update-git-deps

[![Build Status](https://travis-ci.org/johndcarmichael/npm-update-git-deps.svg?branch=master)](https://travis-ci.org/johndcarmichael/npm-update-git-deps) | [![Dependencies](https://david-dm.org/johndcarmichael/npm-update-git-deps.svg)](https://david-dm.org/johndcarmichael/npm-update-git-deps) | [![License](http://img.shields.io/npm/l/boats.svg)](https://github.com/johndcarmichael/npm-update-git-deps/blob/master/LICENSE)

Update git deps in package json by uninstalling them and re-installing them 1 at a time.

Looks for the git+ssh and git+https pattern in the dependencies and devDependencies.

Each dep is run through lib/isGit.js

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Install](#install)
- [Setup](#setup)
- [Options](#options)
- [Last publish reason](#last-publish-reason)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install
```
npm i --save-dev npm-update-git-deps
```

## Setup
Easiest way is to add as a package.json script
```json
{
  "scripts": {
    "npm-update-git-deps": "npm-update-git-deps"
  }
}
```

Then
```bash
npm run npm-update-git-deps
```

## Options
```bash
Usage: npm-update-git-deps [options]

Options:
  -d, --dependency [string]  The single dependency to target from either the dev or non-dev list (not required to be from git)
  -h, --help                 output usage information
```

## Last publish reason
> DevDependencies update & lint fixes on index.js
