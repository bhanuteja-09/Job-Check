#Author BASAVARAJ BHAVI

#stage1
# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./
 
#stage 2
FROM nginx:1.20.0-alpine
COPY --from=builder /build/ /usr/share/nginx/html
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
