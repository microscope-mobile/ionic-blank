# ionic-blank

ionic browserify / npm workflow blank template

![microscopejs](https://avatars0.githubusercontent.com/u/13710913?v=3&s=200)

Requirements
------------

* npm
* gulp
* nodejs
* ionic CLI (optional)
* cordova CLI (optional)

Node.js installation
--------------------

#### Install on OSX

Using homebrew:

	brew install node

#### Install on Linux (Ubuntu/Mint)

	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs

#### Install on Windows

[Download Node.js MSI](http://nodejs.org/download/)

Installation
------------

Install dependencies:

	npm install
	
Install gulp:

	npm install gulp -g
	
Install ionic CLI (optional):

	npm install ionic -g
	
Install cordova CLI (optional):

	npm install cordova -g

Commands
--------
	
build:

	gulp build
	
run project:

	gulp serve
	
run project with ionic CLI:

	ionic serve