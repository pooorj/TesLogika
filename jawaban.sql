 select u.name, avg(h.level) as level_avg from users u join map_user_hobby muh on u.id = muh.id_user join hobbies h on muh.id_hobby = h.id where muh.status = 'active' group by u.name
