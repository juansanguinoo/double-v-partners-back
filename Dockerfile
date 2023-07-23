FROM node:18

WORKDIR /myapp
COPY package.json .
RUN npm install --force

COPY . .
CMD ["npm", "run", "dev"]