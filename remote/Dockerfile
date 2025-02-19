# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Vite application
RUN npm run build

# Stage 2: Serve the application using a distroless image
FROM gcr.io/distroless/nodejs:18

WORKDIR /app

# Copy the built dist files and the server script
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/index.cjs .

# Expose the port
EXPOSE 5000

# Command to run the server
CMD ["index.cjs"]