####### 1 stage ##############
# criar imagem node
FROM node:12.14 as builder
# cria pasta app
WORKDIR /app
COPY . .
RUN npm ci --silent
RUN npm run build

########### 2 stage #################
# image a ser usada nginx
FROM nginx:latest
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/app-angular-test /usr/share/nginx/html
 
# porta a executar 
EXPOSE 85

# comandos para executar nginx
ENTRYPOINT ["/usr/sbin/nginx"]
CMD [ "-g", "daemon off;" ]