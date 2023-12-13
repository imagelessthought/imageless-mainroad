---
title: "Universal Digital Signage: Installation Instructons"
date: 2023-08-12
layout: single-post
categories:
  - "Digital Signage"
  - "Innovation Projects"
  - "Applications"
tags: 
  - "Digital Signage"
  - "Applications"
nosearch: "True"
postauthor: Shivam Jadhav
postauthorinfo: Innovation Technology Group-Student
postauthorarea: College of Visual Arts and Design
postemail: shivam.jadhav@unt.edu
posturl: https://itservices.cvad.unt.edu
thumbnail: "img/digital-sign.svg"
---
Welcome to the Universal Digital Signage project, a centralized digital signage solution that allows users to create playlists, add host devices on demand, and control what hosts display on their screens by managing playlists.

## Table of Contents

- [Project Overview](#project-overview)
- [Backend (Node.js Server)](#backend-nodejs-server)
  - [Prerequisites](#prerequisites-for-backend)
  - [Getting Started](#getting-started-for-backend)
  - [Project Structure](#project-structure-for-backend)
  - [Environment Variables](#environment-variables-for-backend)
  - [Running the Server](#running-the-server-for-backend)
  - [Endpoints](#endpoints-for-backend)
- [Frontend (React App)](#frontend-react-app)
  - [Prerequisites](#prerequisites-for-frontend)
  - [Getting Started](#getting-started-for-frontend)
  - [Environment Variables](#environment-variables-for-frontend)
  - [Available Scripts](#available-scripts-for-frontend)
  - [Folder Structure](#folder-structure-for-frontend)

## Project Overview

This project consists of both a Node.js server that serves as the API server and file system server for your Universal Digital Signage solution, and a React application for the frontend. Below are instructions for setting up and running both parts of the project.

### Node.js and npm Installation Guide

This guide will walk you through the process of installing Node.js and npm on a Windows machine.
## Prerequisites

    Ensure that you have administrative privileges on your machine.
    Uninstall any existing versions of Node.js and npm to avoid conflicts.

Steps
1. Install Node.js

    Download the Node.js installer from the official website: Node.js Downloads.

    Run the downloaded installer executable (node-v18.18.2-x64.msi or a similar filename) and follow the installation prompts.

    Accept the license agreement and click "Next."

    Choose the installation directory (the default is recommended), and click "Next."

    Select the components you want to install. Ensure that the "npm package manager" option is selected.

    Click "Next" and complete the installation process.

    To verify the installation, open a command prompt and run the following commands:

    bash

    node -v
    npm -v

    Verify that the displayed versions match the Node.js and npm versions you installed.

2. Upgrade npm (if necessary)

To upgrade npm to version 9.8.1, run the following command in the command prompt:

bash

npm install -g npm@9.8.1

This command installs npm globally (-g) and specifies version 9.8.1.
3. Verify npm Version

After upgrading npm, verify the installed version by running:

bash

npm -v

Ensure that the displayed version matches the one you installed (9.8.1).

### Backend (Node.js Server)

#### Prerequisites for Backend

Before you begin, ensure you have the following requirements:

- **Node.js and npm**: Make sure you have Node.js and npm (Node Package Manager) installed on your local machine. You can download and install them from [Node.js official website](https://nodejs.org/).

#### Getting Started for Backend

1. **Clone the repository**:

   ```sh
   git clone https://github.com/imagelessthought/universal-signage.git
   ```

2. **Navigate to the server directory**:

   ```sh
   cd universal-signage/backend
   ```

3. **Install project dependencies**:

   ```sh
   npm install
   ```

#### Project Structure for Backend

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
#### Environment Variables for Frontend

sample frontend.env:

REACT_APP_ENV=Dev
REACT_APP_API_URL=http://localhost:8080/api/
REACT_APP_API_DEV=http://signage.something.edu:8080/api/
REACT_APP_HOST=http://localhost:8080/
REACT_APP_HOST_NAME=http://signage.something.edu/
REACT_APP_PROD_HOST=http://signage.something.edu:8080/

#### Environment Variables for Backend

This project requires certain environment variables to be set. Create a `.env` file in the root of your project and define the required variables. Make sure to keep this file private and never commit it to version control. [Download Sample .env File](https://myunt-my.sharepoint.com/:w:/g/personal/shivam_jadhav_unt_edu/EXzWlSwGNvBEpmUi430JSZoBaN6TBLvEk626ZI0plCn9yA?e=SyfaII)

#### Running the Server for Backend

To start the server, use the following command:

```sh
npm start
```

The server will start and listen on the port specified in your `.env` file (default is 3000).

#### Endpoints for Backend

Describe the endpoints of your API, how to use them, and any parameters they accept.

Example:

- `GET /api/users`: Retrieve a list of users.
- `POST /api/users`: Create a new user.

### Frontend (React App)

#### Prerequisites for Frontend

Before you begin, ensure you have the following requirements:

- **Node.js and npm**: Make sure you have Node.js and npm installed on your local machine. You can download and install them from [Node.js official website](https://nodejs.org/).

#### Getting Started for Frontend

1. **Clone the repository**:

   ```sh
   git clone https://github.com/imagelessthought/universal-signage.git
   ```

2. **Navigate to the frontend directory**:

   ```sh
   cd universal-signage/frontend/
   ```

3. **Install project dependencies**:

   ```sh
   npm install
   ```

4. **Start the development server**:

   ```sh
   npm start
   ```

   Your app should now be running at [http://localhost:3000](http://localhost:3000).

#### Environment Variables for Frontend

This project requires certain environment variables to be set. Create a `.env` file in the root of your project and define the required variables. Make sure to keep this file private and never commit it to version control. [Download Sample .env File](https://myunt-my.sharepoint.com/:w:/g/personal/shivam_jadhav_unt_edu/EauX86cJJ69DpEIy4bVwrB0BLodgB7fpLKFgUSLJ32ZcUQ?e=xWkQE4)
copy the contents of the file an create a new .env file inside
/universal-signage/frontend/
and paste the contents copied earlier.