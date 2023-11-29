FROM node:18.18.0-alpine 
WORKDIR /usr/src/app

EXPOSE 3000

COPY ./dist/apps/backend/apis/ .

RUN npm install

CMD ["node", "main.js"]
