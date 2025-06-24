// import React from "react";

// const Highlightbox = ({ title, value, Icon }) => {
//     return (
//         <div className="
//             bg-white/30 dark:bg-gray-800/50
//             backdrop-blur-md
//             border border-white/20 dark:border-gray-700/40
//             rounded-xl shadow p-6
//             flex flex-col items-center justify-between min-h-[110px]
//             transition duration-300 hover:shadow-xl
//         ">
//             <div className="flex items-center gap-2 mb-2">
//                 <Icon className="text-3xl text-blue-500 dark:text-blue-300" aria-label={title} />
//                 <span className="text-lg font-semibold text-gray-900 dark:text-white">{title}</span>
//             </div>
//             <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
//         </div>
//     );
// };

// export default Highlightbox;


import React from "react";

const Highlightbox = ({ title, value, Icon }) => {
    return (
        <div className="
            bg-white/30 dark:bg-gray-800/50
            backdrop-blur-md
            border border-white/20 dark:border-gray-700/40
            rounded-xl shadow
            p-4 sm:p-6
            flex flex-col items-center justify-between
            min-h-[90px] sm:min-h-[110px]
            transition duration-300 hover:shadow-xl
        ">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <Icon className="text-2xl sm:text-3xl text-blue-500 dark:text-blue-300" aria-label={title} />
                <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{title}</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
        </div>
    );
};

export default Highlightbox;
