# React Weather App

![GitHub repo size](https://img.shields.io/github/repo-size/mohitgundal/react-WeatherApp)
![GitHub license](https://img.shields.io/github/license/mohitgundal/react-WeatherApp)

A modern, responsive weather application built with React, Vite, Tailwind CSS, and Material UI that provides accurate current weather, air quality, and forecast data for any city worldwide.

## Live Demo

[https://mohitgundal.github.io/react-WeatherApp/](https://mohitgundal.github.io/react-WeatherApp/)



## Overview
This React Weather App allows users to search for any city and get detailed weather information including temperature, humidity, wind speed, air quality index (AQI), sunrise and sunset times, and minute-by-minute precipitation visualization. It uses the OpenWeatherMap API to fetch real-time data and presents it with a clean, user-friendly interface.

## Features

- **Current Weather Data:** Real-time temperature, humidity, wind speed, pressure, and feels-like temperature.
- **Air Quality Index:** Displays AQI with pollutant details (CO, NO, NO₂, O₃).
- **Sunrise & Sunset:** Shows local sunrise and sunset times.
- **Minute-by-Minute Precipitation:** Visualizes upcoming precipitation chances.
- **Responsive Design:** Works well on desktop and mobile with light/dark mode support.
- **Search Functionality:** Search weather by city name worldwide.
- **Material UI & Tailwind CSS:** Combines Material UI icons with Tailwind CSS for styling.
- **Built with Vite:** Fast development and optimized build process.


## Screenshots

## Dark Theme Mode
![WeatherApp ScreenShot 1](Images/Screenshot1.png)

## Light Theme Mode
![WeatherApp ScreenShot 2](Images/Screenshot2.png)

---

## Technologies Used

- **React 19** — For building a dynamic and responsive user interface with reusable components.
- **Vite** — Fast development server and build tool for optimized performance.
- **Tailwind CSS 4.1.10** — Utility-first CSS framework for rapid and consistent styling.
- **Material UI Icons** — Provides modern, scalable icons to enhance the UI.
- **Axios** — Simplifies HTTP requests to fetch weather data from APIs.
- **OpenWeatherMap API** — Supplies real-time weather, forecast, and air quality data worldwide.

---

## Installation and Usage

1. **Clone the repository:**
   
```bash
git clone https://github.com/mohitgundal/react-WeatherApp.git
```


2. **Navigate to the project folder:**

```bash
cd react-WeatherApp
```

3. **Install dependencies:**

```bash
npm install
```

4. **Create a .env file in the root and add your OpenWeatherMap API key:**

```bash
VITE_WEATHER_API_KEY=your_api_key_here
```

5. **Running Locally**
**Start the development server:**

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Deployment
This app can be deployed easily on GitHub Pages or any static hosting service.

## GitHub Pages Deployment

1. **Set the base option in vite.config.js to your repository name:**

```bash
base: '/your-repo-name/',
```

2. **Add deploy scripts to package.json:**

```bash
"scripts": {
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Deploy with:**

```bash
npm run deploy
```

4. **Configure GitHub Pages source branch to gh-pages in your repo settings.**

---


## Folder Structure
```plaintext
/
├── src/components       # React components like TodayHighlights, Highlightbox, etc.
├── src/assets           # Static assets and icons.
├── src/App.jsx          # Main app component.
├── vite.config.js       # Vite configuration with Tailwind and React plugins.
├── tailwind.config.js   # Vite configuration with Tailwind and React plugins.
└── README.md            # This file
```

## Contribution
Feel free to fork the repository, make improvements, and submit pull requests. Issues and feature requests are also welcome!


## Acknowledgements
1. **Thanks to OpenWeatherMap for the API.**
2. **Inspired by various open-source weather apps and UI libraries.**



## License
This project is licensed under the MIT License — see the LICENSE file for details.


## Contact
Created by Mohit Gundal. Feel free to reach out for suggestions or collaborations!


## Thank you for checking out this project! 😊

Would you like me to help you customize this further, for example, adding badges, or writing a shorter summary?
