# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
RUN npm install -g http-server
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["http-server", "dist"]
EXPOSE 8080