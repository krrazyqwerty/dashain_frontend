// // import { useEffect, useState } from "react";
// // import api from "../utils/api";
// // import { Bar, Line } from "chart.js"


export default function Dashboard() {

  return (
    <div className="text-center text-5xl min-h-screen m-1 bg-gradient-to-r from-purple-300 to-blue-300 font-mono font-bold">
      <h1 >
        This is a DashBoard
      </h1>
    </div>
  )

//   // const [dashBoardData, setDashBoardData] = useState(null);
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await api.get('/dashboard/data');
//   //       setDashBoardData(response.data);
//   //       setLoading(false);
//   //     } catch (error) {
//   //       console.error('Error fetching dashboard data:', error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   // const barChartOptions = {
//   //   labels: dashBoardData.barChartLabels,
//   //   datasets: [{
//   //     label: 'Bar Chart Dataset',
//   //     data: dashBoardData.barChartData,
//   //     backgroundColor: [
//   //       'rgba(255, 99, 132, 0.2)',
//   //       'rgba(54, 162, 235, 0.2)',
//   //       'rgba(255, 206, 86, 0.2)',
//   //       'rgba(75, 192, 192, 0.2)',
//   //       'rgba(153, 102, 255, 0.2)',
//   //       'rgba(255, 159, 64, 0.2)',
//   //     ],
//   //     borderColor: [
//   //       'rgba(255, 99, 132, 1)',
//   //       'rgba(54, 162, 235, 1)',
//   //       'rgba(255, 206, 86, 1)',
//   //       'rgba(75, 192, 192, 1)',
//   //       'rgba(153, 102, 255, 1)',
//   //       'rgba(255, 159, 64, 1)',
//   //     ],
//   //     borderWidth: 1,
//   //   }],
//   // };

//   // const lineChartOptions = {
//   //   labels: dashBoardData.lineChartLabels,
//   //   datasets: [{
//   //     label: 'Line Chart Dataset',
//   //     data: dashBoardData.lineChartData,
//   //     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//   //     borderColor: 'rgba(255, 99, 132, 1)',
//   //     borderWidth: 1,
//   //   }
//   // ],
//   // };

//   // return (
//   //   <div>
//   //     <h1>Dashboard</h1>
//   //     <div>
//   //       <Bar options={barChartOptions} />
//   //     </div>
//   //     <div>
//   //       <Line options={lineChartOptions} />
//   //     </div>
//   //   </div>
//   // );
}





// {/* tried and refused to work project*/}

// import { useEffect, useState } from "react"; 
// import api from "../utils/api"; 
// import { Bar } from "chart.js"; 

// export default function Dashboard() {
//   const [weatherData, setWeatherData] = useState(null); // State for weather data
//   const [loading, setLoading] = useState(true); // State for loading status

//   useEffect(() => {
//     const fetchWeatherData = async () => { // Fetch weather data
//       try {
//         const response = await api.get('https://api.openweathermap.org/data/2.5/onecall', {
//           params: {
//             lat: 27.7172, // Latitude for Kathmandu
//             lon: 85.324, // Longitude for Kathmandu
//             exclude: 'current,minutely,hourly,alerts',
//             units: 'metric',
//             appid: '7b7d5ca32d9cca6d96ff668d3b1f319a' // yesko lagi feri arkai jhanjhat
//           }
//         });
//         setWeatherData(response.data.daily); // Set daily weather data
//         setLoading(false); // Update loading status
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     fetchWeatherData(); // Call the fetch function
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Loading state
//   }

//   // Prepare data for charts
//   const barChartOptions = {
//     labels: weatherData.map(day => new Date(day.dt * 1000).toLocaleDateString()), // Dates for the past 7 days
//     datasets: [{
//       label: 'Temperature (°C)',
//       data: weatherData.map(day => day.temp.day), // Day temperatures
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 1,
//     }],
//   };

//   return (
//     <div className="min-h-screen m-1 bg-gradient-to-r from-purple-300 to-blue-300 font-mono font-bold">
//       <h1>This is a DashBoard</h1>
//       <div>
//         <Bar options={barChartOptions} /> {/* Bar chart for temperature */}
//       </div>
//     </div>
//   );
// }
// */}