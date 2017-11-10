FROM node:8.9.1-alpine
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

#---------------------------------------------------------------------------------------------
# # NOTE: PLAYING AROUND WITH RUNNING TESTS AT THIS LEVEL. 
# # Would need  Base image running on debian. 
# FROM node:8.9.0 
# # packages for tests
# RUN apt-get update && apt-get install -y \
# 	sudo \
# 	unzip

# RUN curl --silent --show-error --location --fail --retry 3 --output /tmp/google-chrome-stable_current_amd64.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
# 	&& (sudo dpkg -i /tmp/google-chrome-stable_current_amd64.deb || sudo apt-get -fy install)  \
# 	&& rm -rf /tmp/google-chrome-stable_current_amd64.deb \
# 	&& sudo sed -i 's|HERE/chrome"|HERE/chrome" --disable-setuid-sandbox --no-sandbox|g' \
# 	"/opt/google/chrome/google-chrome"

# RUN export CHROMEDRIVER_RELEASE=$(curl --location --fail --retry 3 http://chromedriver.storage.googleapis.com/LATEST_RELEASE) \
# 	&& curl --silent --show-error --location --fail --retry 3 --output /tmp/chromedriver_linux64.zip "http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_RELEASE/chromedriver_linux64.zip" \
# 	&& cd /tmp \
# 	&& unzip chromedriver_linux64.zip \
# 	&& rm -rf chromedriver_linux64.zip \
# 	&& sudo mv chromedriver /usr/local/bin/chromedriver \
# 	&& sudo chmod +x /usr/local/bin/chromedriver

# #Run tests
# COPY ./jasmine.json .
# COPY ./karma.conf.js .
# ENV CHROME_BIN /usr/bin/google-chrome
# RUN yarn test-single
#---------------------------------------------------------------------------------------------
	
EXPOSE 42420

CMD [ "npm", "start" ]