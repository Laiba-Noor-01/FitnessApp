"Fitness & Wellness Tracker Web Application"

Project Description:
Designed and implemented as comprehensive Fitness & Wellness Tracker using 
1. React for the frontend
2. Node.js for the backend
3. PostgreSQL for persistent data storage.

The application will empower users to monitor and improve their health by tracking various wellness metrics including physical activity, meals, water intake, sleep, and mood.

Implements secure user authentication, structured health logging, and visual feedback through charts, offering an engaging and personalized wellness experience.

User Role – can register/login securely, input daily health data, set wellness goals, and track progress through a visual dashboard.
Admin Role (Optional) – has access to user logs, account management features, and monitoring tools for platform supervision and testing.

Key Modules:
• Authentication System 
• Daily Wellness Tracker 
• Users log:
    1. Meals and calorie intake
    2. Exercises (type, duration, burned calories)
    3. Water intake (ml/glasses)
    4. Sleep hours
    5. Mood (emoji/rating)
• Interactive Dashboard – Displays:
    1. Calories consumed vs burned
    2. Hydration and sleep trends
    3. Mood and activity insights (using Chart.js or Recharts)
• Goal Management – Users can define and track daily goals for calories, water, and sleep.
• Mobile-Responsive UI – Built with responsive design principles for smooth use on both desktop and mobile devices.
• Backend API & Security – Node.js handles RESTful APIs, with PostgreSQL ensuring structured data integrity and role-based data access.

Database Schema Overview:
  1. Users – Stores profile info: name, email, age, gender, height, weight
  2. FitnessLogs – Daily exercise type, duration, calories burned
  3. Meals – Meals by type, food items, calories
  4. WaterIntake – Date and water consumed (ml)
  5. SleepLogs – Hours of sleep per day
  6. MoodLogs – Mood selection by day

This project demonstrates the integration of modern full-stack technologies with real-world health and wellness tracking needs, offering a scalable and user-centric solution.
