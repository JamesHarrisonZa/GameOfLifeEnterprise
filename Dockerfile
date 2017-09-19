FROM nginx:alpine
LABEL maintainer = "james.harrison.za@gmail.com"
COPY . /usr/share/nginx/html

#EXPOSE 80
CMD service nginx start

#--<< Docker Commands >>--
#Using image and container tag/name: gol
#Should be running on http://localhost:42420/ afterwards or a random port if using -P

#docker build -t gol .
#docker run -d --rm --name gol -p 42420:80 gol
#docker run -d --rm --name gol -P gol