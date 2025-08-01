CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    age INTEGER,
    gender VARCHAR(10),
    height_cm INTEGER,
    weight_kg INTEGER,
    role VARCHAR(10) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE FitnessLogs (
    log_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
    date DATE,
    exercise_type VARCHAR(100),
    duration_min INTEGER,
    calories_burned INTEGER
);
CREATE TABLE Meals (
    meal_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
    date DATE,
    meal_type VARCHAR(50),
    food_items TEXT,
    calories INTEGER
);
CREATE TABLE WaterIntake (
    water_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
    date DATE,
    amount_ml INTEGER
);
CREATE TABLE SleepLogs (
    sleep_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
    date DATE,
    hours_slept DECIMAL(3,1)
);
CREATE TABLE MoodLogs (
    mood_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
    date DATE,
    mood_rating INTEGER -- (1 to 5 or emoji index)
);
CREATE TABLE Goals (
    goal_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
    calories_goal INTEGER,
    water_goal_ml INTEGER,
    sleep_goal_hr DECIMAL(3,1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Users (name, email, password_hash, age, gender, height_cm, weight_kg, role)
VALUES 
('Zara Noor', 'zara@123.com', 'hashed_pass_1', 22, 'Female', 160, 55, 'user'),
('Ali Raza', 'ali@112.com', 'hashed_pass_2', 25, 'Male', 175, 70, 'user'),
('Hamza Ali', 'hamza.ali@35.com', 'hashed_pw3', 26, 'Male', 178, 72, 'admin');

SELECT * FROM Users;

INSERT INTO FitnessLogs (user_id, date, exercise_type, duration_min, calories_burned)
VALUES
(1, '2025-07-17', 'Walking', 30, 120),
(2, '2025-07-17', 'Cycling', 45, 300),
(1, '2025-07-18', 'Yoga', 20, 80);
SELECT * FROM FitnessLogs;

INSERT INTO Meals (user_id, date, meal_type, food_items, calories)
VALUES
(1, '2025-07-17', 'Breakfast', 'Paratha and tea', 350),
(2, '2025-07-17', 'Lunch', 'Chicken Biryani', 600),
(1, '2025-07-18', 'Dinner', 'Grilled fish and salad', 400);
SELECT * FROM Meals;

INSERT INTO WaterIntake (user_id, date, amount_ml)
VALUES
(1, '2025-07-17', 1500),
(2, '2025-07-17', 2000),
(1, '2025-07-18', 1800);
SELECT * FROM WaterIntake;

INSERT INTO SleepLogs (user_id, date, hours_slept)
VALUES
(1, '2025-07-17', 6.5),
(2, '2025-07-17', 7.0),
(1, '2025-07-18', 8.0);
SELECT * FROM SleepLogs;

INSERT INTO MoodLogs (user_id, date, mood_rating)
VALUES
(1, '2025-07-17', 4),
(2, '2025-07-17', 3),
(1, '2025-07-18', 5);
SELECT * FROM MoodLogs;

INSERT INTO Goals (user_id, calories_goal, water_goal_ml, sleep_goal_hr)
VALUES
(1, 1800, 2000, 8.0),
(2, 2200, 2500, 7.5),
(3, 2000, 2300, 7.0);
SELECT * FROM Goals;