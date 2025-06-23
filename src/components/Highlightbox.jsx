// // import IconButton from "@mui/material/IconButton";
// import React from "react";

// const Highlightbox = ({ title, value, Icon }) => {
//     return (
//         <div style={{
//             backgroundColor: '#374151',
//             color: 'white',
//             padding: '1rem',
//             borderRadius: '0.5rem',
//             width: '180px',
//             height: '80px'
//         }}>

//             <div>
//                 <div style={{ fontSize: '18px' }}>{ title}</div>
//                 <div style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                 }}>
//                     <Icon style={{ fontSize: '30px' }} />
//                     <p style={{ fontSize: '30px' }}>{ value}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Highlightbox;


// import React from "react";

// // const Highlightbox = ({ title, value, Icon }) => {
// //     return (
// //         <div className="bg-gray-800 text-white p-4 rounded-md w-44 h-20 flex flex-col justify-between">
// //             <div>
// //                 <div className="text-lg">{title}</div>
// //                 <div className="flex items-center justify-between">
// //                     <Icon className="text-2xl" />
// //                     <p className="text-2xl">{value}</p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// const Highlightbox = ({ title, value, Icon }) => {
//     return (
//         <div className="bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center justify-between min-h-[110px] transition hover:shadow-xl">
//             <div className="flex items-center gap-2 mb-2">
//                 <Icon className="text-3xl" />
//                 <span className="text-lg font-semibold">{title}</span>
//             </div>
//             <div className="text-2xl font-bold">{value}</div>
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
            rounded-xl shadow p-6
            flex flex-col items-center justify-between min-h-[110px]
            transition duration-300 hover:shadow-xl
        ">
            <div className="flex items-center gap-2 mb-2">
                <Icon className="text-3xl text-blue-500 dark:text-blue-300" aria-label={title} />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{title}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
        </div>
    );
};

export default Highlightbox;
