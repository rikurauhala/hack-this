#!/bin/bash

cd ./server/data
rm database.db
touch database.db
sqlite3 database.db < init.sql
echo "Database initialized"
