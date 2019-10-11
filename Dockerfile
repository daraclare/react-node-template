FROM node:8.16.2

# Create app directory
RUN mkdir -p /code
WORKDIR /code

# Install app dependencies
COPY package.json /code/

RUN npm install

# Bundle app source
COPY . /code

EXPOSE 4000

RUN npm run build

CMD npm run start:dist
