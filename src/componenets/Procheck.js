import './Bar.css' ;
import React from 'react'


export default function Procheck() {
  return (
    <>
        <div class="circular">
            <div class="inner"></div>
            <div class="outer"></div>
            <div class="numb">
               0%
            </div>
            <div class="circle">
               <div class="dot">
                  <span></span>
               </div>
               <div class="bar left">
                  <div class="progress"></div>
               </div>
               <div class="bar right">
                  <div class="progress"></div>
               </div>
            </div>
         </div>
        
    </>
  )
}

const numb = document.querySelector(".numb");
            let counter = 0;
            setInterval(()=>{
              if(counter === 100){
                clearInterval();
              }else{
                counter+=1;
                numb.textContent = counter + "%";
              }
            }, 80);