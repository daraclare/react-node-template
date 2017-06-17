FROM node:7.4.0-slim

# Create app directory
RUN mkdir -p /code
WORKDIR /code

# Install app dependencies
COPY package.json /code/

RUN npm install

# Bundle app source
COPY . /code

EXPOSE 8080

CMD [ "npm", "start" ]
