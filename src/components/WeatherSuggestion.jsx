// // // import React from "react";
// // // import WbSunnyIcon from '@mui/icons-material/WbSunny';
// // // import UmbrellaIcon from '@mui/icons-material/Umbrella';
// // // import AcUnitIcon from '@mui/icons-material/AcUnit';

// // // const getSuggestion = (weatherData, airQualityData) => {
// // //   if (!weatherData || !weatherData.main) return { suggestion: "Loading...", icon: null };

// // //   const temp = weatherData.main.temp;
// // //   const rain = weatherData.weather[0].main.toLowerCase().includes("rain");
// // //   const aqi = airQualityData?.main?.aqi;

// // //   if (rain) return { suggestion: "Carry an umbrella today!", icon: <UmbrellaIcon className="text-blue-400 text-3xl" /> };
// // //   if (temp > 28) return { suggestion: "Stay hydrated and wear sunscreen!", icon: <WbSunnyIcon className="text-yellow-400 text-3xl" /> };
// // //   if (temp < 10) return { suggestion: "Bundle up, it's chilly outside!", icon: <AcUnitIcon className="text-blue-300 text-3xl" /> };
// // //   if (aqi >= 4) return { suggestion: "Air quality is poor, limit outdoor activity.", icon: <span className="text-red-400 text-3xl">😷</span> };

// // //   return { suggestion: "Great day for outdoor activities!", icon: <span className="text-green-400 text-3xl">🌳</span> };
// // // };

// // // const WeatherSuggestion = ({ weatherData, airQualityData }) => {
// // //   const { suggestion, icon } = getSuggestion(weatherData, airQualityData);

// // //   return (
// // //     <div className="bg-indigo-700 text-white rounded-xl shadow p-6 mt-8 flex flex-col items-center">
// // //       <div className="mb-2 text-2xl font-bold">Today's Suggestion</div>
// // //       <div className="flex flex-col items-center">
// // //         {icon}
// // //         <span className="mt-2 text-lg text-center">{suggestion}</span>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default WeatherSuggestion;


// // import React from "react";
// // import WbSunnyIcon from '@mui/icons-material/WbSunny';
// // import UmbrellaIcon from '@mui/icons-material/Umbrella';
// // import AcUnitIcon from '@mui/icons-material/AcUnit';

// // const getSuggestion = (weatherData, airQualityData) => {
// //   if (!weatherData || !weatherData.main) return { suggestion: "Loading...", icon: null };

// //   const temp = weatherData.main.temp;
// //   const rain = weatherData.weather[0].main.toLowerCase().includes("rain");
// //   const aqi = airQualityData?.main?.aqi;

// //   if (rain) return { suggestion: "Carry an umbrella today!", icon: <UmbrellaIcon className="text-blue-400 text-4xl animate-bounce" /> };
// //   if (temp > 28) return { suggestion: "Stay hydrated and wear sunscreen!", icon: <WbSunnyIcon className="text-yellow-400 text-4xl animate-pulse" /> };
// //   if (temp < 10) return { suggestion: "Bundle up, it's chilly outside!", icon: <AcUnitIcon className="text-blue-300 text-4xl animate-pulse" /> };
// //   if (aqi >= 4) return { suggestion: "Air quality is poor, limit outdoor activity.", icon: <span className="text-red-400 text-4xl animate-bounce">😷</span> };

// //   return { suggestion: "Great day for outdoor activities!", icon: <span className="text-green-400 text-4xl animate-pulse">🌳</span> };
// // };

// // const WeatherSuggestion = ({ weatherData, airQualityData }) => {
// //   const { suggestion, icon } = getSuggestion(weatherData, airQualityData);

// //   return (
// //     <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-slate-600 text-white rounded-2xl shadow-lg w-full max-w-xl mx-auto p-8 mt-8 flex flex-col items-center transition-transform hover:scale-[1.03]">
// //       <div className="mb-3 text-2xl font-extrabold tracking-tight drop-shadow-lg">Today's Suggestion</div>
// //       <div className="flex flex-col items-center gap-2">
// //         {icon}
// //         <span className="mt-2 text-lg font-medium text-center drop-shadow">{suggestion}</span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default WeatherSuggestion;


// import React from "react";
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import UmbrellaIcon from '@mui/icons-material/Umbrella';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import MasksIcon from '@mui/icons-material/Masks'; // AQI icon

// const suggestionRules = [
//   {
//     test: ({ rain }) => rain,
//     suggestion: "Carry an umbrella today!",
//     icon: (
//       <UmbrellaIcon
//         className="text-blue-400 text-4xl animate-bounce"
//         titleAccess="Rainy weather"
//         role="img"
//       />
//     )
//   },
//   {
//     test: ({ temp }) => temp > 28,
//     suggestion: "Stay hydrated and wear sunscreen!",
//     icon: (
//       <WbSunnyIcon
//         className="text-yellow-400 text-4xl animate-pulse"
//         titleAccess="Hot weather"
//         role="img"
//       />
//     )
//   },
//   {
//     test: ({ temp }) => temp < 10,
//     suggestion: "Bundle up, it's chilly outside!",
//     icon: (
//       <AcUnitIcon
//         className="text-blue-300 text-4xl animate-pulse"
//         titleAccess="Cold weather"
//         role="img"
//       />
//     )
//   },
//   {
//     test: ({ aqi }) => aqi >= 4,
//     suggestion: "Air quality is poor, limit outdoor activity.",
//     icon: (
//       <MasksIcon
//         className="text-red-400 text-4xl animate-bounce"
//         titleAccess="Poor air quality"
//         role="img"
//       />
//     )
//   },
//   // Add more rules here (e.g., snow, fog, etc.)
// ];

// const getSuggestion = (weatherData, airQualityData) => {
//   if (!weatherData || !weatherData.main) return { suggestion: "Loading...", icon: null };

//   // Defensive checks for weather array
//   const rain = weatherData.weather && weatherData.weather[0] && weatherData.weather[0].main.toLowerCase().includes("rain");
//   const temp = weatherData.main.temp;
//   const aqi = airQualityData?.main?.aqi;

//   const context = { temp, rain, aqi };

//   const rule = suggestionRules.find(rule => rule.test(context));
//   if (rule) return { suggestion: rule.suggestion, icon: rule.icon };

//   return {
//     suggestion: "Great day for outdoor activities!",
//     icon: (
//       <span
//         className="text-green-400 text-4xl animate-pulse"
//         role="img"
//         aria-label="Good air quality"
//         title="Good air quality"
//       >🌳</span>
//     )
//   };
// };

// // const WeatherSuggestion = ({ weatherData, airQualityData }) => {
// //   const { suggestion, icon } = getSuggestion(weatherData, airQualityData);

// //   return (
// //     <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-slate-600 text-white rounded-2xl shadow-lg w-full max-w-xl mx-auto p-8 mt-8 flex flex-col items-center transition-transform hover:scale-[1.03]">
// //       <div className="mb-3 text-2xl font-extrabold tracking-tight drop-shadow-lg">Today's Suggestion</div>
// //       <div className="flex flex-col items-center gap-2">
// //         {icon}
// //         <span className="mt-2 text-lg font-medium text-center drop-shadow">{suggestion}</span>
// //       </div>
// //     </div>
// //   );
// // };

// const WeatherSuggestion = ({ weatherData, airQualityData }) => {
//   const { suggestion, icon } = getSuggestion(weatherData, airQualityData);

//   return (
//     <div className="bg-gray-800/90 text-white rounded-xl shadow-md w-full max-w-xs mx-auto p-6 flex flex-col items-center gap-3 transition-transform hover:scale-105">
//       <div className="text-lg font-semibold tracking-tight mb-1">Today's Suggestion</div>
//       <div className="flex flex-col items-center">
//         <div className="mb-2">{icon}</div>
//         <span className="text-base text-center font-medium">{suggestion}</span>
//       </div>
//     </div>
//   );
// };

// export default WeatherSuggestion;


// import React from "react";
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
//     <div className="bg-gray-700 text-white rounded-2xl shadow-lg w-full max-w-3xl mx-auto p-8 mt-8 flex flex-col items-center gap-4">
//       <div className="text-2xl font-bold mb-2 tracking-tight">Today's Suggestion</div>
//       <div className="flex flex-col items-center gap-2">
//         <div>{icon}</div>
//         <span className="text-lg md:text-xl font-medium text-center">{suggestion}</span>
//       </div>
//     </div>
//   );
// };

// export default WeatherSuggestion;

import React from "react"
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
        className="text-blue-400 text-5xl md:text-6xl animate-bounce"
        titleAccess="Rainy weather"
        role="img"
      />
    ),
  },
  {
    test: ({ temp }) => temp > 28,
    suggestion: "Stay hydrated and wear sunscreen!",
    icon: (
      <WbSunnyIcon
        className="text-yellow-400 text-5xl md:text-6xl animate-pulse"
        titleAccess="Hot weather"
        role="img"
      />
    ),
  },
  {
    test: ({ temp }) => temp < 10,
    suggestion: "Bundle up, it's chilly outside!",
    icon: (
      <AcUnitIcon
        className="text-blue-300 text-5xl md:text-6xl animate-pulse"
        titleAccess="Cold weather"
        role="img"
      />
    ),
  },
  {
    test: ({ aqi }) => aqi >= 4,
    suggestion: "Air quality is poor, limit outdoor activity.",
    icon: (
      <MasksIcon
        className="text-red-400 text-5xl md:text-6xl animate-bounce"
        titleAccess="Poor air quality"
        role="img"
      />
    ),
  },
  // Add more rules as needed
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
        className="text-green-400 text-5xl md:text-6xl animate-pulse"
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
      rounded-2xl shadow-lg w-full max-w-3xl mx-auto p-8 mt-8 flex flex-col items-center gap-4
      transition duration-300
    ">
      <div className="text-2xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">Today's Suggestion</div>
      <div className="flex flex-col items-center gap-2">
        <div>{icon}</div>
        <span className="text-lg md:text-xl font-medium text-center text-gray-800 dark:text-gray-200">{suggestion}</span>
      </div>
    </div>
  );
};

export default WeatherSuggestion;
