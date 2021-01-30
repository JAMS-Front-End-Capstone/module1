FROM node

LABEL name="attraction-overview-server"
LABEL version="1.0"

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["database", "database"]
COPY ["client", "client"]
COPY ["server", "server"]
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install

EXPOSE 3002

CMD npm start
