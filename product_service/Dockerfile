FROM node

WORKDIR /app
COPY package*.json ./
RUN yarn install --production
EXPOSE 8005
COPY ./app ./app
COPY ./config ./config
COPY ./server.js ./
COPY ./seeder.js ./
COPY ./express-app.js ./

CMD ["yarn","run","dev"]