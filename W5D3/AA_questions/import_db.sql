PRAGMA foreign_keys
= ON;

CREATE TABLE users
(
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL
);

CREATE TABLE questions
(
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE questions_follows
(
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(question_id) REFERENCES questions(id)
);

CREATE TABLE replies
(
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    body TEXT NOT NULL,
    reply_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(question_id) REFERENCES questions(id),
    FOREIGN KEY(reply_id) REFERENCES replies(id)
);

CREATE TABLE question_likes
(
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(question_id) REFERENCES questions(id)
);

INSERT INTO 
    users
    (fname, lname)
VALUES
    ("Kevin", "Lai"),
    ("Derek", "Xu");

INSERT INTO
    questions
    (title, body, user_id)
VALUES
    ("What is cheese?", "Is cheese good?", 1),
    ("Hello?", "What?", 2);

INSERT INTO
    questions_follows
    (user_id, question_id)
VALUES
    (1, 1),
    (2, 2),
    (2, 1);

INSERT INTO
    replies
    (user_id, question_id, body, reply_id)
VALUES
    (2, 1, "Yes", NULL),
    (1, 1, "No", 1),
    (1, 2, "Hello", NULL);

INSERT INTO
    question_likes
    (question_id, user_id)
VALUES
    (1, 1),
    (2, 2),
    (1, 2);