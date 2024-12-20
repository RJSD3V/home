import {BarChart, XAxis, YAxis, Tooltip, Legend, Bar,CartesianGrid} from 'recharts';

let data = [
    {
        "name": "Snowflake",
        "exp": 3.2
    },

    {
        "name": "Python",
        "exp": 4.5
    },
    {
        "name": "Machine Learning",
        "exp": 3
    },
    {
        "name": "dbt",
        "exp": 2.2
    },
    {
        "name": "Data Visualizations",
        "exp": 2
    },

    {
        "name": "NodeJS",
        "exp": 1
    },
    {
        "name": "Web Apps",
        "exp": 2
    },
    {
        "name": "SQL",
        "exp": 5
    },
    {
        "name": "Git",
        "exp": 5
    }
]


export default function SkillBar(){
    return (

                    <BarChart width={600} height={500} data={data} layout='vertical' margin={{top: 5, right: 30, left: 60, bottom: 30}}>
                    <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" label={{value:"Experience (Years)",position:"bottom"}} />
                        <YAxis type="category" dataKey="name"/>
                        <Tooltip />
                        <Bar dataKey="exp" stackId="a" fill="#49416D"  />
                    </BarChart>

    );
}