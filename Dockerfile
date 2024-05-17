FROM node:22-alpine3.18

WORKDIR /app

RUN apk --no-cache add git
RUN apk --no-cache add bash
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -