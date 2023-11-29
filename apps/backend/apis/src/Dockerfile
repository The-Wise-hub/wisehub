FROM node:20-alpine
WORKDIR /usr/src/app

EXPOSE 3000

RUN ls

COPY . .

RUN npm install

CMD ["node", "main.js"]
