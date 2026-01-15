# Web backend Dockerfile

# Using official Node.js image
FROM node:alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Exposing app's port
EXPOSE 5000

# Command to run the app
CMD ["npm", "start"]
