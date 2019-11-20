FROM node:8.8.1

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm i

COPY . /app  

RUN mv ./config/config.template.js ./config/config.js

EXPOSE 3001

CMD ["npm", "start"]  