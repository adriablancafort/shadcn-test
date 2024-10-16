FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./

# Clean install
RUN npm ci

COPY . .

RUN npm run build

FROM node:alpine AS runtime

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]