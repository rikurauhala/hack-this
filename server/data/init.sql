DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS messages;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  admin BOOLEAN DEFAULT 0
);

CREATE TABLE messages (
  id INTEGER PRIMARY KEY,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (username, password, admin) VALUES ('admin', 'secret', 1);

INSERT INTO users (username, password) VALUES ('John', 'zY6N08h932e78YESLZkg');
INSERT INTO users (username, password) VALUES ('Alice', 'Wn6769CaaAMrI3waK3KG');
INSERT INTO users (username, password) VALUES ('Michael', '97Fo90zMrX4UMTqjmTfj');
INSERT INTO users (username, password) VALUES ('Emily', 'wC80w2LszkuRiUqXbJsL');
INSERT INTO users (username, password) VALUES ('William', '4U00me8B84ldivGtajSv');
INSERT INTO users (username, password) VALUES ('Emma', 'Y2q0IXX57z42lcvPVXwd');
INSERT INTO users (username, password) VALUES ('James', '6wT471jowmIyNKyEc46m');
INSERT INTO users (username, password) VALUES ('Olivia', 'V6qX1v8lWjAIIcuwVYZW');
INSERT INTO users (username, password) VALUES ('Benjamin', 'oS6F1q42uv5R9WdZ7YZx');
INSERT INTO users (username, password) VALUES ('Sophia', 'zD81s8m4zfaC2zbfgYo5');
INSERT INTO users (username, password) VALUES ('Daniel', 'f1u3CNMPO92QN3lY0IPG');
INSERT INTO users (username, password) VALUES ('Isabella', '9jUc13EwgtlZe35mK8fs');
INSERT INTO users (username, password) VALUES ('Matthew', 'Ii6751QxTf5bSCTZ8EQM');
INSERT INTO users (username, password) VALUES ('Laura', 'Dh18fR7bQ0c1xOx3Pctk');
INSERT INTO users (username, password) VALUES ('Alexander', 'Tl1Bos60NZhgRQoskSUE');

INSERT INTO messages (message, user_id, created_at) VALUES ('Hello, this is John. Nice site!', 1, '2023-07-01 08:30:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Hello, this is Alice. Thanks for having me!', 2, '2023-07-10 15:45:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Hi, I''m Michael. Great guest book!', 3, '2023-07-15 11:20:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Hi, I''m Emily. Enjoyed visiting!', 4, '2023-07-20 09:05:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Greetings from William. Keep up the good work!', 5, '2023-07-25 17:50:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Greetings from Emma. Lovely website!', 6, '2023-07-26 14:15:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Hello, this is James. Awesome site!', 7, '2023-07-26 10:25:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Hello, this is Olivia. Enjoyable experience!', 8, '2023-07-26 12:35:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Hi, I''m Benjamin. Keep going!', 9, '2023-07-26 16:55:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Hi, I''m Sophia. Happy to leave a message!', 10, '2023-07-27 13:10:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Greetings from Daniel. Well done!', 11, '2023-07-27 18:40:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Greetings from Isabella. Thanks!', 12, '2023-07-27 07:55:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Hello, this is Matthew. Nice job!', 13, '2023-07-27 09:25:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Hello, this is Laura. Keep it up!', 14, '2023-07-27 16:30:00');
INSERT INTO messages (message, user_id, created_at) VALUES ('Hi, I''m Alexander. Excellent guest book!', 15, '2023-07-27 10:45:00');
