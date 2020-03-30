var router = require('express').Router();

router.get('/home', (req, res)=>{
    res.render('index/home');
})

module.exports = router;