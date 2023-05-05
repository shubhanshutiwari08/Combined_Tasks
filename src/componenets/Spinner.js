import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Spinner() {
    const percentage1 = 80;
  return (
    <div className='w-12'>
                          <CircularProgressbar
                      value={percentage1}
                      text={`${percentage1}%`}
                      styles={buildStyles({
                        pathColor: `#00BFFF`,
                        textSize: '35px',
                        
                        textColor: '#00BFFF',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                        width:'full',
                        outerHeight:5
                     })}
                    />
    </div>
  )
}
