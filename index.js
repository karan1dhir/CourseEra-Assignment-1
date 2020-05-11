const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyparser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter')
const hostname = 'localhost';
const port = 3000;
const app = express();


app.use(morgan('dev'));
app.use(bodyparser.json());
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);
//app.use(express.static(__dirname+'/public'));
/*app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>This is Express Server</h1></body></html>')
})*/
const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`Server running at https://${hostname}:${port}`);
})