# Use an official Nginx image as the base image
FROM nginx:alpine

# Set the maintainer label (optional)
LABEL maintainer="anestis.christa@gmail.com"

# Copy the website files (your website code) into the Nginx directory
COPY ./www /usr/share/nginx/html

# Expose port 80 for HTTP
EXPOSE 80