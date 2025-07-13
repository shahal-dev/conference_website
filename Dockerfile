# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install a simple static file server
RUN npm install -g serve

# Expose port (Railway will set PORT environment variable)
EXPOSE 3000

# Serve the built app (Railway will set PORT environment variable)
CMD serve -s dist -l ${PORT:-3000}