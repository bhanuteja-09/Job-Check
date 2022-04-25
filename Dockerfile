#Author BASAVARAJ BHAVI

# pull official base image
FROM node:latest as build

#working directory of containerized app
WORKDIR /app

#copy the react app to the container
COPY . /app/

#prepare the container for building react

RUN npm install
#RUN npm i eslint-plugin-flowtype


RUN npm run-script build

#prepare nginx

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d


#fire for nginx
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]



 
# Copy a configuration file from the current directory
#ADD nginx.conf /etc/nginx/
 
# Append "daemon off;" to the beginning of the configuration
#RUN echo "daemon off;" >> /etc/nginx/nginx.conf
 
#ENTRYPOINT ["service nginx start", "-g", "daemon off;"]
