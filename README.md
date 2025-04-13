
# Course Survey System

A simple PHP-based course evaluation survey system that stores data in MySQL.

## Setup Instructions

1. Install XAMPP (or any AMP stack) if you don't have it already
2. Place all the files in your htdocs folder (e.g., C:\xampp\htdocs\survey)
3. Start Apache and MySQL services in XAMPP
4. Open your browser and navigate to http://localhost/survey

## Features

- Submit course evaluations with name and rating
- View all evaluations in a table
- Delete evaluations
- Responsive design

## Database Setup

The application automatically creates the necessary database and table when you first run it, as long as you have MySQL running and the default credentials (username: root, password: empty) are valid.

If you need to change the database credentials, modify the `db.php` file.
