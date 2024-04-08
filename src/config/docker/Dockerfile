# Stage 1
FROM node:14

WORKDIR /app-ui

COPY package*.json .

RUN npm install

COPY . .

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# Stage 2
FROM nginx:1.19.0-alpine

COPY --from=build-stage /app-ui/build /usr/share/nginx/html

EXPOSE $SERVER_PORT

CMD nginx -g 'daemon off;'
