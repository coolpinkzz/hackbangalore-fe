"use client"
import {useEffect} from "react"
import {Chart} from "chart.js";
import {Text} from "@chakra-ui/react";

export default function PieChart() {
    useEffect(() => {
        var ctx = document.getElementById('pieChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Seed Funding',
                    'Debt Funding',
                    'Series A',
                    'Series B',
                ],
                datasets: [{
                    label: 'Count of Investment Type in USD',
                    data: [300, 50, 100, 30],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        "rgb(75, 192, 192)",
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
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
                    <canvas width={600} height={350} id='pieChart'></canvas>
                    <Text color="gray" className="text-center">Count of Investment Type in USD</Text>
                </div>
            </div>
        </div>
    )
}
