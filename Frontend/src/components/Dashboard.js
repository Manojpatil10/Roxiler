import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import Insights from "./Insights";
import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";
import styles from "./Dashboard.module.css";
import axios from "axios";

function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState("01");
  const [isInserted, setIsInserted] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/initialize")
      .then((success) => {
        setIsInserted(success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      {isInserted ? (
        <>
          <h1 className={styles.heading}>Financial Overview</h1>
          <main className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className={styles.monthSelectorContainer}>
                    <label>Select Month:</label>
                    <select
                      className={styles.selectDropdown}
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                      {[
                        "01",
                        "02",
                        "03",
                        "04",
                        "05",
                        "06",
                        "07",
                        "08",
                        "09",
                        "10",
                        "11",
                        "12",
                      ].map((m) => (
                        <option key={m} value={m}>
                          {new Date(0, m - 1).toLocaleString("default", {
                            month: "long",
                          })}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <Insights month={selectedMonth} />
                </div>
                <div className="col-md-6 mb-4">
                  <ColumnChart month={selectedMonth} />
                </div>
                <div className="col-md-6 mb-4">
                  <PieChart month={selectedMonth} />
                </div>
                <div className="col-12 mt-3">
                  <DataTable month={selectedMonth} />
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <div className={styles.loading}>Please wait, data is loading...</div>
      )}
    </div>
  );
}

export default Dashboard;




// import React, { useEffect, useState } from "react";
// import DataTable from "./DataTable";
// import Insights from "./Insights";
// import ColumnChart from "./ColumnChart";
// import PieChart from "./PieChart"
// import axios from "axios";

// function Dashboard() {
//   const [selectedMonth, setSelectedMonth] = useState("01");
//   const [isLoaded, setIsLoaded] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/initialize")
//       .then((response) => {
//         console.log(response)
//         setIsLoaded(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div className="dashboard">
//       {isLoaded ? (
//         <>
//           <h1 className="title">Financial Overview</h1>
//           <main className="content">
//             <div className="wrapper">
//               <div className="row py-5">
//                 <div className="col-md-6 mb-4">
//                   <label>Select Month: </label>
//                   <select
//                     className="form-control"
//                     value={selectedMonth}
//                     onChange={(e) => setSelectedMonth(e.target.value)}
//                   >
//                     {[
//                       "01",
//                       "02",
//                       "03",
//                       "04",
//                       "05",
//                       "06",
//                       "07",
//                       "08",
//                       "09",
//                       "10",
//                       "11",
//                       "12",
//                     ].map((m) => (
//                       <option key={m} value={m}>
//                         {new Date(0, parseInt(m) - 1).toLocaleString("default", {
//                           month: "long",
//                         })}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="col-md-6 mb-4">
//                   <Insights selectedMonth={selectedMonth} />
//                 </div>
//                 <div className="col-md-6 mb-4">
//                   <ColumnChart selectedMonth={selectedMonth} />
//                 </div>
//                 <div className="col-md-6 mb-4">
//                   <PieChart selectedMonth={selectedMonth} />
//                 </div>
//                 <div className="col-12">
//                   <DataTable selectedMonth={selectedMonth} />
//                 </div>
//               </div>
//             </div>
//           </main>
//         </>
//       ) : (
//         <div className="loading">Please wait, data is loading...</div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;
