FROM nginx:alpine
#FROM roylines/nginx
LABEL maintainer = "james.harrison.za@gmail.com"

#Website files
COPY . /usr/share/nginx/html

#Expose is ignored on Heroku. Only useful for local testing
EXPOSE 80

#Defaults on Heroku
WORKDIR /
ENTRYPOINT ["/bin/sh", "-c"] 

#Heroku suggests For local testing
#RUN adduser -D myuser
#USER myuser

CMD ["/usr/sbin/nginx -g 'daemon off;'"]