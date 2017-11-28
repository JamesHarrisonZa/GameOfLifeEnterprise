FROM node:8.9.1-alpine as builder
#NOTE: Keep image used above in sync with what our CI runs tests in: \.circleci\config.yml
LABEL maintainer = "james.harrison.za@gmail.com"

WORKDIR /usr/src/app

#Copy App files
COPY . .

# Packages & dev dependancies
RUN yarn

#Build bundle.js
RUN yarn run build
RUN yarn run browserify

FROM node:8.9.1-alpine

COPY . .
COPY --from=builder /usr/src/app/dist .

# Packages production only
ENV NODE_ENV production
RUN yarn

EXPOSE 42420

CMD [ "npm", "start" ]