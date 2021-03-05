FROM alpine/git:v2.30.1 as waitforit
WORKDIR /usr/src
RUN git clone https://github.com/vishnubob/wait-for-it.git

FROM node:15.10.0-alpine3.10

RUN apk update && apk add bash

WORKDIR /usr/src/wait-for-it
COPY --from=waitforit /usr/src/wait-for-it/wait-for-it.sh .
RUN chmod +x wait-for-it.sh

WORKDIR /usr/src/app

ADD . .

RUN chmod +x entrypoint.sh

RUN yarn

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]