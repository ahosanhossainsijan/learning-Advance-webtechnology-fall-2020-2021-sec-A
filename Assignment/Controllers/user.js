const express 	= require('express');
const session = require('express-session');
const purchaseModel = require('../Models/purchaseModel');
const userModel = require.main.require('./models/userModel');
const bookModel  = require.main.require('./models/bookModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uid'] == null && req.cookies['type'] !=1){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	
		res.render('user/index');
		
});



router.get('/profile',(req,res)=>{
	userModel.getById(req.cookies['uid'],function(result){
		var user = {
			name: result.name,
			username: result.username,
			password: result.password,
			address: result.address,
			contactno: result.contactno
		};
		res.render('user/profile', user);
	});
});

router.get('/allbooks',(req,res)=>{
	bookModel.getAll(function(results){
		res.render('User/allbooks', {books: results});
	});
});
router.get('/bookinfo/:id', (req, res)=>{
	bookModel.getById(req.params.id,function(result){
		var book = {
			bookname: result.bookname,
		    authorname: result.authorname,
			category: result.category,
			price: result.price,
			image: result.image,
			availability: result.availability
		};
		res.render('User/bookinfo', book);
	});
});

router.post('/bookinfo/:id', (req, res)=>{
	var date = new Date().toISOString().slice(0,10);
	var purchase = {
		bid : req.params.id,
		uid : req.cookies['uid'],
		date : date,
		amount: req.body.price,
		paymentmethod : req.body.paymethod,
	};
	purchaseModel.insert(purchase,function(status){
		
		if(status){
			res.redirect('/user/purchasehistory');
		}
	});
});

router.get('/purchasehistory',(req,res)=>{
	purchaseModel.getAll(req.cookies['uid'],function(results){
		res.render('user/history',{purchase : results});
	});
});

router.get('/edit',(req,res)=>{
	userModel.getById(req.cookies['uid'],function(result){
		var user = {
			name: result.name,
			username: result.username,
			password: result.password,
			address: result.address,
			contactno: result.contactno
		};
		res.render('user/edit', user);
	});
});

router.post('/edit',(req,res)=>{
	var user = {
		id:req.cookies["uid"],
		name: req.body.name,
		username: req.body.username,
		password: req.body.password,
		address: req.body.address,
		contactno: req.body.contactno
	};
	userModel.update(user,function(status){
		if(status){
			res.redirect('/user/profile');
		}
		else{
			res.render('user/edit', user);
		}
	});
});




module.exports = router;