FROM node:14-alpine
WORKDIR /src
COPY package*.json ./
ENV NODE_ENV development
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]