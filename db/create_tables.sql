DROP TABLE IF EXISTS items, lists, users;

CREATE TABLE users (
  id SERIAL primary key,
  firstname varchar(40),
  lastname varchar(40),
  email varchar(255),
  phone varchar(20),
  allowemails boolean,
  allowtexts boolean
);

CREATE TABLE lists (
  id SERIAL primary key,
  userid integer references users(id),
  list_name varchar(255)
);

CREATE TABLE items (
  id SERIAL primary key,
  listid integer references lists(id),
  item_name varchar(255),
  date varchar(255),
  description text
);

INSERT INTO users (firstname, lastname, email, phone, allowemails, allowtexts)
VALUES ('Joshua', 'Baert', 'jbghoring@gmial.com', '801-850-8199', true, true)