FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install -g firebase-tools


# Copy all the files from the current directory to the container
COPY . .

# Expose the Firebase Functions port (default is 5001 for local emulation)
EXPOSE 5001

# Start Firebase emulator for functions
CMD ["npm", "run", "serve"]
