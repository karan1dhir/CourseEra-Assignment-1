const express = require('express');
const bodyparser = require('body-parser');
const leaderRouter = express.Router();
leaderRouter.use(bodyparser.json());
leaderRouter.route('/').all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  });
  leaderRouter.get('/',(req,res,next) => {
    res.end('Will send all the leaders to you!');
});

leaderRouter.post('/', (req, res, next) => {
 res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
});

leaderRouter.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /leaders');
});
 
leaderRouter.delete('/', (req, res, next) => {
    res.end('Deleting all leaders');
});
leaderRouter.get('/:leaderId', (req,res,next) => {
    res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
});

leaderRouter.post('/:leaderId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leader/'+ req.params.leaderId);
});

leaderRouter.put('/:leaderId', (req, res, next) => {
  res.write('Updating the leader: ' + req.params.leaderId + '\n');
  res.end('Will update the leader: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

leaderRouter.delete('/:leaderId', (req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderId);
});
module.exports = leaderRouter;