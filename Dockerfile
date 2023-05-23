FROM node:16.13.1-alpine3.14

COPY ./ /opt/app/

WORKDIR /opt/app/

RUN yarn install --frozen-lockfile

RUN yarn build

EXPOSE 3000




ENTRYPOINT ["yarn", "start"]
