FROM node:22

# Working dir
WORKDIR /var/lib/docker/ 

# Copy files from Build
COPY package*.json ./

# copy config files
COPY vite.config.ts ./

# Install Globals
#RUN npm install prettier -g

# Install Files
RUN npm install 

# Copy SRC
COPY . .



# Build
RUN npm run build

# only allow node user to run the app 
# this caused permission issues, app would not run 
# USER node 

# Open Port
ENV PORT=80
EXPOSE 80

# Docker Command to Start Service
#CMD [ "node", "build/server.js" ]
CMD ["npm", "run","dev", "--", "--host"] 


# step 1: build image #############  run in terminal 
# docker build .\documents\apps_web\fivesixteen_v2\ -t fivesixteen:latest 
# (cd documents/apps_web/) docker build .\fivesixteen_v2 -t fivesixteen_v2:latest
# docker build -t fivesixteen_v2:latest .  

# step 2: publish image to container  ###########
# docker run -p 3516:5173 fivesixteen_v2:latest 
# docker run -p 3516:3516 image_ID (also known as "tag", ex. dba367sdfg) 
# docker run -d -p 3516:3516 --name nifty_raman fivesixteen_v2:latest 
# npm run dev --host (can be added to the end) 

# needed for vite app that would not stay on  
# docker run -d -p 3516:3516 --name nifty_raman <image_id_or_name> npm run dev

# step 3: push containers to docker hub online ###########
# docker push joeandtessa129/fivesixteen_v2:latest 

# step 4: pull containers from docker hub online ###########
# docker pull joeandtessa129/fivesixteen_v2:latest 