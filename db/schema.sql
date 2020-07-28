DROP DATABASE IF EXISTS jii9cfrn205h0ltk;
CREATE DATABASE jii9cfrn205h0ltk;

USE jii9cfrn205h0ltk;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured BOOLEAN default false,
	PRIMARY KEY (id)
);