// import React from "react";

// const FiveDayForecast = ({ forecastData }) => {
//   if (!forecastData || !forecastData.list) {
//     return <div>Loading forecast...</div>;
//   }

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat('en-GB', {
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
//     // Pick 12:00:00 if available, otherwise pick the first entry for the day
//     if (!map[date] || time === "12:00:00") {
//       map[date] = item;
//     }
//   });

//   // Get the first 5 days
//   Object.keys(map).slice(0, 5).forEach(date => {
//     dailyForecasts.push(map[date]);
//   });

//   return (
//     <div style={{
//       backgroundColor: '#4B5563',
//       color: "white",
//       borderRadius: '0.5rem',
//       width: '240px',
//       padding: '15px 30px'
//       // paddingLeft: '30px',
//       // paddingRight: '30px',
//       // paddingTop: '15px',
//       // paddingBottom: '15px',
//     }}>
//       {dailyForecasts.map((item, index) => (
//         <div
//           key={index}
//           style={{
//             marginBottom: '25px',
//             display: 'flex',
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}>
//           <div>
//             <div style={{ fontSize: '15px', fontWeight: "bold" }}>
//               {Math.round(item.main.temp)}°c
//             </div>
//           </div>
//           <div>
//             <div style={{ fontSize: '15px', fontWeight: "bold" }}>
//               {formatDate(item.dt_txt)}
//             </div>
//           </div>
//           <div>
//             <div style={{ fontSize: '15px' }}>
//               {item.weather[0].description}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FiveDayForecast;


// import React from "react";

// const FiveDayForecast = ({ forecastData }) => {
//   if (!forecastData || !forecastData.list) {
//     return <div>Loading forecast...</div>;
//   }

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat('en-GB', {
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
//     // Pick 12:00:00 if available, otherwise pick the first entry for the day
//     if (!map[date] || time === "12:00:00") {
//       map[date] = item;
//     }
//   });

//   // Get the first 5 days
//   Object.keys(map).slice(0, 5).forEach(date => {
//     dailyForecasts.push(map[date]);
//   });

//   return (
//     // <div className="bg-gray-700 text-white rounded-md w-60 p-4">
//     <div className="bg-gray-700 text-white rounded-md w-full max-w-xs p-4 mx-auto">
//       {dailyForecasts.map((item, index) => (
//         <div
//           key={index}
//           className="mb-6 flex justify-between items-center"
//         >
//           <div>
//             <div className="text-sm font-bold">
//               {Math.round(item.main.temp)}°c
//             </div>
//           </div>
//           <div>
//             <div className="text-sm font-bold">
//               {formatDate(item.dt_txt)}
//             </div>
//           </div>
//           <div>
//             <div className="text-sm capitalize">
//               {item.weather[0].description}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FiveDayForecast;

// import React from "react";

// const FiveDayForecast = ({ forecastData }) => {
//   if (!forecastData || !forecastData.list) {
//     return <div className="text-center text-gray-400 py-4">Loading forecast...</div>;
//   }

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat('en-GB', {
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

//   return (
//     <div className="bg-gray-700 text-white rounded-lg shadow w-full max-w-xs mx-auto p-3 flex flex-col gap-2">
//       {dailyForecasts.map((item, index) => (
//         <div
//           key={index}
//           className="flex items-center justify-between gap-2 px-2 py-2 rounded hover:bg-gray-600 transition"
//         >
//           <div className="flex flex-col items-center min-w-[60px]">
//             <img
//               src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
//               alt={item.weather[0].main}
//               className="w-8 h-8"
//             />
//             <span className="text-xs capitalize">{item.weather[0].description}</span>
//           </div>
//           <div className="flex flex-col items-end">
//             <span className="text-base font-semibold">{Math.round(item.main.temp)}°C</span>
//             <span className="text-xs text-gray-300">{formatDate(item.dt_txt)}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
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

  // return (
  //   <div className="bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-md mx-auto p-5 flex flex-col gap-3">
  //     <div className="text-lg font-bold mb-2 text-center tracking-tight">5 Day Forecast</div>
  //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
  //       {dailyForecasts.map((item, index) => (
  //         <div
  //           key={index}
  //           className="flex items-center justify-between gap-2 px-3 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
  //         >
  //           <div className="flex flex-col items-center min-w-[60px]">
  //             <img
  //               src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
  //               alt={item.weather[0].description}
  //               className="w-10 h-10"
  //               aria-label={item.weather[0].description}
  //             />
  //             <span className="text-xs capitalize text-gray-300">{item.weather[0].description}</span>
  //           </div>
  //           <div className="flex flex-col items-end">
  //             <span className="text-xl font-semibold">{Math.round(item.main.temp)}°C</span>
  //             <span className="text-xs text-gray-400">{formatDate(item.dt_txt)}</span>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
  <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700/40 text-gray-900 dark:text-white rounded-xl shadow-lg w-full max-w-md mx-auto p-5 flex flex-col gap-3 transition-colors duration-300">
    <div className="text-lg font-bold mb-2 text-center tracking-tight">5 Day Forecast</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {dailyForecasts.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between gap-2 px-3 py-3 rounded-lg bg-white/40 dark:bg-gray-700/50 backdrop-blur-sm border border-white/10 dark:border-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-600/60 transition"
        >
          <div className="flex flex-col items-center min-w-[60px]">
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
              className="w-10 h-10"
              aria-label={item.weather[0].description}
            />
            <span className="text-xs capitalize text-gray-700 dark:text-gray-200">{item.weather[0].description}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xl font-semibold text-gray-900 dark:text-white">{Math.round(item.main.temp)}°C</span>
            <span className="text-xs text-gray-500 dark:text-gray-300">{formatDate(item.dt_txt)}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default FiveDayForecast;
