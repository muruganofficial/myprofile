# Stage 1: Build the Angular application
FROM node:18-alpine as build

WORKDIR /usr/local/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy built assets from build stage
# Note: The path might vary based on your angular.json output path
COPY --from=build /usr/local/app/dist/frontend/browser /usr/share/nginx/html

# Copy custom nginx config for Angular routing
RUN echo 'server { \
    listen 80; \
    location / { \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    try_files $uri $uri/ /index.html =404; \
    } \
    }' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
