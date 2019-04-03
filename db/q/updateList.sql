UPDATE lists
SET list_name = $2,
icon = $3
WHERE id = $1;