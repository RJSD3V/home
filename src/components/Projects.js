import { useState } from 'react';
import { Card, Typography } from '@mui/material';

export default function Projects() {
    return (
        <div 
            style={{
                display: "grid",
                grid:"150px / auto auto auto",
                
            }}
        >
        <Typography variant='h4'>Projects</Typography>
           <Card >
            <Typography variant='h5'>Project 1</Typography>
            <Typography variant='body'>This is a project</Typography>
           </Card>
           <Card >
            <Typography variant='h5'>Project 1</Typography>
            <Typography variant='body'>This is a project</Typography>
           </Card>
           <Card >
            <Typography variant='h5'>Project 1</Typography>
            <Typography variant='body'>This is a project</Typography>
           </Card>
           <Card >
            <Typography variant='h5'>Project 1</Typography>
            <Typography variant='body'>This is a project</Typography>
           </Card>
           <Card >
            <Typography variant='h5'>Project 1</Typography>
            <Typography variant='body'>This is a project</Typography>
           </Card>
           <Card >
            <Typography variant='h5'>Project 1</Typography>
            <Typography variant='body'>This is a project</Typography>
           </Card>
        </div>
    );

}