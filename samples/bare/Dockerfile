# Docker hub already contains node image
FROM node:0.10-onbuild

# Default port, used in index.js
EXPOSE 3000

# # In general case we should perform following steps
# # but node:0.10-onbuild container already performs them
# # internally
#
# # Copy current folder to '/usr/src/app' on created image
# COPY . /usr/src/app
#
# # Installing node modules
# RUN cd /usr/src/app; npm install

# Command to run container - only one allowed
CMD ["node", "/usr/src/app/index.js"]
