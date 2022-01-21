FROM node:17-alpine
WORKDIR /usr/share/app
COPY . /usr/share/app
EXPOSE 1883
CMD node src/app.js