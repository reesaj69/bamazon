--Create a database called 'Bamazon' and create table
DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL (10,2) NOT NULL,
stock_quantity INTEGER(11) NOT NULL,
PRIMARY KEY (item_id)
);

--Insert data into the 'products table' --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 	('Kellogg Nutri-Grain Bars', 'Grocery', 4.99, 300),
		('BH Cosmetics Neutral Eyeshadow', 'Cosmetics', 12.99, 100),
		('Monopoly', 'Toys', 14.29, 250),
		('Sorry', 'Toys', 19.49, 300),
		('Scrabble', 'Toys', 31.49, 200),
		('Bagels 20oz/6ct', 'Grocery', 2.99, 200),
		('Split Breasts 46oz', 'Grocery', 7.49, 400),
		('ChapStick', 'Cosmetics', 4.99, 300),
		('Dove Dry Oil Beauty Bar', 'Grocery', 7.09, 400),
		('Crest 3D White Toothpaste', 'Grocery', 0.99, 500);

