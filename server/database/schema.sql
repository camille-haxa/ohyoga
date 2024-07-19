create table category (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(80) NOT NULL
);

CREATE TABLE audio (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(80) NOT NULL,
    url VARCHAR(200) NOT NULL,
    image VARCHAR(200) NOT NULL,
    description TEXT,
    date DATETIME DEFAULT NOW(),
    category_id INT UNSIGNED,
    FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE role (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(80) NOT NULL
);

CREATE TABLE user (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INT UNSIGNED DEFAULT 1,
    FOREIGN KEY (role_id) REFERENCES role (id)
);

CREATE TABLE privilege (
    audio_id INT UNSIGNED,
    user_id INT UNSIGNED,
    FOREIGN KEY (audio_id) REFERENCES audio (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

INSERT INTO category (name) VALUES ('meditation'), ('nidra');

-- Création de roles
INSERT INTO role (name) VALUES ('user'), ('admin');