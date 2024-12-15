import { useState } from 'react';
import { Card, Typography } from '@mui/material';
import { PieCharts } from '@mui/x-charts';
import Dashboard from './Dashboard';
import Projects from './Projects';

export default function Matter() {
    
    return (
        <div
        style={{
            height: "100vh",
            width: "80%",
            margin: "auto",
            textAlign:"center",
            backgroundColor: "white",
            color: "black"
        }}
    >
       <Card>
        <div    
            style={{
                padding:"10px",
                
            }}
            >
            <Typography variant='h4'>About me.</Typography>
            <Typography variant='body'>Im a Software Engineer.</Typography>
        </div>
       </Card>
       <Card>
        <Typography variant='h4'>Career Pulse</Typography>
        <Typography variant='body'> I have a dashboard that showcase my career highlights below</Typography>
        <Dashboard></Dashboard>
       </Card>
       <Card>
        <Projects></Projects>
       </Card>

    </div>
    )
}