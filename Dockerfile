FROM node:18.12.1 as build-deps

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

FROM registry.customs.gov.az/reg/nginx:alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
RUN apk add --no-cache tzdata
RUN ln -s /usr/share/zoneinfo/Asia/Baku /etc/localtime
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
