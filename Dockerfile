FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy dependency metadata
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Start the app
CMD ["npm", "start"]
