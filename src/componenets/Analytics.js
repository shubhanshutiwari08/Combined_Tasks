import React from 'react'
import{
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import {Bar} from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

export default function Analytics() {
 const data ={
    labels:['Mon' , 'Tue','Wed'],
    datasets:[
        {
            label:'369',
            data:[3,6,9],
            backgroundColor:'#7F00FF',
            borderColor:'black',
            borderWidth:1,
            width:1,
        },
        {
            label:'333',
            data:[3,3,2],
            backgroundColor:'#CCCCFF',
            borderColor:'black',
            borderWidth:1,
        }

    ]
 }  
 const options ={
    
 } 




  return (
    <div>
      <h1>Hello</h1>
      <div>
        <Bar 
            data = {data}
            options={{options}}    
        ></Bar>
      </div>
    </div>
  )
}

