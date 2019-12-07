DROP DATABASE IF EXISTS greatBay_DB;

CREATE DATABASE greatBay_DB;

USE greatBay_DB;

CREATE TABLE auctions (
  id INT NOT NULL AUTO_INCREMENT,
  category VARCHAR(45),
  bid INTEGER(45),
  itemName VARCHAR(45),
  PRIMARY KEY (id)
);

INSERT INTO auctions (category, bid, itemName)
VALUES ("chair", 20, "brown chair"), ("computer", 200, "macbook pro");