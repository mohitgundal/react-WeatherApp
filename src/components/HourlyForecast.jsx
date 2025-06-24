// import React from 'react';
// import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm } from 'react-icons/wi';

// const getWeatherIcon = (condition) => {
//   switch (condition.toLowerCase()) {
//     case 'clear': return <WiDaySunny className="text-yellow-400 text-2xl" />;
//     case 'rain': return <WiRain className="text-blue-400 text-2xl" />;
//     case 'clouds': return <WiCloudy className="text-gray-400 text-2xl" />;
//     case 'snow': return <WiSnow className="text-blue-200 text-2xl" />;
//     case 'thunderstorm': return <WiThunderstorm className="text-purple-500 text-2xl" />;
//     default: return <WiDaySunny className="text-yellow-400 text-2xl" />;
//   }
// };

// const HourlyForecast = ({ forecastData }) => {
//   if (!forecastData || !forecastData.list) {
//     return <div className="text-center text-gray-400 py-4">Loading hourly forecast...</div>;
//   }

//   // Group by day and get next 24 hours
//   const next24Hours = forecastData.list.slice(0, 8);

//   return (
//     <div className="
//       bg-white/40 dark:bg-gray-700/50
//       backdrop-blur-md
//       border border-white/10 dark:border-gray-700/30
//       rounded-xl p-6 mt-6
//       transition duration-300
//     ">
//       <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Hourly Forecast</h3>
//       <div className="flex overflow-x-auto pb-4 -mx-2 px-2">
//         {next24Hours.map((hour, index) => (
//           <div key={index} className="flex flex-col items-center px-3 flex-shrink-0">
//             <p className="text-gray-700 dark:text-gray-300 text-sm">
//               {new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//             </p>
//             <div className="my-2">
//               {getWeatherIcon(hour.weather[0].main)}
//             </div>
//             <p className="font-bold text-gray-900 dark:text-white">{Math.round(hour.main.temp)}°C</p>
//             <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
//               {hour.weather[0].description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HourlyForecast;


import React from 'react';
import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm } from 'react-icons/wi';

const getWeatherIcon = (condition, description) => {
  const iconProps = {
    className: "text-3xl sm:text-2xl",
    'aria-label': description
  };
  switch (condition.toLowerCase()) {
    case 'clear': return <WiDaySunny {...iconProps} style={{ color: '#facc15' }} />;
    case 'rain': return <WiRain {...iconProps} style={{ color: '#60a5fa' }} />;
    case 'clouds': return <WiCloudy {...iconProps} style={{ color: '#a3a3a3' }} />;
    case 'snow': return <WiSnow {...iconProps} style={{ color: '#bae6fd' }} />;
    case 'thunderstorm': return <WiThunderstorm {...iconProps} style={{ color: '#a78bfa' }} />;
    default: return <WiDaySunny {...iconProps} style={{ color: '#facc15' }} />;
  }
};

const HourlyForecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) {
    return <div className="text-center text-gray-400 py-4">Loading hourly forecast...</div>;
  }

  // Group by day and get next 24 hours
  const next24Hours = forecastData.list.slice(0, 8);

  return (
    <div className="
      bg-white/40 dark:bg-gray-700/50
      backdrop-blur-md
      border border-white/10 dark:border-gray-700/30
      rounded-xl p-4 sm:p-6 mt-6
      transition duration-300
    ">
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Hourly Forecast</h3>
      <div className="flex overflow-x-auto pb-4 -mx-2 px-2">
        {next24Hours.map((hour, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-2 sm:px-3 flex-shrink-0 min-w-[64px] sm:min-w-[80px]"
          >
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
              {new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
            <div className="my-2">
              {getWeatherIcon(hour.weather[0].main, hour.weather[0].description)}
            </div>
            <p className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">{Math.round(hour.main.temp)}°C</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 text-center">
              {hour.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
