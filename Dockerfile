FROM node:alpine

ADD app app
WORKDIR app
RUN npm install
CMD ["node", "app.js"]