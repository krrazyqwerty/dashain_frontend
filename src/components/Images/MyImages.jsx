// // export default function MyImages(){
// // return(

// //     <div>        
// //         <h1>
// //             List of Images uploaded by me
// //         </h1>
// //     </div>
// // )

// // }


// import React from 'react';

// const MyPhotos = () => {
//   const photos = [
//     {
//       id: 1,
//       src: 'https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732688506/uploads/ktpjpexdxs0bsg7okwyr.jpg',
//       user: 'John Doe',
//       date: '11/27/2024',
//       likes: 1,
//     },
//     {
//       id: 2,
//       src: 'https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732000305/uploads/rwyssxl1jlfdbqxanxnq.jpg',
//       user: 'Jane Smith',
//       date: '11/19/2024',
//       likes: 2,
//     },
//     {
//       id: 3,
//       src: 'https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732688506/uploads/sample-image-1.jpg',
//       user: 'Alice Johnson',
//       date: '11/15/2024',
//       likes: 3,
//     },
//     {
//       id: 4,
//       src: 'https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732688506/uploads/sample-image-2.jpg',
//       user: 'Bob Brown',
//       date: '11/10/2024',
//       likes: 4,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {photos.map(photo => (
//         <div key={photo.id} className="group relative bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
//           <button className="absolute top-3 right-3 z-30 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600">
//             {/* Trash Icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 w-4 h-4">
//               <path d="M3 6h18"></path>
//               <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
//               <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
//               <line x1="10" x2="10" y1="11" y2="17"></line>
//               <line x1="14" x2="14" y1="11" y2="17"></line>
//             </svg>
//           </button>
//           <div className="relative aspect-[4/3]">
//             <img src={photo.src} alt={`Photo by ${photo.user}`} className="w-full h-full object-cover" />
//             <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
//               <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20">
//                       <img src="https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732077245/profile_pictures/hfazezvm79htj5bdl7if.jpg" alt={photo.user} className="w-full h-full object-cover" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-sm">{photo.user}</p>
//                       <p className="text-xs text-gray-500">{photo.date}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <button className="transform transition hover:scale-110">
//                       {/* Heart Icon */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-5 h-5 fill-primary text-primary">
//                         <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//                       </svg>
//                     </button>
//                     <span className="text-sm text-gray-700">{photo.likes} Likes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyPhotos;
