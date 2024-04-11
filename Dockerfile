# Stage 1
FROM node:18 as build-stage

WORKDIR /usr/src/app

COPY ./package*.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
