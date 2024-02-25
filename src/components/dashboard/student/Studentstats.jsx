"use client"
// import { Doughnut } from "react-chartjs-2";


import { Chart as ChartJS, ArcElement,  Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement,  Legend);
 
const StudentStats=()=>{

     const data = {
       
        datasets: [
          {
            
            data: [12, 19],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            
            ],
            borderWidth: 1,
            
          },
        ],
        labels: ['Absent', 'Present'],
        label: '# of Votes',
      };
      const options = {
        plugins: {
          legend: {
            position: 'bottom',
            rtl : true,
            labels: {
              usepointstyle: true,
              pointstyle: 'circle',
              padding: 20,
            }
          }
        },
    }
    return(
        <>
      
      
        <div className='sm:h-80 sm:w-80 h-64 w-64 mt-0     mb-12 '>
        <Doughnut className='' data={data}  options={options} />
        </div>
      
       
       
        </>
    )

}
export default StudentStats;