FROM node:14.15.0-buster
WORKDIR /app
RUN apt-get update && apt-get --no-install-recommends -y dist-upgrade -y \
 && npm install -g npm @vue/cli \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

COPY . /app

EXPOSE 8080
CMD ["/bin/sh"]
