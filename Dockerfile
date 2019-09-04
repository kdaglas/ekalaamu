# base image
FROM node:12.2.0
LABEL AUTHOR="Arnold Katumba <arnold.katumba@andela.com>"
LABEL TEAM="Ekalaamu"

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /ekalaamu

# add app
COPY . /ekalaamu

# add `/ekalaamu/node_modules/.bin` to $PATH
ENV PATH /ekalaamu/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm i
RUN npm install -g @angular/cli@7.3.9

# start app
CMD ng serve --host 0.0.0.0

