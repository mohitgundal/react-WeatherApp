// import React from "react";
// import AirIcon from '@mui/icons-material/Air';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import NightsStayIcon from "@mui/icons-material/NightsStay";
// import Highlightbox from "./Highlightbox";
// import InvertColorsIcon from '@mui/icons-material/InvertColors';
// import CompressIcon from '@mui/icons-material/Compress';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';


// const TodayHighlights = ({ weatherData, airQualityData }) => {

//   const { main, wind, visibility, sys } = weatherData;
//   const airQualityIndex = airQualityData?.main?.aqi;
//   const { co, no, no2, o3 } = airQualityData?.components || {};

//   const renderAirQualityDescription = (aqi) => {
//     switch (aqi) {
//       case 1:
//         return "Good";
//       case 2:
//         return "Fair";
//       case 3:
//         return "Moderate";
//       case 4:
//         return "Poor";
//       case 5:
//         return "Very Poor";
//       default:
//         return "Unknown";
//     }
//   };

//   const highlights = [
//     { title: 'Humidity', value: `${main.humidity}%`, Icon: InvertColorsIcon },
//     {
//       title: 'Pressure',
//       value: `${main.pressure} hPa`,
//       Icon: CompressIcon,
//     },
//     {
//       title: 'Visibility',
//       value: `${visibility / 1000} km`,
//       Icon: VisibilityIcon,
//     },
//     {
//       title: 'Feels Like',
//       value: `${main.feels_like}°C`,
//       Icon: DeviceThermostatIcon,
//     },
//   ];

//   return (
//     <div style={{
//       backgroundColor: '#4B5563',
//       color: "white",
//       width: '1050px',
//       borderRadius: '0.5rem',
//       padding: '30px',
//     }}>

//       <div style={{ fontSize: '20px' }}>Today's Highlights</div>
//       <div style={{
//         display: "flex",
//         gap: '18px',
//       }}>

//         <div style={{
//           backgroundColor: '#374151',
//           color: "white",
//           padding: '1rem',
//           borderRadius: '0.5rem',
//           marginTop: '11px',
//           width: '370px',
//         }}>

//           <div>
//             <div style={{
//               display: "flex",
//               justifyContent: "space-between",
//               fontSize: '22px',
//             }}>

//               <p>Air Quality Index</p>
//               <div style={{
//                 marginTop: '1rem',
//                 fontSize: '16px',
//                 fontWeight: '700',
//                 backgroundColor: "green",
//                 height: '20px',
//                 width: '45px',
//                 borderRadius: '6px',
//                 alignItems: "center",
//                 display: "flex",
//                 justifyContent: "center",
//               }}>
//                 {renderAirQualityDescription(airQualityIndex)}
//               </div>
//             </div>
//             <div>
//               <AirIcon style={{ fontSize: '35px' }} />
//               <div style={{
//                 marginTop: '1rem',
//                 display: "grid",
//                 gridTemplateColumns: 'repeat(4, 1fr)',
//                 gap: '10px',
//               }}>
//                 <div>
//                   <p style={{ fontWeight: "bold" }}>CO</p>
//                   <p>{co} μg/m³</p>
//                 </div>

//                 <div>
//                   <p style={{ fontWeight: "bold" }}>NO</p>
//                   <p>{no} μg/m³</p>
//                 </div>

//                 <div>
//                   <p style={{ fontWeight: "bold" }}>NO₂</p>
//                   <p>{no2} μg/m³</p>
//                 </div>

//                 <div>
//                   <p style={{ fontWeight: "bold" }}>O₃</p>
//                   <p>{o3} μg/m³</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div style={{
//           backgroundColor: '#374151',
//           color: "white",
//           padding: '1rem',
//           borderRadius: '0.5rem',
//           marginTop: '11px',
//           width: '385px',
//         }}>
//           <div style={{ fontSize: '22px' }}>
//             <p>Sunrise And Sunset</p>
//             <div style={{
//               display: "flex",
//               justifyContent: "space-between",
//               padding: '10px'
//             }}>
//               <div>
//                 <WbSunnyIcon style={{ fontSize: '40px', marginLeft: '30px' }} />
//                 <p style={{ fontSize: '25px', marginLeft: '20px' }}> {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
//               </div>
//               <div>
//                 <NightsStayIcon style={{ fontSize: '40px', marginRight: '35px' }} />
//                 <p style={{ fontSize: '25px', marginRight: '50px' }}>{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{
//         display: "flex",
//         gap: '4px',
//         marginTop: '10px',
//       }}>

//         {highlights.map((highlight, index) => (
//           <Highlightbox
//             key={index}
//             title={highlight.title}
//             value={highlight.value}
//           Icon={highlight.Icon}/>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodayHighlights;


// import React from "react";
// import AirIcon from '@mui/icons-material/Air';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import NightsStayIcon from "@mui/icons-material/NightsStay";
// import Highlightbox from "./Highlightbox";
// import InvertColorsIcon from '@mui/icons-material/InvertColors';
// import CompressIcon from '@mui/icons-material/Compress';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

// const TodayHighlights = ({ weatherData, airQualityData }) => {
//   const { main, wind, visibility, sys } = weatherData;
//   const airQualityIndex = airQualityData?.main?.aqi;
//   const { co, no, no2, o3 } = airQualityData?.components || {};

//   const renderAirQualityDescription = (aqi) => {
//     switch (aqi) {
//       case 1: return "Good";
//       case 2: return "Fair";
//       case 3: return "Moderate";
//       case 4: return "Poor";
//       case 5: return "Very Poor";
//       default: return "Unknown";
//     }
//   };

//   const highlights = [
//     { title: 'Humidity', value: `${main.humidity}%`, Icon: InvertColorsIcon },
//     { title: 'Pressure', value: `${main.pressure} hPa`, Icon: CompressIcon },
//     { title: 'Visibility', value: `${visibility / 1000} km`, Icon: VisibilityIcon },
//     { title: 'Feels Like', value: `${main.feels_like}°C`, Icon: DeviceThermostatIcon },
//   ];

//   return (
//     // <div className="bg-gray-700 text-white rounded-lg w-full max-w-5xl p-8">
//     <div className="bg-gray-700 text-white rounded-lg w-full p-8 min-h-[500px]">
//       <div className="text-xl font-semibold mb-6">Today's Highlights</div>
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Air Quality Card */}
//         <div className="bg-gray-800 text-white p-6 rounded-lg mt-2 w-full md:w-[370px] flex-1">
//           <div className="flex justify-between items-center text-lg font-semibold mb-4">
//             <span>Air Quality Index</span>
//             <span className="mt-2 text-base font-bold bg-green-600 h-6 w-20 rounded-md flex items-center justify-center">
//               {renderAirQualityDescription(airQualityIndex)}
//             </span>
//           </div>
//           <div>
//             <AirIcon className="text-3xl mb-2" />
//             <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
//               <div>
//                 <p className="font-bold">CO</p>
//                 <p>{co} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold">NO</p>
//                 <p>{no} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold">NO₂</p>
//                 <p>{no2} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold">O₃</p>
//                 <p>{o3} μg/m³</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Sunrise & Sunset Card */}
//         <div className="bg-gray-800 text-white p-6 rounded-lg mt-2 w-full md:w-[385px] flex-1">
//           <div className="text-lg font-semibold mb-4">Sunrise And Sunset</div>
//           <div className="flex justify-between px-2">
//             <div className="flex flex-col items-center">
//               <WbSunnyIcon className="text-4xl text-yellow-400 mb-1" />
//               <p className="text-2xl font-bold">{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
//               <span className="text-sm mt-1">Sunrise</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <NightsStayIcon className="text-4xl text-indigo-300 mb-1" />
//               <p className="text-2xl font-bold">{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
//               <span className="text-sm mt-1">Sunset</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-2 mt-4 flex-wrap">
//         {highlights.map((highlight, index) => (
//           <Highlightbox
//             key={index}
//             title={highlight.title}
//             value={highlight.value}
//             Icon={highlight.Icon}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodayHighlights;

// import React from "react";
// import AirIcon from '@mui/icons-material/Air';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import NightsStayIcon from "@mui/icons-material/NightsStay";
// import Highlightbox from "./Highlightbox";
// import InvertColorsIcon from '@mui/icons-material/InvertColors';
// import CompressIcon from '@mui/icons-material/Compress';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

// const TodayHighlights = ({ weatherData, airQualityData }) => {
//   const { main, wind, visibility, sys } = weatherData;
//   const airQualityIndex = airQualityData?.main?.aqi;
//   const { co, no, no2, o3 } = airQualityData?.components || {};

//   const renderAirQualityDescription = (aqi) => {
//     switch (aqi) {
//       case 1: return "Good";
//       case 2: return "Fair";
//       case 3: return "Moderate";
//       case 4: return "Poor";
//       case 5: return "Very Poor";
//       default: return "Unknown";
//     }
//   };

//   const highlights = [
//     { title: 'Humidity', value: `${main.humidity}%`, Icon: InvertColorsIcon },
//     { title: 'Pressure', value: `${main.pressure} hPa`, Icon: CompressIcon },
//     { title: 'Visibility', value: `${visibility / 1000} km`, Icon: VisibilityIcon },
//     { title: 'Feels Like', value: `${main.feels_like}°C`, Icon: DeviceThermostatIcon },
//   ];

//   return (
//     <div className="bg-gray-700 text-white rounded-2xl shadow-lg w-full min-h-[500px] p-8 flex flex-col gap-8">
//       <div className="text-2xl font-bold mb-4">Today's Highlights</div>
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Air Quality Card */}
//         <div className="bg-gray-800 rounded-xl p-6 flex-1 min-w-[260px] shadow hover:shadow-xl transition">
//           <div className="flex justify-between items-center text-lg font-semibold mb-4">
//             <span>Air Quality Index</span>
//             <span className={`mt-2 text-base font-bold px-3 py-1 rounded-md ${airQualityIndex === 1 ? 'bg-green-600' : airQualityIndex === 2 ? 'bg-yellow-500' : airQualityIndex === 3 ? 'bg-yellow-600' : airQualityIndex === 4 ? 'bg-orange-600' : 'bg-red-700'}`}>
//               {renderAirQualityDescription(airQualityIndex)}
//             </span>
//           </div>
//           <div>
//             <AirIcon className="text-3xl mb-2" />
//             <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
//               <div>
//                 <p className="font-bold">CO</p>
//                 <p>{co} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold">NO</p>
//                 <p>{no} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold">NO₂</p>
//                 <p>{no2} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold">O₃</p>
//                 <p>{o3} μg/m³</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Sunrise & Sunset Card */}
//         <div className="bg-gray-800 rounded-xl p-6 flex-1 min-w-[260px] shadow hover:shadow-xl transition">
//           <div className="text-lg font-semibold mb-4">Sunrise & Sunset</div>
//           <div className="flex justify-between px-2">
//             <div className="flex flex-col items-center">
//               <WbSunnyIcon className="text-4xl text-yellow-400 mb-1" />
//               <p className="text-2xl font-bold">{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
//               <span className="text-sm mt-1">Sunrise</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <NightsStayIcon className="text-4xl text-indigo-300 mb-1" />
//               <p className="text-2xl font-bold">{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
//               <span className="text-sm mt-1">Sunset</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Highlights Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//         {highlights.map((highlight, index) => (
//           <Highlightbox
//             key={index}
//             title={highlight.title}
//             value={highlight.value}
//             Icon={highlight.Icon}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodayHighlights;


// import React from "react";
// import AirIcon from '@mui/icons-material/Air';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import NightsStayIcon from "@mui/icons-material/NightsStay";
// import Highlightbox from "./Highlightbox";
// import InvertColorsIcon from '@mui/icons-material/InvertColors';
// import CompressIcon from '@mui/icons-material/Compress';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';



// const TodayHighlights = ({ weatherData, airQualityData }) => {
//   const { main, wind, visibility, sys } = weatherData;
//   const airQualityIndex = airQualityData?.main?.aqi;
//   const { co, no, no2, o3 } = airQualityData?.components || {};

//   const renderAirQualityDescription = (aqi) => {
//     switch (aqi) {
//       case 1: return "Good";
//       case 2: return "Fair";
//       case 3: return "Moderate";
//       case 4: return "Poor";
//       case 5: return "Very Poor";
//       default: return "Unknown";
//     }
//   };

//   const highlights = [
//     { title: 'Humidity', value: `${main.humidity}%`, Icon: InvertColorsIcon },
//     { title: 'Pressure', value: `${main.pressure} hPa`, Icon: CompressIcon },
//     { title: 'Visibility', value: `${visibility / 1000} km`, Icon: VisibilityIcon },
//     { title: 'Feels Like', value: `${main.feels_like}°C`, Icon: DeviceThermostatIcon },
//   ];

//   if (!weatherData || !weatherData.main) {
//     return <div className="text-center text-gray-400">No weather data available.</div>;
//   }


//   return (
//     <div className="bg-gray-700 text-white rounded-2xl shadow-lg w-full max-w-3xl mx-auto p-8 flex flex-col gap-8">
//       <div className="text-2xl font-bold mb-4 tracking-tight">Today's Highlights</div>
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Air Quality Card */}
//         <div className="bg-gray-800 rounded-xl p-6 flex-1 min-w-[260px] shadow hover:shadow-xl transition flex flex-col gap-4">
//           <div className="flex justify-between items-center text-lg font-semibold mb-2">
//             <span>Air Quality Index</span>
//             <span className={`text-base font-bold px-3 py-1 rounded-md
//               ${airQualityIndex === 1 ? 'bg-green-600' :
//                 airQualityIndex === 2 ? 'bg-yellow-500' :
//                   airQualityIndex === 3 ? 'bg-yellow-600' :
//                     airQualityIndex === 4 ? 'bg-orange-600' : 'bg-red-700'}`}>
//               {renderAirQualityDescription(airQualityIndex)}
//             </span>
//           </div>
//           <div>
//             <AirIcon className="text-4xl mb-3" />
//             <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3">
//               <div>
//                 <p className="font-bold text-sm">CO</p>
//                 <p className="text-sm">{co} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold text-sm">NO</p>
//                 <p className="text-sm">{no} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold text-sm">NO₂</p>
//                 <p className="text-sm">{no2} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold text-sm">O₃</p>
//                 <p className="text-sm">{o3} μg/m³</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Sunrise & Sunset Card */}
//         <div className="bg-gray-800 rounded-xl p-6 flex-1 min-w-[260px] shadow hover:shadow-xl transition flex flex-col gap-4">
//           <div className="text-lg font-semibold mb-2">Sunrise & Sunset</div>
//           <div className="flex justify-between px-2">
//             <div className="flex flex-col items-center">
//               <WbSunnyIcon className="text-4xl text-yellow-400 mb-1" />
//               <p className="text-2xl font-bold">{new Date(sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
//               <span className="text-sm mt-1">Sunrise</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <NightsStayIcon className="text-4xl text-indigo-300 mb-1" />
//               <p className="text-2xl font-bold">{new Date(sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
//               <span className="text-sm mt-1">Sunset</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Highlights Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//         {highlights.map((highlight, index) => (
//           <Highlightbox
//             key={index}
//             title={highlight.title}
//             value={highlight.value}
//             Icon={highlight.Icon}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodayHighlights;

// import React from "react";
// import AirIcon from '@mui/icons-material/Air';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import NightsStayIcon from "@mui/icons-material/NightsStay";
// import Highlightbox from "./Highlightbox";
// import InvertColorsIcon from '@mui/icons-material/InvertColors';
// import CompressIcon from '@mui/icons-material/Compress';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

// const TodayHighlights = ({ weatherData, airQualityData }) => {
//   const { main, wind, visibility, sys } = weatherData;
//   const airQualityIndex = airQualityData?.main?.aqi;
//   const { co, no, no2, o3 } = airQualityData?.components || {};

//   const renderAirQualityDescription = (aqi) => {
//     switch (aqi) {
//       case 1: return "Good";
//       case 2: return "Fair";
//       case 3: return "Moderate";
//       case 4: return "Poor";
//       case 5: return "Very Poor";
//       default: return "Unknown";
//     }
//   };

//   const highlights = [
//     { title: 'Humidity', value: `${main.humidity}%`, Icon: InvertColorsIcon },
//     { title: 'Pressure', value: `${main.pressure} hPa`, Icon: CompressIcon },
//     { title: 'Visibility', value: `${visibility / 1000} km`, Icon: VisibilityIcon },
//     { title: 'Feels Like', value: `${main.feels_like}°C`, Icon: DeviceThermostatIcon },
//   ];

//   if (!weatherData || !weatherData.main) {
//     return <div className="text-center text-gray-400">No weather data available.</div>;
//   }

//   return (
//     <div className="
//       bg-white/30 dark:bg-gray-800/50
//       backdrop-blur-md
//       border border-white/20 dark:border-gray-700/40
//       rounded-2xl shadow-lg w-full max-w-3xl mx-auto p-8 flex flex-col gap-8
//       transition duration-300
//     ">
//       <div className="text-2xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">Today's Highlights</div>
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Air Quality Card */}
//         <div className="
//           bg-white/40 dark:bg-gray-700/50
//           backdrop-blur-md
//           border border-white/10 dark:border-gray-700/30
//           rounded-xl p-6 flex-1 min-w-[260px] shadow hover:shadow-xl transition duration-300 flex flex-col gap-4
//         ">
//           <div className="flex justify-between items-center text-lg font-semibold mb-2 text-gray-900 dark:text-white">
//             <span>Air Quality Index</span>
//             <span className={`
//               text-base font-bold px-3 py-1 rounded-md text-white
//               ${airQualityIndex === 1 ? 'bg-green-600' :
//                 airQualityIndex === 2 ? 'bg-yellow-500' :
//                   airQualityIndex === 3 ? 'bg-yellow-600' :
//                     airQualityIndex === 4 ? 'bg-orange-600' : 'bg-red-700'}
//             `}>
//               {renderAirQualityDescription(airQualityIndex)}
//             </span>
//           </div>
//           <div>
//             <AirIcon className="text-4xl mb-3" />
//             <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3">
//               <div>
//                 <p className="font-bold text-sm text-gray-900 dark:text-white">CO</p>
//                 <p className="text-sm text-gray-700 dark:text-gray-200">{co} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold text-sm text-gray-900 dark:text-white">NO</p>
//                 <p className="text-sm text-gray-700 dark:text-gray-200">{no} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold text-sm text-gray-900 dark:text-white">NO₂</p>
//                 <p className="text-sm text-gray-700 dark:text-gray-200">{no2} μg/m³</p>
//               </div>
//               <div>
//                 <p className="font-bold text-sm text-gray-900 dark:text-white">O₃</p>
//                 <p className="text-sm text-gray-700 dark:text-gray-200">{o3} μg/m³</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Sunrise & Sunset Card */}
//         <div className="
//           bg-white/40 dark:bg-gray-700/50
//           backdrop-blur-md
//           border border-white/10 dark:border-gray-700/30
//           rounded-xl p-6 flex-1 min-w-[260px] shadow hover:shadow-xl transition duration-300 flex flex-col gap-4
//         ">
//           <div className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Sunrise & Sunset</div>
//           <div className="flex justify-between px-2">
//             <div className="flex flex-col items-center">
//               <WbSunnyIcon className="text-4xl text-yellow-400 mb-1" />
//               <p className="text-2xl font-bold text-gray-900 dark:text-white">
//                 {new Date(sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//               </p>
//               <span className="text-sm mt-1 text-gray-700 dark:text-gray-200">Sunrise</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <NightsStayIcon className="text-4xl text-indigo-300 mb-1" />
//               <p className="text-2xl font-bold text-gray-900 dark:text-white">
//                 {new Date(sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//               </p>
//               <span className="text-sm mt-1 text-gray-700 dark:text-gray-200">Sunset</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Highlights Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//         {highlights.map((highlight, index) => (
//           <Highlightbox
//             key={index}
//             title={highlight.title}
//             value={highlight.value}
//             Icon={highlight.Icon}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodayHighlights;


import React from "react";
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Highlightbox from "./Highlightbox";
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CompressIcon from '@mui/icons-material/Compress';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const TodayHighlights = ({ weatherData, airQualityData }) => {
  const { main, wind, visibility, sys } = weatherData;
  const airQualityIndex = airQualityData?.main?.aqi;
  const { co, no, no2, o3 } = airQualityData?.components || {};

  const renderAirQualityDescription = (aqi) => {
    switch (aqi) {
      case 1: return "Good";
      case 2: return "Fair";
      case 3: return "Moderate";
      case 4: return "Poor";
      case 5: return "Very Poor";
      default: return "Unknown";
    }
  };

  const highlights = [
    { title: 'Humidity', value: `${main.humidity}%`, Icon: InvertColorsIcon },
    { title: 'Pressure', value: `${main.pressure} hPa`, Icon: CompressIcon },
    { title: 'Visibility', value: `${visibility / 1000} km`, Icon: VisibilityIcon },
    { title: 'Feels Like', value: `${main.feels_like}°C`, Icon: DeviceThermostatIcon },
  ];

  if (!weatherData || !weatherData.main) {
    return <div className="text-center text-gray-400">No weather data available.</div>;
  }

  return (
    <div className="
      bg-white/30 dark:bg-gray-800/50
      backdrop-blur-md
      border border-white/20 dark:border-gray-700/40
      rounded-2xl shadow-lg w-full max-w-3xl mx-auto p-8 flex flex-col gap-8
      transition duration-300
    ">
      <div className="text-2xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">Today's Highlights</div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Air Quality Card */}
        <div className="
          bg-white/40 dark:bg-gray-700/50
          backdrop-blur-md
          border border-white/10 dark:border-gray-700/30
          rounded-xl p-6 flex-1 min-w-[260px] shadow hover:shadow-xl transition duration-300 flex flex-col gap-4
        ">
          <div className="flex justify-between items-center text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            <span>Air Quality Index</span>
            <span className={`
              text-base font-bold px-3 py-1 rounded-md text-white
              ${airQualityIndex === 1 ? 'bg-green-600' :
                airQualityIndex === 2 ? 'bg-yellow-500' :
                  airQualityIndex === 3 ? 'bg-yellow-600' :
                    airQualityIndex === 4 ? 'bg-orange-600' : 'bg-red-700'}
            `}>
              {renderAirQualityDescription(airQualityIndex)}
            </span>
          </div>
          <div>
            <AirIcon className="text-4xl mb-3" />
            <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white">CO</p>
                <p className="text-sm text-gray-700 dark:text-gray-200">{co} μg/m³</p>
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white">NO</p>
                <p className="text-sm text-gray-700 dark:text-gray-200">{no} μg/m³</p>
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white">NO₂</p>
                <p className="text-sm text-gray-700 dark:text-gray-200">{no2} μg/m³</p>
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white">O₃</p>
                <p className="text-sm text-gray-700 dark:text-gray-200">{o3} μg/m³</p>
              </div>
            </div>
          </div>
        </div>
        {/* Sunrise & Sunset Card */}
        <div className="
          bg-white/40 dark:bg-gray-700/50
          backdrop-blur-md
          border border-white/10 dark:border-gray-700/30
          rounded-xl p-6 flex-1 min-w-[260px] shadow hover:shadow-xl transition duration-300 flex flex-col gap-4
        ">
          <div className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Sunrise & Sunset</div>
          <div className="flex justify-between px-2">
            <div className="flex flex-col items-center">
              <WbSunnyIcon className="text-4xl text-yellow-400 mb-1" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {new Date(sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
              <span className="text-sm mt-1 text-gray-700 dark:text-gray-200">Sunrise</span>
            </div>
            <div className="flex flex-col items-center">
              <NightsStayIcon className="text-4xl text-indigo-300 mb-1" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {new Date(sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
              <span className="text-sm mt-1 text-gray-700 dark:text-gray-200">Sunset</span>
            </div>
          </div>
        </div>
      </div>
      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {highlights.map((highlight, index) => (
          <Highlightbox
            key={index}
            title={highlight.title}
            value={highlight.value}
            Icon={highlight.Icon}
          />
        ))}
      </div>

      {/* NEW: Minute-by-Minute Precipitation Placeholder */}
      <div className="mt-6">
        <div className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Next Hour Precipitation</div>
        <div className="flex overflow-x-auto pb-4 -mx-2">
          {/* This loop is a placeholder. You'll replace `Math.random()` with actual API data */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center px-3 flex-shrink-0">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {i * 5} min
              </p>
              <div className="h-8 flex items-end justify-center mt-2 w-6">
                {/* Visual bar for precipitation chance */}
                <div 
                  className="bg-blue-400 w-4 rounded-t"
                  style={{ height: `${Math.random() * 30 + 10}px` }} // Placeholder height
                ></div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {Math.round(Math.random() * 30)}% {/* Placeholder percentage */}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* End NEW: Minute-by-Minute Precipitation Placeholder */}

    </div>
  );
};

export default TodayHighlights;
