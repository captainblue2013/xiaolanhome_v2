FROM node:8.8.1

COPY . /app  

WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 3001

CMD ["node", "server.js"] 