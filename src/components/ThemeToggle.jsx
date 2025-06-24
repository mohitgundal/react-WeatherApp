// import React, { useEffect, useState } from "react";

// const ThemeToggle = () => {
//   const getInitialTheme = () => {
//     if (typeof window !== "undefined" && window.localStorage) {
//       const storedPrefs = window.localStorage.getItem("theme");
//       if (typeof storedPrefs === "string") {
//         return storedPrefs === "dark";
//       }
//       return window.matchMedia("(prefers-color-scheme: dark)").matches;
//     }
//     return false;
//   };

//   const [dark, setDark] = useState(getInitialTheme);

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//       window.localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       window.localStorage.setItem("theme", "light");
//     }
//   }, [dark]);

//   return (
//     <button
//       onClick={() => setDark((d) => !d)}
//       className="transition-colors duration-300 p-2 rounded-full bg-white/40 dark:bg-gray-800/60 backdrop-blur-md border border-white/30 dark:border-gray-700/40 text-gray-800 dark:text-yellow-300 shadow hover:scale-110"
//       aria-label="Toggle dark mode"
//       aria-pressed={dark}
//       title="Toggle dark/light mode"
//     >
//       {dark ? (
//         <span role="img" aria-label="moon">🌙</span>
//       ) : (
//         <span role="img" aria-label="sun">🌞</span>
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;

import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("theme");
      if (typeof storedPrefs === "string") {
        return storedPrefs === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="
        transition-all duration-300
        p-2 sm:p-3
        rounded-full
        bg-white/40 dark:bg-gray-800/60
        backdrop-blur-md
        border border-white/30 dark:border-gray-700/40
        text-gray-800 dark:text-yellow-300
        shadow
        hover:scale-110
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:focus-visible:ring-yellow-300
      "
      aria-label="Toggle dark mode"
      aria-pressed={dark}
      title="Toggle dark/light mode"
    >
      <span
        role="img"
        aria-label={dark ? "moon" : "sun"}
        className="text-xl sm:text-2xl"
      >
        {dark ? "🌙" : "🌞"}
      </span>
    </button>
  );
};

export default ThemeToggle;
