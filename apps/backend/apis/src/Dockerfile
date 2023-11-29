FROM node:18.18.0-alpine 
WORKDIR /usr/src/app

EXPOSE 3000

RUN ls

COPY . .

RUN npm install

CMD ["node", "main.js"]
