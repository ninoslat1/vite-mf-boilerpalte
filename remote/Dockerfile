# # Stage 1: Build the application
# FROM node:18-alpine AS builder

# WORKDIR /app

# # Copy package.json and install dependencies
# COPY package.json ./
# RUN npm install

# # Copy the rest of your application code
# COPY . .

# # Build the Vite application
# RUN npm run build

# # Stage 2: Serve the application using a distroless image
# FROM gcr.io/distroless/nodejs:18

# WORKDIR /app

# # Copy the built dist files and the server script
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/index.cjs .

# # Expose the port
# EXPOSE 5000

# # Command to run the server
# CMD ["index.cjs"]

# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json (if available) and install dependencies
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Vite application
RUN npm run build

# Stage 2: Serve the application using a lightweight server
FROM node:18-alpine AS runtime

WORKDIR /app

# Install serve (only in runtime stage to reduce size)
RUN npm i -g serve

# Copy only the built dist files from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist"]
