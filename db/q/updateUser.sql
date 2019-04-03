UPDATE users
SET first_name = $2,
last_name = $3,
email = $4,
phone = $5,
allow_emails = $6,
allow_texts = $7
WHERE id = $1;