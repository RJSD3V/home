import {ResponsiveContainer,PieChart, Pie,Cell, Tooltip, Legend} from 'recharts';

export default function SkillPie({name,role_map, pie_colors}) {
    return (
  
                    <PieChart width={600} height={500} >
                        <Tooltip />
                        <Legend />
                        <Pie data={role_map} 
                        dataKey="exp" 
                        nameKey={name} 
                         cx="50%"
                         cy="50%"
                        fill='#55828B' 
                        label>
                        {role_map.map((entry, index) => <Cell fill={pie_colors[index % pie_colors.length]}/>)}
                        </Pie>
                        
                    </PieChart>
    )
}