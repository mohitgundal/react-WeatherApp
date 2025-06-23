// import React, { useState } from "react";
// import FilterDramaIcon from '@mui/icons-material/FilterDrama';
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import GpsFixedIcon from '@mui/icons-material/GpsFixed';
// import ThemeToggle from "./ThemeToggle";

// const Navbar = ({onSearch}) => {
//     const [searchCity, setsearchCity] = useState('')
//     const handleSearchclick = () => {
//         if (searchCity.trim()) {
//             onSearch(searchCity);
//         }
//     };


//     return (
//         <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px", padding: "10px", paddingLeft: "30px", paddingRight: "30px" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
//                 <FilterDramaIcon />
//                 <p style={{ fontWeight: "bold", fontSize: "20px" }}>Weather</p>
//             </div>

//             <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//                 <TextField style={{ backgroundColor: "white", borderRadius: "2rem", width: "22rem" }} placeholder="Search City" variant="outlined" value={searchCity} onChange={(e)=>setsearchCity(e.target.value)} />
//                 <Button
//                     variant="contained"
//                     onClick={handleSearchclick}
//                     style={{ borderRadius: "6px", backgroundColor: "#4B5550" }}>
//                     Search
//                 </Button>
//             </div>

//             <div style={{ marginTop: "1rem", fontSize: "16px", fontWeight: "700", backgroundColor: "#4B5550", height: "35px", width: "150px", color: "white", gap: "2px", borderRadius: "6px", alignItems: "center", display: "flex", justifyContent: "center" }}>
//                 <GpsFixedIcon />
//                 <p style={{ fontSize: "14px" }}>Current Location</p>
//             </div>
//         </nav>
//     )
// };

// export default Navbar;


// import React, { useState } from "react";
// import FilterDramaIcon from '@mui/icons-material/FilterDrama';
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import GpsFixedIcon from '@mui/icons-material/GpsFixed';
// import ThemeToggle from "./ThemeToggle";

// const Navbar = ({ onSearch }) => {
//   const [searchCity, setsearchCity] = useState('');

//   const handleSearchclick = () => {
//     if (searchCity.trim()) {
//       onSearch(searchCity);
//     }
//   };

//   return (
//     <nav className="flex items-center justify-between mt-2 px-8 py-3 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md">
//       {/* Logo and Title */}
//       <div className="flex items-center gap-2">
//         <FilterDramaIcon className="text-blue-500 dark:text-blue-300" fontSize="large" />
//         <span className="font-bold text-2xl tracking-tight text-gray-800 dark:text-white">Weather</span>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center gap-2">
//         <TextField
//           className="bg-white dark:bg-gray-700 rounded-3xl w-72"
//           placeholder="Search City"
//           variant="outlined"
//           value={searchCity}
//           onChange={(e) => setsearchCity(e.target.value)}
//           InputProps={{
//             style: {
//               color: 'black',
//               borderRadius: '2rem',
//               backgroundColor: 'inherit'
//             }
//           }}
//         />
//         <Button
//           variant="contained"
//           onClick={handleSearchclick}
//           style={{ borderRadius: "6px", backgroundColor: "#4B5550" }}
//         >
//           Search
//         </Button>
//       </div>

//       {/* Right Side: Theme Toggle + Current Location */}
//       <div className="flex items-center gap-3">
//         <ThemeToggle />
//         <div className="flex items-center gap-1 font-bold bg-[#4B5550] dark:bg-gray-700 h-9 px-4 text-white rounded-md shadow">
//           <GpsFixedIcon />
//           <span className="text-sm">Current Location</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import FilterDramaIcon from '@mui/icons-material/FilterDrama';
// import GpsFixedIcon from '@mui/icons-material/GpsFixed';
// import ThemeToggle from "./ThemeToggle";

// const Navbar = ({ onSearch }) => {
//   const [searchCity, setsearchCity] = useState('');

//   const handleSearchclick = () => {
//     if (searchCity.trim()) {
//       onSearch(searchCity);
//     }
//   };

//   return (
//     <nav className="flex items-center justify-between mt-2 px-8 py-3
//       bg-white/30 dark:bg-gray-800/50 backdrop-blur-md
//       border border-white/20 dark:border-gray-700/40
//       rounded-xl shadow-md transition duration-300">
//       {/* Logo and Title */}
//       <div className="flex items-center gap-2">
//         <FilterDramaIcon className="text-blue-500 dark:text-blue-300" fontSize="large" />
//         <span className="font-bold text-2xl tracking-tight text-gray-800 dark:text-white">Weather</span>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center gap-2">
//         <input
//           className="bg-white/80 dark:bg-gray-700/80 rounded-3xl px-4 py-2 w-72 outline-none border-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 transition"
//           placeholder="Search City"
//           value={searchCity}
//           onChange={(e) => setsearchCity(e.target.value)}
//         />
//         <button
//           onClick={handleSearchclick}
//           className="rounded-md px-4 py-2 font-semibold bg-[#4B5550] dark:bg-gray-700 text-white hover:bg-[#364139] dark:hover:bg-gray-600 transition"
//         >
//           Search
//         </button>
//       </div>

//       {/* Right Side: Theme Toggle + Current Location */}
//       <div className="flex items-center gap-3">
//         <ThemeToggle />
//         <div className="flex items-center gap-1 font-bold bg-[#4B5550] dark:bg-gray-700 h-9 px-4 text-white rounded-md shadow">
//           <GpsFixedIcon />
//           <span className="text-sm">Current Location</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


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
//     <nav className="flex items-center justify-between mt-2 px-8 py-3
//       bg-white/30 dark:bg-gray-800/50 backdrop-blur-md
//       border border-white/20 dark:border-gray-700/40
//       rounded-xl shadow-md transition duration-300">

//       {/* Logo and Title */}
//       <div className="flex items-center gap-2">
//         <FilterDramaIcon className="text-blue-500 dark:text-blue-300" fontSize="large" />
//         <span className="font-bold text-2xl tracking-tight text-gray-800 dark:text-white">Weather</span>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center gap-2">
//         <input
//           className="bg-white/80 dark:bg-gray-700/80 rounded-3xl px-4 py-2 w-72 outline-none border-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 transition"
//           placeholder="Search City"
//           value={searchCity}
//           onChange={(e) => setsearchCity(e.target.value)}
//           onKeyDown={(e) => { if (e.key === 'Enter') handleSearchclick(); }}
//         />
//         <button
//           onClick={handleSearchclick}
//           className="rounded-md px-4 py-2 font-semibold bg-[#4B5550] dark:bg-gray-700 text-white hover:bg-[#364139] dark:hover:bg-gray-600 transition"
//         >
//           Search
//         </button>
//       </div>

//       {/* Right Side: Theme Toggle + Current Location */}
//       <div className="flex items-center gap-3">
//         <ThemeToggle />
//         <div
//           onClick={onCurrentLocation}
//           onKeyDown={(e) => { if (e.key === 'Enter') onCurrentLocation(); }}
//           role="button"
//           tabIndex={0}
//           className="flex items-center gap-1 font-bold bg-[#4B5550] dark:bg-gray-700 h-9 px-4 text-white rounded-md shadow cursor-pointer select-none"
//           aria-label="Use current location"
//           title="Get weather for current location"
//         >
//           <GpsFixedIcon />
//           <span className="text-sm">Current Location</span>
//         </div>
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
      flex flex-wrap items-center justify-between gap-4
      mt-2 px-6 py-3
      bg-white/30 dark:bg-gray-800/50
      backdrop-blur-md
      border border-white/20 dark:border-gray-700/40
      rounded-2xl shadow-md
      transition duration-300
    ">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <FilterDramaIcon className="text-blue-500 dark:text-blue-300" fontSize="large" />
        <span className="font-extrabold text-3xl tracking-tight text-gray-900 dark:text-white select-none">
          Weather
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-3 flex-grow max-w-xl w-full md:w-auto">
        <input
          type="search"
          className="
            bg-white/80 dark:bg-gray-700/80
            rounded-full
            px-5 py-2.5
            w-full
            text-gray-900 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-300
            outline-none
            focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
            transition
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
            px-6 py-2.5
            shadow-md
            transition
            focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
            select-none
          "
          aria-label="Search city"
          type="button"
        >
          Search
        </button>
      </div>

      {/* Right Side: Theme Toggle + Current Location */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <ThemeToggle />
        <button
          onClick={onCurrentLocation}
          className="
            flex items-center gap-2
            bg-[#4B5550] dark:bg-gray-700
            hover:bg-[#364139] dark:hover:bg-gray-600
            text-white
            font-semibold
            rounded-full
            px-5 py-2.5
            shadow-md
            transition
            focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
            select-none
            cursor-pointer
          "
          aria-label="Use current location"
          title="Get weather for current location"
          type="button"
        >
          <GpsFixedIcon className="text-lg" />
          <span className="text-sm whitespace-nowrap">Current Location</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
