INSERT INTO users (first_name, last_name, email, phone, allow_emails, allow_texts, google_id, facebook_id)
VALUES ($2, $3, $4, null, true, false, null, $1);