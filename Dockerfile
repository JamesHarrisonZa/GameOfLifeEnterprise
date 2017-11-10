FROM node:8.9.1-alpine 
#NOTE: Keep image used above in sync with what our CI runs tests in: \.circleci\config.yml
LABEL maintainer = "james.harrison.za@gmail.com"

WORKDIR /usr/src/app

# Packages
COPY package.json .
RUN yarn

# Required files
COPY ./public ./public/
COPY ./index.html .
COPY ./server.js .
COPY ./favicon.ico .

#Build bundle.js
COPY tsconfig.json .
COPY ./src ./src/
RUN yarn run build
RUN yarn run browserify
	
EXPOSE 42420

CMD [ "npm", "start" ]