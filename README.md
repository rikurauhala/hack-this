# Hack This

## About

**Hack This** is a simple fullstack web application that contains several security vulnerabilities. The application can be used to demonstrate how mistakes by the developers can lead to compromised security.

## How to install

Follow the instructions to set up the project.

### Source code

To install the application, start by downloading the source code from the [project repository](https://github.com/rikurauhala/hack-this). You may use your [preferred method](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) but for this example I am using the `git clone` command using ssh.

Change directory to the newly created folder containing the source code.

```bash
$ git clone git@github.com:rikurauhala/hack-this.git
$ cd ./hack-this
```

### Backend

The repository contains the source code of both the frontend and the backend. Let's set up the backend first.

See below for a list of commands to run. Fill in the 

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

### Frontend

Now let's install the frontend.

```bash
# Change directory into the frontend folder
$ cd ../frontend

# Install dependencies
$ npm install
```
