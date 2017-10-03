# Technical challenge for fullstack JavaScript engineer role

##
To save you time I have delpoyed the app to AWS for demo purposes

http://ec2-34-212-110-50.us-west-2.compute.amazonaws.com/

## Below are install and run instructions 


### Install script
 

Install script is a one step process
cd recipes-website and run 

‘npm  run installAll’

### Troubleshooting
You may need to install nodemon globally

### Windows Users 

You need to npm install  in ‘frontend’ and ‘backend’ manually
 
1. cd  into  the ‘recipes-website’  folder and run  ‘npm install’
2. cd  into  the ‘frontend’  folder and run  ‘npm install’
2. cd  into  the ‘backend’  folder and run  ‘npm install’

You need to start the application in ‘frontend’ and ‘backend’ manually
The  1 step start script will not work in windows 
The commands you need are:
cd backend 
nodemon main.js --ignore auto_generated_recipes.json
 cd ../frontend
npm start'



## Tools used

This project contains a Node API server built with Express and  a Lokijs in-memory database. This is located in `/backend/`

The front end  React app generated with create-react-app under `/frontend/`.




