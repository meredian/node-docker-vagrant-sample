# Docker hub already contains node image
FROM node:latest

# Default port, used in index.js
EXPOSE 3000

# Copy current folder to '/usr/src/app' on created image
COPY . /src

# Installing node modules
RUN cd /src; npm install

# Command to run container - only one allowed
CMD ["node", "/src/index.js"]
