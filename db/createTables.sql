DROP TABLE IF EXISTS items, lists, users;

CREATE TABLE users (
  id SERIAL primary key,
  first_name varchar(40),
  last_name varchar(40),
  email varchar(255),
  phone varchar(20),
  allow_emails boolean,
  allow_texts boolean,
  facebook_id varchar (255),
  google_id varchar (255) unique
);

CREATE TABLE lists (
  id SERIAL primary key,
  user_id integer references users(id),
  icon varchar (50),
  list_name varchar(255)
);

CREATE TABLE items (
  id SERIAL primary key,
  list_id integer references lists(id),
  user_id integer references users(id),
  item_name varchar(255),
  date bigint,
  description text
);

INSERT INTO users (first_name, last_name, email, phone, allow_emails, allow_texts, google_id, facebook_id)
VALUES ('Joshua', 'Baert', 'jbghoring@gmail.com', '801-850-8199', true, true, '102527176643404312384', null),
('Kiery', 'Baert', 'kieryclayton@gmail.com', '385-329-4464', true, true, '102203758604518966743', null);

INSERT INTO lists (list_name,icon, user_id)
VALUES ('Home', 'fa-home', 1),
('Civic', 'fa-car', 1),
('Kiery', 'fa-female', 1),
('Josh', 'fa-male', 2),
('Chores', 'fa-home', 2);

INSERT INTO items (item_name, date, description, list_id, user_id)
VALUES ('Seed lawn', 1493532000000, 'Seed the lawn in spring', 1, 1),
('Furnace Filter', 1493532000000, 'Heater air Filter', 1, 1),
('Fule Filter', 1493532000000, 'Fuel Filter', 2, 1),
('Battery', 1493532000000, 'Battery', 2, 1),
('Check', 1493532000000, 'Check', 2, 1),
('Flowers', 1493532000000, 'Flowers', 3, 1),
('Games', 1493532000000, 'Games', 4, 2),
('Food', 1493532000000, 'Food', 4, 2),
('jelly', 1493532000000, 'jelly', 5, 2);