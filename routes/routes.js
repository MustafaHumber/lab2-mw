const express = require('express');
const router = express.Router();



router.get('/name', (req, res) => {
  res.send('Mustafa');
});

router.get('/greeting', (req, res) => {
  res.send('Hello, Mustafa, Student Number: n01574623');
});

router.get('/add/:x/:y', (req, res) => {
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  res.send(JSON.stringify(x + y));
 
});


router.get('/calculate/:x/:y/:z', (req, res) => {
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  const z = req.params.z;

  
  switch (z) {
    case '+':
      res.send(JSON.stringify(x + y))
      break;
    case '-':
      res.send(JSON.stringify(x - y))
      break;
    case '*':
      res.send(JSON.stringify(x * y))
      break;
    case '/':
      res.send(JSON.stringify(x / y))
      break;
    case '**':
      res.send(JSON.stringify(x ** y))
      break;
    default:
      res.send("incorrrect")
      break;
  }

  
});

module.exports = router;
