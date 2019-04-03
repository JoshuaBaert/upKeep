select u.email, u.phone, i.item_name, i.description, i.date, u.allow_emails, u.allow_texts from items i
join users u on i.user_id = u.id;