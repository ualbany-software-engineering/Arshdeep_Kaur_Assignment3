 FROM node:latest

 RUN mkdir -p /blogproject
 WORKDIR /blogproject
 #/usr/src/blogproject
 COPY package.json /blogproject
 RUN npm install

 COPY . /blogproject

 EXPOSE 80

 ENTRYPOINT ["node"]

 CMD ["server.js"]
