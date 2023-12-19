---
title: "Universal Digital Signage: Installation Instructons"
date: 2023-08-12
layout: single-post
nosearch: "True"
postauthor: Innovation Technology Project
postauthorinfo: College of Visual Arts and Design
postauthorarea: 
postemail: 
posturl:
thumbnail: "img/digital-sign.svg"
---
The **Universal Digital Signage** web application provides a centralized digital signage solution. Images can be uploaded to the server and playlists created online.  Playlists can be assigned to individual digital signs (**hosts**) or signs can be managed in groups. Playlist changes can be performed on a schedule (daily, weekly, or monthly schedules) with an option to add an *interrupt* schedule change (a temporary change set for a given period of time after which the sign or group reverts back to its normal schedule).  There is also the option to assign playlists to **channels** to provide slideshows for other use cases (such as screensavers, external groups, or anythng where a slideshow is needed), **interactive kiosks**, and hosted online **presentations**.   
<!--more-->
## Project Overview

This project consists of both a Node.js server for the backend that serves as the API server and file system server and a React application for the frontend.  

Below are instructions for installing the prerequisites (Node.js, npm, MongoDB) and setting up the backend and frontend.

The install instructions were tested using **Ubuntu 22.04.3 LTS** running on Windows 11, Windows Subsystem for Linux 2 (WSL2).

## Prerequisites

Uninstall any existing versions of Node.js and npm to avoid conflicts.

### Node.js, npm and npm-run-all Installation Guide  

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash  
source ~/.bashrc
nvm ls-remote
nvm install v18.18.2
nvm use v18.18.2
npm install -g npm@9.8.1
npm install -g npm-run-all
```  

Confirm the correct versions of each are installed: (node.js - v18.18.2; npm - 9.8.1 )

```sh 
node -v 
npm -v
```  

### MongoDB Installation Guide

To be added.

### Clone the repository:

Use https, ssh or the Github CLI:

```sh
git clone https://github.com/imagelessthought/universal-signage.git
git clone git@github.com:imagelessthought/universal-signage.git
gh repo clone imagelessthought/universal-signage
```

## SETUP the Backend: Node.js Server

**Navigate to the backend directory**:

```sh
cd universal-signage/backend
```

**Install project dependencies**:

```sh
npm install
```

### Directory Structure for Backend

The backend project structure may vary based on your specific setup, but here's a typical structure:

```
backend/
  ├── src/
  │   ├── controllers/
  │   ├── routes/
  │   ├── server.js
  │   └── ...
  ├── .env
  ├── package.json
  ├── README.md
  └── ...
```
### Environment Variables for Backend
This project requires certain environment variables to be set. Create a `.env` file in the root of your project and define the required variables. *Make sure to keep this file private and never commit it to version control*. 

Example .env file: /universal-signage/backend/.env -> ** The version below will run it on the localhost ONLY **

```  
NODE_ENV='production'  
#For Instance QA  
NODE_ENV = 'local'  
HOST='localhost'  
LOCAL_DB=''  
PROD_DB=''  
LOCALHOST='http://localhost:8080/'  
PRODHOST=''  
PORT = 8080  
JWT_SECRET=""   
```

The server will start and listen on the port specified in your `.env` file (default is 3000).

### API Endpoints for Backend

Describe the endpoints of your API, how to use them, and any parameters they accept.

Example:

- `GET /api/users`: Retrieve a list of users.
- `POST /api/users`: Create a new user.

## SETUP the Frontend: React App

**Navigate to the frontend directory**:

```sh
cd universal-signage/frontend/
```

**Install project dependencies**:

```sh
npm install
```
### Environment Variables for Frontend

This project requires certain environment variables to be set. Create a `.env` file in the root of your project and define the required variables. *Make sure to keep this file private and never commit it to version control*. 

Example .env file: /universal-signage/frontend/.env -> ** The version below will run it on the localhost ONLY **

**Example: .env**

```  
REACT_APP_ENV=Dev  
REACT_APP_API_URL=http://localhost:8080/api/  
REACT_APP_API_DEV=  
REACT_APP_HOST=http://localhost:8080/  
REACT_APP_HOST_NAME=  
REACT_APP_PROD_HOST=
```  
## Setup npm-run-all

You will need to update the package.json located in the root of the project and provide the path to the backend and frontend directories on your system:

**Example: package.json**

```  
{
  "dependencies": {
    "react-bootstrap": "^2.9.1"
  },
    "scripts": {
    "start": "npm-run-all --parallel start-frontend start-backend",
    "start-frontend": "cd ~/server/universal-signage/frontend && npm start",
    "start-backend": "cd ~/server/universal-signage/backend && npm start"
  }
}
```  
## Starting the Server ##
If you have configured the package.jason located in the root of thje project correctly, as shown above, you can launch the server by running this command from the root folder of the project:

```sh
npm start
```  