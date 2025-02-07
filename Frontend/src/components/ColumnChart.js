// import React, { useEffect, useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
// import axios from "axios";

// function ColumnChart({ month }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/columnChart", { params: { month } }).then((response)=>{
//       const formattedData = Object.entries(response.data).map(([range, count]) => ({
//         range,
//         count,
//       }));
//       setData(formattedData);
//     }).catch((error)=>{console.log(error)})
//   }, [month]);



//   return (
//     <div>
//       <h2 className="stat-heading">Bar Chart</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="range" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="count" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default ColumnChart;



import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import axios from "axios";
import styles from "./ColumnChart.module.css"; // Importing module CSS

function ColumnChart({ month }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/columnChart", { params: { month } }).then((response)=>{
      const formattedData = Object.entries(response.data).map(([range, count]) => ({
        range,
        count,
      }));
      setData(formattedData);
    }).catch((error)=>{console.log(error)})
  }, [month]);

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartHeading}>Bar Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ColumnChart;

