// import React from "react";

// const FiveDayForecast = ({ forecastData }) => {
//   if (!forecastData || !forecastData.list) {
//     return <div className="text-center text-gray-400 py-4">Loading forecast...</div>;
//   }

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat('en-GB', {
//       weekday: 'short',
//       day: '2-digit',
//       month: 'short',
//     }).format(date);
//   };

//   // Filter for one forecast per day (preferably at 12:00:00)
//   const dailyForecasts = [];
//   const map = {};

//   forecastData.list.forEach(item => {
//     const date = item.dt_txt.split(' ')[0];
//     const time = item.dt_txt.split(' ')[1];
//     if (!map[date] || time === "12:00:00") {
//       map[date] = item;
//     }
//   });

//   Object.keys(map).slice(0, 5).forEach(date => {
//     dailyForecasts.push(map[date]);
//   });

//   // return (
//   //   <div className="bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-md mx-auto p-5 flex flex-col gap-3">
//   //     <div className="text-lg font-bold mb-2 text-center tracking-tight">5 Day Forecast</div>
//   //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//   //       {dailyForecasts.map((item, index) => (
//   //         <div
//   //           key={index}
//   //           className="flex items-center justify-between gap-2 px-3 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
//   //         >
//   //           <div className="flex flex-col items-center min-w-[60px]">
//   //             <img
//   //               src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
//   //               alt={item.weather[0].description}
//   //               className="w-10 h-10"
//   //               aria-label={item.weather[0].description}
//   //             />
//   //             <span className="text-xs capitalize text-gray-300">{item.weather[0].description}</span>
//   //           </div>
//   //           <div className="flex flex-col items-end">
//   //             <span className="text-xl font-semibold">{Math.round(item.main.temp)}°C</span>
//   //             <span className="text-xs text-gray-400">{formatDate(item.dt_txt)}</span>
//   //           </div>
//   //         </div>
//   //       ))}
//   //     </div>
//   //   </div>
//   // );

//   return (
//   <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700/40 text-gray-900 dark:text-white rounded-xl shadow-lg w-full max-w-md mx-auto p-5 flex flex-col gap-3 transition-colors duration-300">
//     <div className="text-lg font-bold mb-2 text-center tracking-tight">5 Day Forecast</div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//       {dailyForecasts.map((item, index) => (
//         <div
//           key={index}
//           className="flex items-center justify-between gap-2 px-3 py-3 rounded-lg bg-white/40 dark:bg-gray-700/50 backdrop-blur-sm border border-white/10 dark:border-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-600/60 transition"
//         >
//           <div className="flex flex-col items-center min-w-[60px]">
//             <img
//               src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
//               alt={item.weather[0].description}
//               className="w-10 h-10"
//               aria-label={item.weather[0].description}
//             />
//             <span className="text-xs capitalize text-gray-700 dark:text-gray-200">{item.weather[0].description}</span>
//           </div>
//           <div className="flex flex-col items-end">
//             <span className="text-xl font-semibold text-gray-900 dark:text-white">{Math.round(item.main.temp)}°C</span>
//             <span className="text-xs text-gray-500 dark:text-gray-300">{formatDate(item.dt_txt)}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// };

// export default FiveDayForecast;


import React from "react";

const FiveDayForecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) {
    return <div className="text-center text-gray-400 py-4">Loading forecast...</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    }).format(date);
  };

  // Filter for one forecast per day (preferably at 12:00:00)
  const dailyForecasts = [];
  const map = {};

  forecastData.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0];
    const time = item.dt_txt.split(' ')[1];
    if (!map[date] || time === "12:00:00") {
      map[date] = item;
    }
  });

  Object.keys(map).slice(0, 5).forEach(date => {
    dailyForecasts.push(map[date]);
  });

  return (
    <div className="
      bg-white/30 dark:bg-gray-800/50 backdrop-blur-md
      border border-white/20 dark:border-gray-700/40
      text-gray-900 dark:text-white rounded-xl shadow-lg w-full
      max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl
      p-4 sm:p-5 md:p-6 flex flex-col gap-3 transition-colors duration-300
    ">
      <div className="text-base sm:text-lg font-bold mb-2 text-center tracking-tight">
        5 Day Forecast
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {dailyForecasts.map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center justify-between gap-2 px-2 py-3
              rounded-lg bg-white/40 dark:bg-gray-700/50 backdrop-blur-sm
              border border-white/10 dark:border-gray-700/30
              hover:bg-white/60 dark:hover:bg-gray-600/60
              transition
            "
          >
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
              className="w-8 h-8 sm:w-10 sm:h-10"
              aria-label={item.weather[0].description}
            />
            <span className="text-xs sm:text-sm capitalize text-gray-700 dark:text-gray-200 text-center">
              {item.weather[0].description}
            </span>
            <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              {Math.round(item.main.temp)}°C
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-300">
              {formatDate(item.dt_txt)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDayForecast;
