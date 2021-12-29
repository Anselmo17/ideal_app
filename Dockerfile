####### 1 stage ##############
# criar imagem node
FROM node:10.14 as builder
# cria pasta app
WORKDIR /app
COPY . .
RUN ls 
# npm ci --silent
# RUN npm run build


########### 2 stage #################
# image a ser usada nginx
FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app /usr/share/nginx/html
 
EXPOSE 85
CMD [ "-g", "daemon off;" ]