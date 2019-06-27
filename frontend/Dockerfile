FROM node:8.15-alpine

RUN mkdir /code
WORKDIR /code
COPY package.json package-lock.json /code/
RUN yarn

COPY ./src ./public /code/

ENV CHOKIDAR_USEPOLLING=true
ENTRYPOINT [ "yarn", "start" ]
