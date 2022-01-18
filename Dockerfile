FROM node


WORKDIR /app
RUN npm install -g gatsby-cli

COPY ./ ./


RUN npm install

# run gatsby develop

CMD [ "gatsby", "build" ]