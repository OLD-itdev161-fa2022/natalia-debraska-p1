import express from 'express';
import connectDatabase from './config/db';

//Initialize express application
const app = express();

//Connect database
connectDatabase();

//API endpoints
app.get('/', (req,res) =>
    res.send('Project 1 - http get request sent to root api endpoint')
);

//Connection listener
app.listen(3000, () => console.log('Project 1 - Express server running on port 3000'));