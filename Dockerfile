FROM nginx:alpine
#FROM roylines/nginx
LABEL maintainer = "james.harrison.za@gmail.com"

#Website files
COPY . /usr/share/nginx/html

#Expose is ignored on Heroku. Only useful for local testing
EXPOSE 80

#Defaults on Heroku
#WORKDIR /
#ENTRYPOINT ["/bin/sh", "-c"] 

#Heroku suggests For local testing
#RUN adduser -D myuser
#USER myuser
#[warn] 5#5: the "user" directive makes sense only if the master process runs with super-user privileges, ignored in /etc/nginx/nginx.conf:2
#nginx: [warn] the "user" directive makes sense only if the master process runs with super-user privileges, ignored in /etc/nginx/nginx.conf:2
#[emerg] 5#5: mkdir() "/var/cache/nginx/client_temp" failed (13: Permission denied)
#nginx: [emerg] mkdir() "/var/cache/nginx/client_temp" failed (13: Permission denied)

#works locally. heroku: Starting process with command `/usr/sbin/nginx\ -g\ \"daemon\ off\;\"`  Error: No such file or directory
#CMD ["/usr/sbin/nginx -g \"daemon off;\""]

#Heroku: Error: No such file or directory
#CMD [ "echo pwd" ]