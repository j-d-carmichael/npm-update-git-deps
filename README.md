# npm-update-git-deps

npm with deps from git are kind of a pain.

The trick is to remove the package from the lock file and the node_modules... which is also annoying.

`npm uninstall` is not fast and this package automated this for you leaving you to run `npm i` with whichever options you need...

Add this to your scripts after installing:
```
"npm-update-git-deps": "npm-update-git-deps",
```

Then just run it... it checks each dependency and devDependency against the isGit util to decide if it should be removed.

After it is done, usually about 700-900milliseconds, you can enjoy waiting for npm to reinstall them.


TIP:
You can speed up npm i ever so slightly with the following (assuming you are installing from git it is safe to add these flags)
```
npm i --force --no-audit --no-fund
```
