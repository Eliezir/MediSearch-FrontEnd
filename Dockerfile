FROM node:18.3.0-alpine3.14

WORKDIR /app

COPY package.json ./

RUN npm  install

EXPOSE 3000
COPY . .
CMD ["yarn", "dev:docker"]