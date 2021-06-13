# Name the node stage "builder"
FROM node AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm i && npm run build --prod

# nginx state for serving content
FROM nginx
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]