# Build environment - alpine Linux
FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
RUN npm ci
RUN npm install react-scripts@3.4.1 -g
COPY . .
RUN npm run build

# Production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]