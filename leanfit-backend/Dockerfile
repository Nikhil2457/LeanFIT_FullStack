FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose backend port (change if needed)
EXPOSE 5000

# Start the Node.js backend
CMD ["node", "index.js"]
