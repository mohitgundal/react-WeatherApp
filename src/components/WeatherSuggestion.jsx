// import React from "react"
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import UmbrellaIcon from '@mui/icons-material/Umbrella';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import MasksIcon from '@mui/icons-material/Masks';

// const suggestionRules = [
//   {
//     test: ({ rain }) => rain,
//     suggestion: "Carry an umbrella today!",
//     icon: (
//       <UmbrellaIcon
//         className="text-blue-400 text-5xl md:text-6xl animate-bounce"
//         titleAccess="Rainy weather"
//         role="img"
//       />
//     ),
//   },
//   {
//     test: ({ temp }) => temp > 28,
//     suggestion: "Stay hydrated and wear sunscreen!",
//     icon: (
//       <WbSunnyIcon
//         className="text-yellow-400 text-5xl md:text-6xl animate-pulse"
//         titleAccess="Hot weather"
//         role="img"
//       />
//     ),
//   },
//   {
//     test: ({ temp }) => temp < 10,
//     suggestion: "Bundle up, it's chilly outside!",
//     icon: (
//       <AcUnitIcon
//         className="text-blue-300 text-5xl md:text-6xl animate-pulse"
//         titleAccess="Cold weather"
//         role="img"
//       />
//     ),
//   },
//   {
//     test: ({ aqi }) => aqi >= 4,
//     suggestion: "Air quality is poor, limit outdoor activity.",
//     icon: (
//       <MasksIcon
//         className="text-red-400 text-5xl md:text-6xl animate-bounce"
//         titleAccess="Poor air quality"
//         role="img"
//       />
//     ),
//   },
//   // Add more rules as needed
// ];

// const getSuggestion = (weatherData, airQualityData) => {
//   if (!weatherData || !weatherData.main) return { suggestion: "Loading...", icon: null };

//   const rain =
//     weatherData.weather &&
//     weatherData.weather[0] &&
//     weatherData.weather[0].main.toLowerCase().includes("rain");
//   const temp = weatherData.main.temp;
//   const aqi = airQualityData?.main?.aqi;

//   const context = { temp, rain, aqi };
//   const rule = suggestionRules.find((rule) => rule.test(context));
//   if (rule) return { suggestion: rule.suggestion, icon: rule.icon };

//   return {
//     suggestion: "Great day for outdoor activities!",
//     icon: (
//       <span
//         className="text-green-400 text-5xl md:text-6xl animate-pulse"
//         role="img"
//         aria-label="Good air quality"
//         title="Good air quality"
//       >
//         🌳
//       </span>
//     ),
//   };
// };

// const WeatherSuggestion = ({ weatherData, airQualityData }) => {
//   const { suggestion, icon } = getSuggestion(weatherData, airQualityData);

//   return (
//     <div className="
//       bg-white/30 dark:bg-gray-800/50
//       backdrop-blur-md
//       border border-white/20 dark:border-gray-700/40
//       rounded-2xl shadow-lg w-full max-w-3xl mx-auto p-8 mt-8 flex flex-col items-center gap-4
//       transition duration-300
//     ">
//       <div className="text-2xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">Today's Suggestion</div>
//       <div className="flex flex-col items-center gap-2">
//         <div>{icon}</div>
//         <span className="text-lg md:text-xl font-medium text-center text-gray-800 dark:text-gray-200">{suggestion}</span>
//       </div>
//     </div>
//   );
// };

// export default WeatherSuggestion;


import React from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MasksIcon from '@mui/icons-material/Masks';

const suggestionRules = [
  {
    test: ({ rain }) => rain,
    suggestion: "Carry an umbrella today!",
    icon: (
      <UmbrellaIcon
        className="text-blue-400 text-4xl sm:text-5xl md:text-6xl animate-bounce"
        titleAccess="Rainy weather"
        role="img"
        aria-label="Rainy weather"
      />
    ),
  },
  {
    test: ({ temp }) => temp > 28,
    suggestion: "Stay hydrated and wear sunscreen!",
    icon: (
      <WbSunnyIcon
        className="text-yellow-400 text-4xl sm:text-5xl md:text-6xl animate-pulse"
        titleAccess="Hot weather"
        role="img"
        aria-label="Hot weather"
      />
    ),
  },
  {
    test: ({ temp }) => temp < 10,
    suggestion: "Bundle up, it's chilly outside!",
    icon: (
      <AcUnitIcon
        className="text-blue-300 text-4xl sm:text-5xl md:text-6xl animate-pulse"
        titleAccess="Cold weather"
        role="img"
        aria-label="Cold weather"
      />
    ),
  },
  {
    test: ({ aqi }) => aqi >= 4,
    suggestion: "Air quality is poor, limit outdoor activity.",
    icon: (
      <MasksIcon
        className="text-red-400 text-4xl sm:text-5xl md:text-6xl animate-bounce"
        titleAccess="Poor air quality"
        role="img"
        aria-label="Poor air quality"
      />
    ),
  },
];

const getSuggestion = (weatherData, airQualityData) => {
  if (!weatherData || !weatherData.main) return { suggestion: "Loading...", icon: null };

  const rain =
    weatherData.weather &&
    weatherData.weather[0] &&
    weatherData.weather[0].main.toLowerCase().includes("rain");
  const temp = weatherData.main.temp;
  const aqi = airQualityData?.main?.aqi;

  const context = { temp, rain, aqi };
  const rule = suggestionRules.find((rule) => rule.test(context));
  if (rule) return { suggestion: rule.suggestion, icon: rule.icon };

  return {
    suggestion: "Great day for outdoor activities!",
    icon: (
      <span
        className="text-green-400 text-4xl sm:text-5xl md:text-6xl animate-pulse"
        role="img"
        aria-label="Good air quality"
        title="Good air quality"
      >
        🌳
      </span>
    ),
  };
};

const WeatherSuggestion = ({ weatherData, airQualityData }) => {
  const { suggestion, icon } = getSuggestion(weatherData, airQualityData);

  return (
    <div className="
      bg-white/30 dark:bg-gray-800/50
      backdrop-blur-md
      border border-white/20 dark:border-gray-700/40
      rounded-2xl shadow-lg w-full
      max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl
      mx-auto p-4 sm:p-6 md:p-8 mt-6 sm:mt-8
      flex flex-col items-center gap-2 sm:gap-4
      transition duration-300
    ">
      <div className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 tracking-tight text-gray-900 dark:text-white">
        Today's Suggestion
      </div>
      <div className="flex flex-col items-center gap-1 sm:gap-2">
        <div>{icon}</div>
        <span className="text-base sm:text-lg md:text-xl font-medium text-center text-gray-800 dark:text-gray-200">
          {suggestion}
        </span>
      </div>
    </div>
  );
};

export default WeatherSuggestion;
