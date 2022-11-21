FROM node

WORKDIR /app
COPY package*.json ./
RUN yarn install --production
EXPOSE 8003
COPY ./app ./app
COPY ./config ./config
COPY ./server.js ./
COPY ./express-app.js ./


CMD ["yarn","run","dev"]