# Stage 1: Build the application
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 👇 Aqui permitimos passar a URL do backend na hora do build
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# 👇 E agora o Vite vai usar essa variável no build
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
