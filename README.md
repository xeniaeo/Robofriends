# robofriends
Tutorial for udemy course - React

## To run the project:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

## Keep gh-pages up to date with master branch
- Reference: http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/

```
$ git add .
$ git status // to see what changes are going to be commited
$ git commit -m 'Some descriptive commit message'
$ git push origin master

$ git checkout gh-pages // go to the gh-pages branch
$ git rebase master // bring gh-pages up to date with master
$ git push origin gh-pages // commit the changes
$ git checkout master // return to the master branch
```