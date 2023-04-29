// src/components/Chart.jsx

import React, { useState, useEffect } from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";


const pdata = [
	{
		name: 'MongoDb',
		student: 11,
		fees: 120
	},
	{
		name: 'Javascript',
		student: 15,
		fees: 12
	},
	{
		name: 'PHP',
		student: 5,
		fees: 10
	},
	{
		name: 'Java',
		student: 10,
		fees: 5
	},
	{
		name: 'C#',
		student: 9,
		fees: 4
	},
	{
		name: 'C++',
		student: 10,
		fees: 8
	},
]; // Sample chart data

function Chart() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
        //  fetch(`http://localhost:8000/sensor`)
        //          .then(response => response.json())
        //          .then((usefulData) => {
        //            console.log(usefulData);
        //            setLoading(false);
        //            setData(usefulData);
        //          })
        //          .catch((e) => {
        //            console.error(`An error occurred: ${e}`)
        //          });
        setLoading(false);
        setData(pdata);
     }, []);
   return (
       <>
           <h1 className="text-heading">
               
           </h1>
           <ResponsiveContainer width={700} height={300}>
               <LineChart data={data} margin={{ right: 300 }}>
                   <CartesianGrid />
                   <XAxis dataKey="name" interval={'preserveStartEnd'} />
                   <YAxis />
                   <Legend />
                   <Tooltip />
                   <Line dataKey="student" stroke="red" activeDot={{ r: 8 }} />
                   <Line dataKey="fees" stroke="blue" activeDot={{ r: 8 }} />
               </LineChart>
           </ResponsiveContainer>
       </>
   );
}

export default Chart;