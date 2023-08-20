#!/bin/bash

# Get the source code
echo "Cloning source code..."
git clone git@github.com:rikurauhala/hack-this.git &>/dev/null
echo "Source code cloned"

# Install backend
echo "Installing backend..."
cd ./hack-this/server
npm install &>/dev/null
echo "Backend installed"

# Initialize the database
echo "Initializing database..."
cd ./data
touch database.db
sqlite3 database.db < init.sql
echo "Database initialized"

# Create the .env file
echo "Configuring..."
cd ..
touch .env
current_dir=$(pwd)
echo DATABASE_URL="$current_dir/data/database.db" >> .env
echo LOG_FILE_PATH="$current_dir/data/log.txt" >> .env
random_string=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 25 | head -n 1)
echo SECRET=$random_string >> .env

# Install frontend
echo "Installing frontend..."
cd ../web
npm install &>/dev/null
echo "Frontend installed"

# Run the application or finish installation
echo "Do you want to run the application now? (y/n): "
read choice
while true; do
    if [[ "$choice" = "y" ]]; then
        npm start
        cd ../server
        npm run dev
        break
    elif [[ "$choice" = "n" ]]; then
        echo "Installation finished"
        break
    else
        echo "Invalid input. Please enter either 'y' or 'n': "
        read choice
    fi
done
