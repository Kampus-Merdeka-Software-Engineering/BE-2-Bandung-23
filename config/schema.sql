-- file ini untuk menginisiasi database yg digunakan pada aplikasi ini

CREATE DATABASE IF NOT EXISTS
`db_seriburasa`;

USE `db_seriburasa`;

CREATE TABLE IF NOT EXISTS menu (
    menu_id INT AUTO_INCREMENT PRIMARY KEY,
    menu_name VARCHAR(100) NOT NULL,
    menu_price INT NOT NULL,
    menu_type VARCHAR(255) NOT NULL,
    menu_description TEXT,
    menu_rating VARCHAR(100),
    image_url TEXT,
    is_recommended BOOLEAN NOT NULL,
);

CREATE TABLE IF NOT EXISTS transaction (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    address TEXT NOT NULL,
    menu_id INT NOT NULL,
    notes_menu_id TEXT,
    subtotal INT NOT NULL,
    shipping_cost INT NOT NULL,
    total INT NOT NULL,
    created_at DATETIME NOT NULL 
);

INSERT INTO menu (menu_name, menu_price, menu_type, menu_description, menu_rating, image_url, is_recommended)
VALUES ('', , '', '', '', '', 'true/false');
