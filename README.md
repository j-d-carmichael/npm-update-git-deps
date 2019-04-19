# npm-update-git-deps
Update git deps in package json by unintalling them and re-installing them 1 at a time.

## Install
```
npm i --save-dev npm-update-git-deps
```

## Setup
Easiest way is to add as a package.json script
```json
{
  "name": "your-packages",
  "version": "1.0.0",
  "scripts": {
    "npm-update-git-deps": "npm-update-git-deps"
  },
  "devDependencies": {
    "npm-update-git-deps": "1.0.0"
  }
}
```
