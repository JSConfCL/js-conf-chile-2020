FROM node:10-alpine

RUN npm i -g http-server
RUN mkdir website

COPY . /website

EXPOSE 80
CMD [ "http-server", "./website" ]
