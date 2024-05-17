FROM node:22-bullseye

WORKDIR /app

# RUN apk --no-cache add openssh-client
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -