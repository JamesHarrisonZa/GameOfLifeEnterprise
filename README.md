# GameOfLifeEnterprise

Compliments [GameOfLifeNoLibraries](https://github.com/JamesHarrisonZa/GameOfLifeNoLibraries)  
But a production ready version with all the focus on tooling and a continuous delivery pipeline.

[![CircleCI](https://circleci.com/gh/JamesHarrisonZa/GameOfLifeEnterprise/tree/master.svg?style=svg)](https://circleci.com/gh/JamesHarrisonZa/GameOfLifeEnterprise/tree/master)

# Technologies used

## Source Code

JavaScript type safety and compile checking using:  
<a name="github">[<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2y8WLNmxHr9wciYza02AKXwJk_xLJdWrWC6_t_1ijCHzl5iV9" width="400px" />](https://github.com/Microsoft/TypeScript)</a>

Import module features and generation using:  
<a name="website">[<img src="https://blog.lofjard.se/img/upload/commonjs.png" width="400px" />](http://www.commonjs.org)</a>  
Module loading in the browser using:  
<a name="github">[<img src="https://raw.githubusercontent.com/browserify/browserify/HEAD/assets/logo.png" width="400px" />](https://github.com/browserify/browserify)</a>

### Commands

- npm install
- npm run build
- npm run browserify

## Testing

Behaviour driven tests written using:  
<a name="github">[<img src="https://jasmine.github.io/images/jasmine-purple-horizontal.svg" width="400px" />](https://github.com/jasmine/jasmine)</a>

Test's run in a browser enviroment using:  
<a name="github">[<img src="https://karma-runner.github.io/assets/img/banner.png" width="400px" />](https://github.com/karma-runner/karma)</a>

Code coverage reporting by Istanbul  
<a name="github">[<img src="https://istanbul.js.org/assets/istanbul-logo.png" width="100px" />](https://github.com/gotwarlost/istanbul)</a>

### Commands

- npm run test
- npm run test-single

## Runtime Enviroment

<a name="website">[<img src="https://miro.medium.com/max/3164/1*LSinbzlHYROHgxpQUWtyHQ.jpeg" width="300px" />](https://nodejs.org/en/)</a>

Content served by  
<a name="github">[<img src="https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67" width="400px" />](https://github.com/expressjs/express/)</a>

### Commands

Should be running on http://localhost:42420/ afterwards

- npm run start

## Containerization

App and all its dependancies packaged into a rerunable container using.
<a name="website">[<img src="https://camo.githubusercontent.com/3482fc32e1f4cad0c44039c8f01e1e270e6894ee/687474703a2f2f692e696d6775722e636f6d2f4b6764574c64682e706e67" width="400px" />](https://www.docker.com/)</a>

On operating system  
<a name="website">[<img src="https://alpinelinux.org/alpinelinux-logo.svg" width="400px" />](https://www.alpinelinux.org/about/)</a>

Image stored in Dockerhub  
https://hub.docker.com/r/jamesharrisonza/gameoflifeproduction/

### Commands

Using image and container tag/name: gol  
Should be running on http://localhost:42420/ afterwards

- docker build -t gol .
- docker run -d --rm --name gol -p 42420:42420 gol
- docker run -it gol /bin/sh

Or even more simple

- docker-compose build
- docker-compose up

## Continuous delivery

Runs tests as code is committed to the master branch. On test success: Builds a new Docker image for my app tagged with the last checkin SHA. Pushes the new image to my Dockerhub repo. On build success: Connect to my cluster and initiates a rolling update based off the new docker image and tag.

<a name="website">[<img src="https://lever-client-logos.s3.amazonaws.com/circle-logo-horizontal.png" width="400px" />](https://circleci.com/)</a>

<!-- ## Deployment and container orchestration
Runs containers from my latest Docker image. Loadbalancer service with a static IP. Replication Controller that maintains a healthy desired state of multiple running applications. Performs rolling updates.
<a name="website">[<img src="http://kompose.io/img/kubernetes_full.png" width="400px" />](https://kubernetes.io/)</a>

### commands

With kubectl installed. Connect to the cluster with command provided by host provider. cd to the .kubernetes folder.

* kubectl create -f deployment.yml
* kubectl apply -f deployment.yml --record
* kubectl rollout status deployment game-of-life
* kubectl delete Deployment game-of-life
* kubectl create -f loadBalancerService.yml
* kubectl apply -f loadBalancerService.yml
* kubectl delete svc game-of-life
* kubectl set image deployments/game-of-life game-of-life=jamesharrisonza/gameoflifeproduction:ReplaceWithTag

## Hosting

Cluster of 3 nodes living in Google's europe-west1 datacenter via

<a name="website">[<img src="https://cloud.google.com/_static/7a342985d6/images/cloud/cloud-logo.svg" width="600px" />](https://cloud.google.com/)</a>  -->

## Hosting

This project was previously hosted on Google's Cloud Platform and was using Kubernetes to orchestrate the containers.  
My free credits ran out but you can see the commands commented out in this Readme and the CircleCI config.

Currently the Docker containers are spun up and hosted on  
Heroku Cloud Application Platform

<a name="website">[<img src="https://cdn.worldvectorlogo.com/logos/heroku-1.svg" width="400px" />](https://www.heroku.com/)</a>

Which has a great free tier for project apps.

## ToDo

- Build step to copy css files to public folder, then git ignore public folder.
- Investigate new Chrome module loading support in the browser which will let me remove commonjs and browserfy.
- JS Minification
- Google analytics
