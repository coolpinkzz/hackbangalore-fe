import BarChart from '@/components/barChart'
import Doughnut from '@/components/doughnut'
import LineChart from '@/components/lineChart'
import PieChart from '@/components/pieChart'
import React from 'react'

export default function ViewAnalytics() {
    return (
        <div className='w-[95%] mx-auto mt-10'>
            <div className='flex justify-center my-10 gap-10 '>
                <PieChart />
                <BarChart />
            </div>
            <div className='flex justify-center gap-10 '>
                <Doughnut />
                <LineChart />
            </div>
        </div>
    )
}
