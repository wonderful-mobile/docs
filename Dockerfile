FROM docker.io/library/nginx:alpine

RUN apk add git mkdocs py3-pathspec

RUN mkdir -p /opt/little-lines-docs

COPY . /opt/little-lines-docs

WORKDIR /opt/little-lines-docs

RUN mkdocs build

RUN cp -r site/* /usr/share/nginx/html