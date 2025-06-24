// import React, { useState } from "react";
// import FilterDramaIcon from '@mui/icons-material/FilterDrama';
// import GpsFixedIcon from '@mui/icons-material/GpsFixed';
// import ThemeToggle from "./ThemeToggle";

// const Navbar = ({ onSearch, onCurrentLocation }) => {
//   const [searchCity, setsearchCity] = useState('');

//   const handleSearchclick = () => {
//     if (searchCity.trim()) {
//       onSearch(searchCity);
//     }
//   };

//   return (
//     <nav className="
//       flex flex-wrap items-center justify-between gap-4
//       mt-2 px-6 py-3
//       bg-white/30 dark:bg-gray-800/50
//       backdrop-blur-md
//       border border-white/20 dark:border-gray-700/40
//       rounded-2xl shadow-md
//       transition duration-300
//     ">
//       {/* Logo and Title */}
//       <div className="flex items-center gap-3 flex-shrink-0">
//         <FilterDramaIcon className="text-blue-500 dark:text-blue-300" fontSize="large" />
//         <span className="font-extrabold text-3xl tracking-tight text-gray-900 dark:text-white select-none">
//           ForecastHub
//         </span>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center gap-3 flex-grow max-w-xl w-full md:w-auto">
//         <input
//           type="search"
//           className="
//             bg-white/80 dark:bg-gray-700/80
//             rounded-full
//             px-5 py-2.5
//             w-full
//             text-gray-900 dark:text-white
//             placeholder-gray-500 dark:placeholder-gray-300
//             outline-none
//             focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
//             transition
//           "
//           placeholder="Search City"
//           value={searchCity}
//           onChange={(e) => setsearchCity(e.target.value)}
//           onKeyDown={(e) => { if (e.key === 'Enter') handleSearchclick(); }}
//           aria-label="Search city"
//         />
//         <button
//           onClick={handleSearchclick}
//           className="
//             bg-[#4B5550] dark:bg-gray-700
//             hover:bg-[#364139] dark:hover:bg-gray-600
//             text-white
//             font-semibold
//             rounded-full
//             px-6 py-2.5
//             shadow-md
//             transition
//             focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
//             select-none
//           "
//           aria-label="Search city"
//           type="button"
//         >
//           Search
//         </button>
//       </div>

//       {/* Right Side: Theme Toggle + Current Location */}
//       <div className="flex items-center gap-4 flex-shrink-0">
//         <ThemeToggle />
//         <button
//           onClick={onCurrentLocation}
//           className="
//             flex items-center gap-2
//             bg-[#4B5550] dark:bg-gray-700
//             hover:bg-[#364139] dark:hover:bg-gray-600
//             text-white
//             font-semibold
//             rounded-full
//             px-5 py-2.5
//             shadow-md
//             transition
//             focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
//             select-none
//             cursor-pointer
//           "
//           aria-label="Use current location"
//           title="Get weather for current location"
//           type="button"
//         >
//           <GpsFixedIcon className="text-lg" />
//           <span className="text-sm whitespace-nowrap">Current Location</span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ onSearch, onCurrentLocation }) => {
  const [searchCity, setsearchCity] = useState('');

  const handleSearchclick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
    }
  };

  return (
    <nav className="
      flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 sm:gap-4
      mt-2 px-3 sm:px-6 py-2 sm:py-3
      bg-white/30 dark:bg-gray-800/50
      backdrop-blur-md
      border border-white/20 dark:border-gray-700/40
      rounded-2xl shadow-md
      transition duration-300
    ">
      {/* Logo and Title */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 mb-2 sm:mb-0">
        <FilterDramaIcon className="text-blue-500 dark:text-blue-300" fontSize="large" />
        <span className="font-extrabold text-xl sm:text-3xl tracking-tight text-gray-900 dark:text-white select-none">
          ForecastHub
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 sm:gap-3 w-full sm:max-w-xl flex-grow">
        <input
          type="search"
          className="
            bg-white/80 dark:bg-gray-700/80
            rounded-full
            px-4 sm:px-5 py-2 sm:py-2.5
            w-full
            text-gray-900 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-300
            outline-none
            focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
            transition
            text-sm sm:text-base
          "
          placeholder="Search City"
          value={searchCity}
          onChange={(e) => setsearchCity(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSearchclick(); }}
          aria-label="Search city"
        />
        <button
          onClick={handleSearchclick}
          className="
            bg-[#4B5550] dark:bg-gray-700
            hover:bg-[#364139] dark:hover:bg-gray-600
            text-white
            font-semibold
            rounded-full
            px-5 sm:px-6 py-2 sm:py-2.5
            shadow-md
            transition
            focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
            select-none
            text-sm sm:text-base
          "
          aria-label="Search city"
          type="button"
        >
          Search
        </button>
      </div>

      {/* Right Side: Theme Toggle + Current Location */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 mt-2 sm:mt-0">
        <ThemeToggle />
        <button
          onClick={onCurrentLocation}
          className="
            flex items-center gap-1 sm:gap-2
            bg-[#4B5550] dark:bg-gray-700
            hover:bg-[#364139] dark:hover:bg-gray-600
            text-white
            font-semibold
            rounded-full
            px-4 sm:px-5 py-2 sm:py-2.5
            shadow-md
            transition
            focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
            select-none
            cursor-pointer
            text-sm sm:text-base
          "
          aria-label="Use current location"
          title="Get weather for current location"
          type="button"
        >
          <GpsFixedIcon className="text-base sm:text-lg" />
          <span className="whitespace-nowrap">Current Location</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
