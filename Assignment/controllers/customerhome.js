const express 	= require('express');
//const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

// router.get('*',  (req, res, next)=>{
// 	if(req.cookies['uname'] == null){
// 		res.redirect('/login');
// 	}else{
// 		next();
// 	}
// });

router.get('/', (req, res)=>{
	res.render('customerhome/index', {name: 'Sijan'});
});
//req.cookies['uname']

// router.get('/userlist', (req, res)=>{

// 	userModel.getAll(function(results){
// 		res.render('ahome/userlist', {users: results});
// 	});

// });

// router.post('/search',(req,res)=>{
// 	var user = {
// 		search : req.body.search,
// 		searchby: req.body.searchby
// 	};
// 	userModel.search(user, function(results){
// 		if(results){
// 			res.json({user:results});
// 		}else{
// 			res.json({user:'error'});
// 		}
// 	});
// });

module.exports = router;