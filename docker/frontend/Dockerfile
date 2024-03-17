# Use a specific version of Node.js
FROM node:20

# Set working directory
WORKDIR /app

# Copy the application files
COPY ./frontend/ .

# Expose port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"]
