FROM alpine
LABEL maintainer = "james.harrison.za@gmail.com"

#Website files
COPY . /usr/share/nginx/html

#Expose is ignored on Heroku. Only useful for local testing
EXPOSE 80

WORKDIR /

#ENTRYPOINT /bin/sh -c

#CMD /usr/sbin/nginx -g "daemon off;"
