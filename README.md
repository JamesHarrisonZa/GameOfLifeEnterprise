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

## Containerization
<a name="website">[<img src="https://camo.githubusercontent.com/3482fc32e1f4cad0c44039c8f01e1e270e6894ee/687474703a2f2f692e696d6775722e636f6d2f4b6764574c64682e706e67" width="400px" />](https://www.docker.com/)</a>  
Image stored in Dockerhub  
https://hub.docker.com/r/jamesharrisonza/gameoflifetypescript/

## Continous integration
<a name="website">[<img src="https://d3r49iyjzglexf.cloudfront.net/logo-wordmark-26f8eaea9b0f6e13b90d3f4a8fd8fda31490f5af41daab98bbede45037682576.svg" width="400px" />](https://circleci.com/)</a> 


## Deployment and container orchestration
With Kubernetes  
<a name="website">[<img src="https://github.com/kubernetes/kubernetes/raw/master/logo/logo.png" width="150px" />](https://kubernetes.io/)</a> 

## Hosting
Google Cloud Platform

<a name="website">[<img src="https://cloud.google.com/_static/2e380f3acd/images/cloud/gcp-logo.svg" width="600px" />](https://cloud.google.com/)</a> 

## Local Enviroment Commands
* npm install
* npm run build
* npm run browserify
* npm run test

## Docker Commands  
Using image and container tag/name: gol  
Should be running on http://localhost:42420/ afterwards
* docker build -t gol .  
* docker run -d --rm --name gol -p 42420:42420 gol  
* docker exec -it gol /bin/bash  

## Kubernetes commands
(Will add more here soon.) 
   
After connecting to the cluster.
* kubectl set image deployments/game-of-life game-of-life=jamesharrisonza/gameoflifetypescript  

## ToDo
* Webhook that spin up initiates a rolling update when the dockerhub build succedes
* Copy css files to public folder
* Move Kubernetes config yml files into project folder and use apply commands
* JS Minification?  
* Google analytics? 
