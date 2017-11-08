FROM node:8.8.1

RUN mv ./config/config.template.js ./config/config.js

COPY . /app  

WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 3001

CMD ["node", "server.js"] 