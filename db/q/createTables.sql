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
('Guest', 'User', 'Email@Fake.com', '555-555-5555', true, true, '5', null);

INSERT INTO lists (list_name,icon, user_id)
VALUES ('Home', 'fa-home', 1),
('Civic', 'fa-car', 1),
('Kiery', 'fa-female', 1),
('Click-Me', 'fa-list', 2);

INSERT INTO items (item_name, date, description, list_id, user_id)
VALUES ('Seed lawn', 1481526000000, 'Seed the lawn in spring', 1, 1),
('Battery', 1493532000000, 'Battery', 2, 1),
('Check', 1493532000000, 'Check', 2, 1),
('Furnace Filter', 1481180400000, 'Heater air Filter', 1, 1),
('Fuel Filter', 1481180400000, 'Fuel Filter', 2, 1),
('Flowers', 1493532000000, 'Flowers', 3, 1),
('Creating', 1481180400000, 'The + button on the bottom right will create an reminder for the category you care currenlty viewing. To create a new category you can do so with the + sign on the menu bar.', 4, 2),
('Navigation', 1481180400000, 'The buttons with the blue background on the left make up the menu bar. The red UpKeep logo will take you to a view of all of your categories. Each individual category will create a new button. The + on the menu bar will always create a new category', 4, 2),
('Settings', 1481180400000, 'The gear icon at the very bottom of the menu bar will allow you to change your user profile, and how you would like to be notified of your reminders', 4, 2),
('Editing', 1481180400000, 'The pencil icon is how you can change or edit an item.', 4, 2),
('Reminders', 1481180400000, 'Reminders will be send out the day before the date of the reminder.. They will be sent as SMS or Email depending on your settings.. By default SMS will be disabled, And cannot be enabled unless you add a phone number', 4, 2),
('Special Note', 1481180400000, '-- Current known bugs -- 1. Sometimes you will need to refresh or click off then back on a page to see new reminders -- 3. There is a bit of an issue with firefox and putting in dates --', 4, 2),
('Thanks', 1481180400000, 'Thanks for testing this app for me!! Please let me know any issues or bugs you find so that I may fix them (Developer@baert.io)', 4, 2);