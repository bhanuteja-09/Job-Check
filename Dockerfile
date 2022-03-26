#Author BASAVARAJ BHAVI

#stage1
FROM node:10.23.2-alpine As builder
#FROM node:latest as node
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run  -- build --prod
 
#stage 2
FROM nginx:1.20.0-alpine
COPY --from=builder /usr/src/app/dist/get2aha_fe/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d
 
# Expose ports
EXPOSE 80
 
# Set the default command to execute
 
CMD [ "nginx","-g","daemon off;" ]
 
# Copy a configuration file from the current directory
#ADD nginx.conf /etc/nginx/
 
# Append "daemon off;" to the beginning of the configuration
#RUN echo "daemon off;" >> /etc/nginx/nginx.conf
 
#ENTRYPOINT ["service nginx start", "-g", "daemon off;"]
