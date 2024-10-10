
// 1. create server.mjs file
// 2. npm init -y - creates package.json
// 3. correct package.json
// 4. npm i express - download express
// 5. import express at top of page
// 6. Initialize express into a variable
// 7. Listen to express(app) at the BOTTOM of the page

import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import fs from 'fs';

//Creating template engine

//Initialize express into a variable
const app = express();
const PORT = 3000;

//Creating template engine
app.engine('rtt", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        const rendered = content.toString().replaceAll()

// Middleware
const logReq = function (req,res, next) {
    console.log('Request Received');
    next();
};

app.use(logReq);
app.use((err, req, res, next) => {
});


// Initialize express into a variable
const app = express();
const PORT = 3000;

//Middleware

//Routes - order of routes is most specific --> least specific
//first arg is path - always in quotes
app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1>`);
});

app.get('/test', (req, res)=>{
    res.send(`This is another test route`)
});

app.get('/user/:id', (req, res) => {
    //req.params.id
    res.send(`This is another test route`);
});

app.use('/user', userRoutes)


//App.listen should ALWAYS be the last thing in your server
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});



// app.get('/404)
