// // import React from "react";
// // import WbSunnyIcon from '@mui/icons-material/WbSunny';
// // import AcUnitIcon from '@mui/icons-material/AcUnit';
// // import CloudIcon from '@mui/icons-material/Cloud';
// // import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// // import LocationOnIcon from '@mui/icons-material/LocationOn';


// // const Mainweather = ({ weatherData }) => {
// //     const temperatureCelsius = weatherData?.main?.temp || 'N/A';
// //     const weatherDescription = weatherData?.weather?.[0]?.description || 'N/A';
// //     const cityName = weatherData?.name || 'city not available';
// //     const countryname = weatherData?.sys?.country || 'country not avaialble';
// //     const timestamp = weatherData?.dt || null;


// //     const currentDate = timestamp ? new Date(timestamp * 1000).toLocaleDateString('en-US', {
// //         weekday: 'long', day: "numeric", month: "short"
// //     }) : "Date not available";

// //     const renderTemperatureIcon = () => {
// //         if (temperatureCelsius > 23) {
// //             return <WbSunnyIcon style={{ marginLeft: '10px', fontSize: '3rem', color: "orange" }} />
// //         } else if (temperatureCelsius < 10) {
// //             return <AcUnitIcon style={{ marginLeft: '10px', fontSize: '3rem', color: "blue" }} />
// //         } else {
// //             return <CloudIcon style={{ marginLeft: '10px', fontSize: '3rem', color: "gray" }} />
// //         }
// //     }

// //     return (

// //         <div style={{ backgroundColor: '#4B5563', color: 'white', borderRadius: '0.5rem', width: '240px', padding: '30px' }}>
// //             <div style={{ fontSize: '20px' }}>Now</div>
// //             <div style={{ display: 'flex', alignItems: 'center', fontSize: '35px', fontWeight: 'bold' }}>
// //                 {temperatureCelsius}c
// //                 {renderTemperatureIcon()}
// //             </div>
// //             <div style={{ fontSize: '15px', marginTop: '8px', fontWeight: '50' }}>{weatherDescription}</div>
// //             <div style={{ marginTop: '1rem' }}>
// //                 <div style={{ display: "flex", alignItems: "center" }}>
// //                     <CalendarMonthIcon />
// //                     {currentDate}
// //                 </div>
// //                 <div style={{marginTop: '4px', display: "flex", alignItems: "center"}}>
// //                     <LocationOnIcon />
// //                     {cityName}, {countryname}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Mainweather;


// import React from "react";
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import CloudIcon from '@mui/icons-material/Cloud';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// const Mainweather = ({ weatherData }) => {
//     const temperatureCelsius = weatherData?.main?.temp || 'N/A';
//     const weatherDescription = weatherData?.weather?.[0]?.description || 'N/A';
//     const cityName = weatherData?.name || 'city not available';
//     const countryname = weatherData?.sys?.country || 'country not avaialble';
//     const timestamp = weatherData?.dt || null;

//     const currentDate = timestamp
//         ? new Date(timestamp * 1000).toLocaleDateString('en-US', {
//             weekday: 'long', day: "numeric", month: "short"
//         })
//         : "Date not available";

//     const renderTemperatureIcon = () => {
//         if (temperatureCelsius > 23) {
//             return <WbSunnyIcon className="ml-2 text-4xl text-orange-400" />
//         } else if (temperatureCelsius < 10) {
//             return <AcUnitIcon className="ml-2 text-4xl text-blue-400" />
//         } else {
//             return <CloudIcon className="ml-2 text-4xl text-gray-400" />
//         }
//     }

//     return (
//         // <div className="bg-gray-700 text-white rounded-lg w-60 p-8">
//         <div className="bg-gray-700 text-white rounded-lg w-full max-w-xs p-6 mx-auto">
//             <div className="text-xl font-semibold">Now</div>
//             <div className="flex items-center text-4xl font-bold mt-2">
//                 {temperatureCelsius}c
//                 {renderTemperatureIcon()}
//             </div>
//             <div className="text-base mt-2 font-medium capitalize">{weatherDescription}</div>
//             <div className="mt-4">
//                 <div className="flex items-center">
//                     <CalendarMonthIcon className="mr-2" />
//                     <span>{currentDate}</span>
//                 </div>
//                 <div className="flex items-center mt-1">
//                     <LocationOnIcon className="mr-2" />
//                     <span>{cityName}, {countryname}</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Mainweather;


// import React from "react";
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import CloudIcon from '@mui/icons-material/Cloud';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import LocationOnIcon from '@mui/icons-material/LocationOn';



// const Mainweather = ({ weatherData }) => {
//     const temperatureCelsius = weatherData?.main?.temp ?? 'N/A';
//     const weatherDescription = weatherData?.weather?.[0]?.description ?? 'N/A';
//     const cityName = weatherData?.name ?? 'City not available';
//     const countryname = weatherData?.sys?.country ?? 'Country not available';
//     const timestamp = weatherData?.dt ?? null;

//     const currentDate = timestamp
//         ? new Date(timestamp * 1000).toLocaleDateString('en-US', {
//             weekday: 'long',
//             day: "numeric",
//             month: "short"
//         })
//         : "Date not available";

//     const renderTemperatureIcon = () => {
//         if (temperatureCelsius > 23) {
//             return (
//                 <WbSunnyIcon
//                     className="ml-3 text-5xl text-orange-400"
//                     titleAccess="Sunny"
//                     role="img"
//                 />
//             );
//         } else if (temperatureCelsius < 10) {
//             return (
//                 <AcUnitIcon
//                     className="ml-3 text-5xl text-blue-400"
//                     titleAccess="Cold"
//                     role="img"
//                 />
//             );
//         } else {
//             return (
//                 <CloudIcon
//                     className="ml-3 text-5xl text-gray-400"
//                     titleAccess="Cloudy"
//                     role="img"
//                 />
//             );
//         }
//     };

//     if (!weatherData || !weatherData.main) {
//         return <div className="text-center text-gray-400">No weather data available.</div>;
//     }


//     return (
//         <div className="bg-gray-700 text-white rounded-2xl shadow-lg w-full max-w-3xl mx-auto p-8 flex flex-col gap-3">
//             <div className="text-2xl font-bold mb-1 tracking-tight">Now</div>
//             <div className="flex items-center text-5xl font-bold mt-2">
//                 {temperatureCelsius}°C
//                 {renderTemperatureIcon()}
//             </div>
//             <div className="text-lg mt-2 font-medium capitalize">{weatherDescription}</div>
//             <div className="mt-4 flex flex-col gap-2">
//                 <div className="flex items-center">
//                     <CalendarMonthIcon className="mr-2 text-xl" />
//                     <span className="text-base">{currentDate}</span>
//                 </div>
//                 <div className="flex items-center">
//                     <LocationOnIcon className="mr-2 text-xl" />
//                     <span className="text-base">{cityName}, {countryname}</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Mainweather;


import React from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Mainweather = ({ weatherData }) => {
    const temperatureCelsius = weatherData?.main?.temp ?? 'N/A';
    const weatherDescription = weatherData?.weather?.[0]?.description ?? 'N/A';
    const cityName = weatherData?.name ?? 'City not available';
    const countryname = weatherData?.sys?.country ?? 'Country not available';
    const timestamp = weatherData?.dt ?? null;

    const currentDate = timestamp
        ? new Date(timestamp * 1000).toLocaleDateString('en-US', {
            weekday: 'long',
            day: "numeric",
            month: "short"
        })
        : "Date not available";

    const renderTemperatureIcon = () => {
        if (temperatureCelsius > 23) {
            return (
                <WbSunnyIcon
                    className="ml-3 text-5xl text-orange-400 dark:text-yellow-300"
                    titleAccess="Sunny"
                    role="img"
                />
            );
        } else if (temperatureCelsius < 10) {
            return (
                <AcUnitIcon
                    className="ml-3 text-5xl text-blue-400 dark:text-blue-300"
                    titleAccess="Cold"
                    role="img"
                />
            );
        } else {
            return (
                <CloudIcon
                    className="ml-3 text-5xl text-gray-400 dark:text-gray-200"
                    titleAccess="Cloudy"
                    role="img"
                />
            );
        }
    };

    if (!weatherData || !weatherData.main) {
        return <div className="text-center text-gray-400">No weather data available.</div>;
    }

    return (
        <div className="
            bg-white/30 dark:bg-gray-800/50
            backdrop-blur-md
            border border-white/20 dark:border-gray-700/40
            rounded-2xl shadow-lg w-full max-w-3xl mx-auto p-8 flex flex-col gap-3
            transition duration-300
        ">
            <div className="text-2xl font-bold mb-1 tracking-tight text-gray-900 dark:text-white">Now</div>
            <div className="flex items-center text-5xl font-bold mt-2 text-gray-900 dark:text-white">
                {temperatureCelsius}°C
                {renderTemperatureIcon()}
            </div>
            <div className="text-lg mt-2 font-medium capitalize text-gray-700 dark:text-gray-200">{weatherDescription}</div>
            <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center">
                    <CalendarMonthIcon className="mr-2 text-xl text-gray-700 dark:text-gray-200" />
                    <span className="text-base text-gray-700 dark:text-gray-200">{currentDate}</span>
                </div>
                <div className="flex items-center">
                    <LocationOnIcon className="mr-2 text-xl text-gray-700 dark:text-gray-200" />
                    <span className="text-base text-gray-700 dark:text-gray-200">{cityName}, {countryname}</span>
                </div>
            </div>
        </div>
    );
};

export default Mainweather;
