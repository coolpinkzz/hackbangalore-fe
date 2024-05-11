"use client"
import {useEffect} from "react"
import {Chart} from "chart.js";

export default function LineChart() {
    useEffect(() => {
        var ctx = document.getElementById('lineChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan 2024', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'March 2024', 'April 2024', 'May 2024'],
                datasets: [{
                    label: 'Monthly User Visit',
                    data: [1000, 2000, 3000, 2500, 4000, 4500, 5500],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        display: true,
                    }],
                }
            },

        });
    }, [])


    return (
        <div>
            {/* Doughnut chart */}
            <div className="">
                <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
                    <canvas width={600} height={350} id='lineChart'></canvas>
                </div>
            </div>
        </div>
    )
}
