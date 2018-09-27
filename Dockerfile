FROM node:8

ENV URL_PARITY "qa_parity:8545"
ADD app app
WORKDIR app
RUN npm install
CMD ["node", "app.js"]