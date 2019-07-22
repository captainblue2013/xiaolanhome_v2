FROM node:8.8.1

COPY . /app  

WORKDIR /app

RUN mv ./config/config.template.js ./config/config.js

RUN npm i

EXPOSE 3001

CMD ["npm", "start"]  