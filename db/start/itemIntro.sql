INSERT INTO items (item_name, date, description, list_id, user_id)
VALUES ('Creating', 1481180400000, 'The + button on the bottom right will create an reminder for the category you care currenlty looking at. To create a new category you can do so with the + sign button on the nav bar.', $1, $2),
('Navigation', 1481180400000, 'The buttons on the left are the nav bar. The logo will take you to a view of all of your categories. Each individual list will create a new button on the left side. The + on the nav bar will always create a new category', $1, $2),
('Settings', 1481180400000, 'The gear icon in the bottom left will allow you to change information about you, and how you are okay with being notified', $1, $2),
('Editing', 1481180400000, 'The pencil icon will allow you to edit the item it is display with.', $1, $2),
('Reminders', 1481180400000, 'Reminders will be send out the day before the date of the reminder.. They will be sent as SMS or Email depending on your settings.. By default SMS will be disabled..', $1, $2),
('Special Note', 1481180400000, 'Current known bugs. 1. The icon field categories is incomplete (you can try random words by placing "fa-" infront of them example "fa-home, fa-list, fa-car" I will be fixing this 2. Sometimes you will need to refresh or click off then back on a page to see new reminders.', $1, $2),
('Thanks', 1481180400000, 'Thanks for testing this app for me!! Please let me know any issues or bugs you find so that I may fix them (Developer@baert.io incase you do not have my email)', $1, $2);