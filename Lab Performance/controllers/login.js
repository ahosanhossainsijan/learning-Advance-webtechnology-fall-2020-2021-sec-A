const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function(status){
		if(status == 0){
			res.cookie('uname', req.body.username);
			res.redirect('/ahome');
		}
		else if(status == 1){
			res.cookie('uname', req.body.username);
			res.redirect('/ehome');
		}
		else{
			res.redirect('/login');
		}
	});
}); 

module.exports = router;