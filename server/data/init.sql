DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS messages;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  admin BOOLEAN DEFAULT 0
);

CREATE TABLE messages (
  id INTEGER PRIMARY KEY,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Password for Anonymous (admin) is '6mGRYR@4joEv8l6ot3salAZgSqG%xv'
-- Password for everyone else is 'password'

INSERT INTO users (username, password_hash) VALUES ('John', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Alice', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Michael', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Emily', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('William', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Emma', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('James', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Olivia', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Benjamin', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Sophia', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Daniel', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Isabella', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Matthew', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Laura', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');
INSERT INTO users (username, password_hash) VALUES ('Alexander', '$2b$10$a0ZrVb8h5mDCf3TYDB/XBukr8k.UAGcK/eVjVIib9DiveuFpBseGK');

INSERT INTO users (username, password_hash, admin) VALUES ('Anonymous', '$2b$10$iqtij1IfdJh/S7EB1fL4G.RQt9.j2d6HIcnKKRjYFFKDkmTGGRJqe', 1);

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
