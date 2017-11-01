FROM node:8
LABEL maintainer = "james.harrison.za@gmail.com"

WORKDIR /usr/src/app

# Packages
COPY package.json .
RUN npm install

# Required files
COPY ./public ./public/
COPY ./index.html .
COPY ./server.js .
COPY ./favicon.ico .

#Build bundle.js
COPY tsconfig.json .
COPY ./src ./src/
RUN npm run build
RUN npm run browserify

EXPOSE 30042

CMD [ "npm", "start" ]