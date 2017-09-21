# GameOfLifeTypeScript
Based off [GameOfLifeNoLibraries](https://github.com/JamesHarrisonZa/GameOfLifeNoLibraries)  
But with all the focus on tooling and production workflows   

# Technologies used
## Source Code  
JavaScript type safety and compile checking using:   
<a name="github">[<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2y8WLNmxHr9wciYza02AKXwJk_xLJdWrWC6_t_1ijCHzl5iV9" width="400px" />](https://github.com/Microsoft/TypeScript)</a>

## Module Loading  

Import module features and generation using:   
<a name="website">[<img src="https://blog.lofjard.se/img/upload/commonjs.png" width="400px" />](http://www.commonjs.org)</a>  
Module loading in the browser using:  
<a name="github">[<img src="https://camo.githubusercontent.com/e19e230a9371a44a2eeb484b83ff4fcf8c824cf7/687474703a2f2f737562737461636b2e6e65742f696d616765732f62726f777365726966795f6c6f676f2e706e67" width="400px" />](https://github.com/browserify/browserify)</a>

## Testing
Behaviour driven tests written using:  
<a name="github">[<img src="https://rawgithub.com/jasmine/jasmine/master/images/jasmine-horizontal.svg" width="400px" />](https://github.com/jasmine/jasmine)</a>  

Test's run in a browser enviroment using:   
<a name="github">[<img src="https://karma-runner.github.io/assets/img/banner.png" width="400px" />](https://github.com/karma-runner/karma)</a>

Code coverage reporting by Istanbul   
<a name="github">[<img src="https://istanbul.js.org/assets/istanbul-logo.png" width="100px" />](https://github.com/gotwarlost/istanbul)</a>

## Workflows in place
* Continous integration with CircleCI 
* Building a new docker image and publishing to Docker Hub
## Workflows ToDo  
* Get container running on Heroku/AWS Beenstalk/Google Cloud
* Webhook that spin up containers from a succesful CI build or dockerhub push

## Commands to run locally  
* npm install
* npm run build
* npm run browserify
* npm run test

## Docker Commands  
Using image and container tag/name: gol  
Should be running on http://localhost:42420/ afterwards or a random port if using -P  
* docker build -t gol .  
* docker run -d --rm --name gol -p 42420:80 gol  
* docker run -d --rm --name gol -P gol  

## ToDo  
* Deploying to Heroku and run a new container.  
* JS Minification?  
* Google analytics?  
* Logging? Dashboards? Elastic search?  

