FROM node

WORKDIR /simple-node

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "index"]