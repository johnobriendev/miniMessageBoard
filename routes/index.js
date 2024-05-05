var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/adam', function(req, res, next) {
  res.send('This is a page for Adam');
});

router.get('/new',function(req,res){
  res.render('form', {title: 'form'});
});

router.post('/',function(req,res){
  messages.push({text: req.body.usermessage, user: req.body.username, added: new Date()})
  res.redirect('/');
});

module.exports = router;
