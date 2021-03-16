FROM node:latest

WORKDIR /node/project/api

COPY ["api.js", "package.json", "./"]

ENV PORT=8080

EXPOSE 8080

RUN npm install

CMD npm start
