# JavaScript

git commands 
These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Find by binary search the change that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Forward-port local commits to the updated upstream head
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.




+++++++++++++++++++++++++++++++++++++++++++++++++++++++
login to github 
https://github.com/krirohini

create new repository 

copy git hub url to clone ( https) 
https://github.com/krirohini/JavaScript.git

open command line ( git bash) 
cd folder where you want to clone your github repo 
cd ~/javascript 
> git clone https://github.com/krirohini/JavaScript.git

> ls 
JavaScript
> cd JavaScript
// how to check what files are available 
JavaScript> ls -a
.         ..        .git      README.md
//how to check which branch you are currently on 
> git branch -v
* master 44b18ac Initial commit
// how to check git remote repository link 
JavaScript> git remote -v 
origin	https://github.com/krirohini/JavaScript.git (fetch)
origin	https://github.com/krirohini/JavaScript.git (push)

// how to list all the branches 
git branch -a 
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master

// how to pull changes from remote repository 
// rebase will keep your local changes on the top 
// lets assume changes are stored on stack 
vikashkumar@LM-SJN-21000931 ~/s/JavaScript> git pull --rebase 
From https://github.com/krirohini/JavaScript
 * [new branch]      develop    -> origin/develop
 * [new branch]      release    -> origin/release
Current branch master is up to date.

vikashkumar@LM-SJN-21000931 ~/s/JavaScript> git branch -a 
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/develop
  remotes/origin/master
  remotes/origin/release

// now all the branches available in local, 
// so start changes on develop branch 
>JavaScript> git checkout develop
Branch develop set up to track remote branch develop from origin.
Switched to a new branch 'develop'
JavaScript> git branch 
* develop
  master

// see now the current branch is develop



>>> Add file 
initial state 
JavaScript> git status
	On branch develop
	Your branch is up-to-date with 'origin/develop'.
	nothing to commit, working directory clean


a. create new file , add code 
JavaScript> cp ../JavaScriptTutorial/declaration.js  .
JavaScript> git status 
	On branch develop
	Your branch is up-to-date with 'origin/develop'.
	Untracked files:
  	(use "git add <file>..." to include in what will be committed)

		declaration.js

 b. now  add file to git 
> git add abc.java
JavaScript> git add declaration.js 
JavaScript> git status 
	On branch develop
	Your branch is up-to-date with 'origin/develop'.
	Changes to be committed:
  		(use "git reset HEAD <file>..." to unstage)

		new file:   declaration.js

> save intermediate changes 
JavaScript> git commit -m"added first javascript code"
	[develop cdbcdfe] added first javascript code
 		1 file changed, 42 insertions(+)
 		create mode 100644 declaration.js

c . push changes when all development is over push the changes 
JavaScript> git push 
	To https://github.com/krirohini/JavaScript.git
   	44b18ac..cdbcdfe  develop -> develop
	
d. now check on remote git hub file should be present there 
https://github.com/krirohini/JavaScript/tree/develop







