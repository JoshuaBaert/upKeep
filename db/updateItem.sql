UPDATE items
SET item_name = $2,
date = $3,
description = $4
WHERE id = $1;