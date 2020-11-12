const express 	= require('express');
const userModel = require.main.require('./models/jobModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	res.render('ehome/index', {name: req.cookies['uname']});
});


router.get('/joblist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('ehome/joblist', {jobs: results});
	});

})

module.exports = router;