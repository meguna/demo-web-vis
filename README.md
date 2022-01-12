# Introduction to Web-based Data Visualization

View the live demo here: https://meguna.github.io/demo-deckgl-app/

## Set up guide

1. Install Node.js (v14+)
2. Install Yarn https://classic.yarnpkg.com/lang/en/docs/install/
  * Why?
3. Install Git https://github.com/git-guides/install-git
4. Clone this repository. Run `yarn` inside the repo's root directory. 
5. Run the app with `yarn run start`

## Deploy Guide

We will deploy this project using Github Pages, a free hosting solution for single page applications. 
This repository currently lives in _my_ github account. For you to deploy this project, we'll first reset the git information associated with the project,
and then run deployment.

Git is a version control manager, which is a fancy way of saying that it keeps track of changes made to a codebase so that developers (especially when collaborating with others) can easily roll back changes or access other peoples' changes. It's also a useful way of uploading code to the cloud. 

### Git Setup

1. Run `rm -rf .git` in the root directory of this project to remove any git setup. You can leave the `.gitignore` file intact, because it's a helpful file that isn't associated with any git account (it just tells git to ignore certain files and types of files when pushing changes to the repository). 
2. Run `git init` in the root directory of this project to initialize an empty git repository.
3. Now, navigate to `github.com` and [create a new repository](https://github.com/new) to associate with this project. Name it whatever you want. 
4. Copy the remote address of your new repository. If you navigate to the home page of your repo on github.com (which should be something like `https://github.com/<your-username>/<your-repo-name>`it should be under the green button that says 'code'. It should look something like: `git@github.com:meguna/demo-deckgl-app.git`
5. Run `git add remote origin <your-remote-url-from-step-4>`.
6. Now you can run `yarn run deploy` to publish your web app.

## File Directory Guide

