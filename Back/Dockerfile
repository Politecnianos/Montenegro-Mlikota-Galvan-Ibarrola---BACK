FROM node:latest AS builder



WORKDIR /app



COPY ./package*.json ./



RUN npm install



RUN mkdir -p /app/env && echo "$PRODUCTION" > /app/env/production.env



COPY . .



EXPOSE 3000



CMD ["npm", "start"]