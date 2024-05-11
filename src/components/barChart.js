"use client"
import React, {useEffect} from "react";
import Chart from "chart.js";
import {Text} from "@chakra-ui/react";

export default function BarChart() {
    useEffect(() => {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [
                    {
                        label: "Number of funding over year",
                        data: [5000, 3000, 2000, 10000, 4000, 1000],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
    }, []);
    return (
        <div className="">
            <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
                <canvas width={600} height={350} id="myCanvas" ></canvas>
                <Text color="gray" className="text-center">Number of funding over year</Text>
            </div>
        </div>
    );
}
