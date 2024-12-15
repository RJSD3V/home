import { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { PieChart, BarChart } from '@mui/x-charts';

export default function Dashboard() {


    return (
        <div
            className="dash-container"
            style={{
                display:"flex"
            }}
        >
            <PieChart
        series={[
            {
                data: [
                    { id: 0, value: 10, label: 'Python' },
                    { id: 1, value: 15, label: 'Snowflake/SQL' },
                    { id: 2, value: 20, label: 'dbt' },
                    { id: 3, value: 20, label: 'git' },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -45,
                endAngle: 225,
                cx: 150,
                cy: 150,
            },
            ]}
        
            width={600}
            height={350}
/>
<BarChart
        xAxis={[{scaleType:'band', data: ['year 1','year 2','year 3','year 4','year 5']}]}
        series={[{data:[4,3,5,1,2]},{data:[5,1,6,3,1]},{data:[5,2,5,6,3]},{data:[5,2,5,6,2]},{data:[2,2,5,6,3]}]}
            width={600}
            height={350}
/>
   
</div>
    );
}