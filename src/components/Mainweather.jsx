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
//                     className="ml-3 text-5xl text-orange-400 dark:text-yellow-300"
//                     titleAccess="Sunny"
//                     role="img"
//                 />
//             );
//         } else if (temperatureCelsius < 10) {
//             return (
//                 <AcUnitIcon
//                     className="ml-3 text-5xl text-blue-400 dark:text-blue-300"
//                     titleAccess="Cold"
//                     role="img"
//                 />
//             );
//         } else {
//             return (
//                 <CloudIcon
//                     className="ml-3 text-5xl text-gray-400 dark:text-gray-200"
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
//         <div className="
//             bg-white/30 dark:bg-gray-800/50
//             backdrop-blur-md
//             border border-white/20 dark:border-gray-700/40
//             rounded-2xl shadow-lg w-full max-w-3xl mx-auto p-8 flex flex-col gap-3
//             transition duration-300
//         ">
//             <div className="text-2xl font-bold mb-1 tracking-tight text-gray-900 dark:text-white">Now</div>
//             <div className="flex items-center text-5xl font-bold mt-2 text-gray-900 dark:text-white">
//                 {temperatureCelsius}°C
//                 {renderTemperatureIcon()}
//             </div>
//             <div className="text-lg mt-2 font-medium capitalize text-gray-700 dark:text-gray-200">{weatherDescription}</div>
//             <div className="mt-4 flex flex-col gap-2">
//                 <div className="flex items-center">
//                     <CalendarMonthIcon className="mr-2 text-xl text-gray-700 dark:text-gray-200" />
//                     <span className="text-base text-gray-700 dark:text-gray-200">{currentDate}</span>
//                 </div>
//                 <div className="flex items-center">
//                     <LocationOnIcon className="mr-2 text-xl text-gray-700 dark:text-gray-200" />
//                     <span className="text-base text-gray-700 dark:text-gray-200">{cityName}, {countryname}</span>
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
                    className="ml-2 sm:ml-3 text-4xl sm:text-5xl text-orange-400 dark:text-yellow-300"
                    titleAccess="Sunny"
                    role="img"
                />
            );
        } else if (temperatureCelsius < 10) {
            return (
                <AcUnitIcon
                    className="ml-2 sm:ml-3 text-4xl sm:text-5xl text-blue-400 dark:text-blue-300"
                    titleAccess="Cold"
                    role="img"
                />
            );
        } else {
            return (
                <CloudIcon
                    className="ml-2 sm:ml-3 text-4xl sm:text-5xl text-gray-400 dark:text-gray-200"
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
            rounded-2xl shadow-lg w-full
            max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl
            mx-auto
            p-4 sm:p-6 md:p-8
            flex flex-col gap-2 sm:gap-3
            transition duration-300
        ">
            <div className="text-xl sm:text-2xl font-bold mb-1 tracking-tight text-gray-900 dark:text-white">
                Now
            </div>
            <div className="flex items-center text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
                {temperatureCelsius}°C
                {renderTemperatureIcon()}
            </div>
            <div className="text-base sm:text-lg mt-2 font-medium capitalize text-gray-700 dark:text-gray-200">
                {weatherDescription}
            </div>
            <div className="mt-3 sm:mt-4 flex flex-col gap-1 sm:gap-2">
                <div className="flex items-center">
                    <CalendarMonthIcon className="mr-1 sm:mr-2 text-lg sm:text-xl text-gray-700 dark:text-gray-200" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">{currentDate}</span>
                </div>
                <div className="flex items-center">
                    <LocationOnIcon className="mr-1 sm:mr-2 text-lg sm:text-xl text-gray-700 dark:text-gray-200" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">{cityName}, {countryname}</span>
                </div>
            </div>
        </div>
    );
};

export default Mainweather;
