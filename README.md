<h1 align="center">💻 Hack This</h1>

<div align="center">

A lesson on web application security

</div>

<div align="center">

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## About

**Hack This** is a simple fullstack web application that contains several security vulnerabilities. The application can be used to demonstrate how mistakes by the developers can lead to compromised security.

> **Warning**  
> Do not use the code found in this repository in production. Also, do not use it to do anything illegal or exploit systems that you do not own or have a permission to enter. **For educational purposes only**.

## How to install

Follow the instructions to set up the project.

### Prerequisites

- `node` version 18.7.0 or higher
- `npm` version 9.8.0 or higher
- `sqlite3` should be installed
- `linux` is recommended
- `git` is recommended

### Installation script

A script has been written to automate the installation process. Install the application by running the script or follow the instructions below for a manual installation.

```bash
# Move to a directory where you wish to install the application
$ cd Downloads

# Get the script
$ wget https://raw.githubusercontent.com/rikurauhala/hack-this/main/scripts/install.sh

# Make it executable
$ chmod +x install.sh

# Run the script
$ ./install.sh
```

### Manual installation

#### Source code

To install the application, start by downloading the source code from the [project repository](https://github.com/rikurauhala/hack-this). You may use your [preferred method](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) but for this example I am using the `git clone` command using ssh.

Change directory to the newly created folder containing the source code.

```bash
# Move into an appropriate directory where you want to store the source code
$ cd Downloads

# Get the source code
$ git clone git@github.com:rikurauhala/hack-this.git

# Move into the project directory
$ cd ./hack-this
```

#### Backend

The repository contains the source code of both the frontend and the backend. Let's set up the backend first.

See below for a list of commands to run. Fill in the environment variables `DATABASE_URL` and `SECRET` with your own values.

```bash
# Change directory into the backend folder
$ cd ./server

# Install dependencies
$ npm install

# Create and initialize the database
$ cd ./data
$ touch database.db
$ sqlite3 database.db < init.sql

# Create the .env file
$ cd ..
$ touch .env
$ echo DATABASE_URL="path to your database file" >> .env
$ echo SECRET="a random string" >> .env
```

#### Frontend

Now let's install the frontend.

```bash
# Change directory into the frontend folder
$ cd ../web

# Install dependencies
$ npm install
```

## How to run

Use the following commands to run the backend and frontend separately. Make sure you are in the correct directories for each command.

```bash
# Run the backend
$ npm run dev

# Run the frontend
$ npm start
```
