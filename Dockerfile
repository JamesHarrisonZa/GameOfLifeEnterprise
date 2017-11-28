FROM node:8.9.1-alpine 
#NOTE: Keep image used above in sync with what our CI runs tests in: \.circleci\config.yml
LABEL maintainer = "james.harrison.za@gmail.com"

WORKDIR /usr/src/app

#Copy App files
COPY . .

# Packages
RUN yarn

#Build bundle.js
RUN yarn run build
RUN yarn run browserify
	
EXPOSE 42420

CMD [ "npm", "start" ]