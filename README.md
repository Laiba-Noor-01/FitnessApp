# 🧘‍♀️ Fitness & Wellness Tracker Web Application

## 📌 Project Description

A comprehensive **Fitness & Wellness Tracker** built using modern full-stack technologies:

- **Frontend:** React.js  
- **Backend:** Node.js with Express  
- **Database:** PostgreSQL  

The application empowers users to monitor and improve their health by tracking wellness metrics such as physical activity, meals, water intake, sleep, and mood.

It features secure user authentication, structured health logging, and visual insights through charts—offering a personalized wellness experience.

---

## 👥 User Roles

- **User**
  - Register/login securely
  - Input daily health data
  - Set wellness goals
  - Track progress via visual dashboard

- **Admin** *(Optional)*
  - Access user logs
  - Manage user accounts
  - Monitor platform activity

---

## 🧩 Key Modules

- 🔐 Authentication System  
- 📅 Daily Wellness Tracker  
- 📊 Interactive Dashboard (Chart.js or Recharts)  
- 🎯 Goal Management  
- 📱 Mobile-Responsive UI  

---

## 🧾 Users Can Log:

1. 🥗 Meals & Calorie Intake  
2. 🏃‍♀️ Exercises (Type, Duration, Burned Calories)  
3. 💧 Water Intake (ml / glasses)  
4. 😴 Sleep Hours  
5. 😊 Mood (Emoji/Rating)  

---

## 🔌 Backend API & Architecture

- **Node.js + Express** with modular routing:
  - `/api/users`
  - `/api/fitness`
  - `/api/meals`
  - `/api/water`
  - `/api/sleep`
  - `/api/mood`
  - `/api/goals`

- **CRUD operations** for each module  
- Middleware:
  - `express.json()` for parsing JSON
  - `cors()` for cross-origin resource sharing

- **PostgreSQL** handles:
  - Structured data storage
  - Relationships and constraints
  - Efficient queries using `pg` module

- **Security:** Role-based access control for users and admin

---

## 🗃️ Database Schema Overview

| Table         | Description                                |
|---------------|--------------------------------------------|
| `Users`       | Name, Email, Password, Age, Gender, Height, Weight, Role |
| `FitnessLogs` | Date, Exercise Type, Duration, Calories Burned |
| `Meals`       | Date, Meal Type, Food Items, Calories      |
| `WaterIntake` | Date, Water Consumed (ml)                  |
| `SleepLogs`   | Date, Sleep Duration (hours)               |
| `MoodLogs`    | Date, Mood Rating                          |
| `Goals`       | User-defined targets for Calories, Water, and Sleep |

---

## 🚀 Conclusion

This project demonstrates the integration of **modern full-stack technologies** with real-world health tracking needs. It provides a **scalable**, **secure**, and **user-centric** solution that enhances personal wellness through structured data, interactive visuals, and responsive UI.
