const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const bookModel  = require.main.require('./models/bookModel');
const purchaseModel  = require.main.require('./models/purchaseModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uid'] == null && req.cookies['type'] !=0){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	
		res.render('Admin/index');
			
});

router.get('/profile',(req,res)=>{
	console.log(req.cookies['uid']);
	userModel.getById(req.cookies['uid'],function(result){
		var user = {
			name: result.name,
			username: result.username,
			password: result.password,
			address: result.address,
			contactno: result.contactno
		};
		res.render('admin/profile', user);
	});
});

router.get('/purchasehistory',(req,res)=>{
	purchaseModel.getAll(function(results){
		res.render('Admin/history',{purchase : results});
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
		res.render('admin/edit', user);
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
			res.redirect('/admin/profile');
		}
		else{
			res.render('Admin/edit', user);
		}
	});
});

router.get('/addnewadmin', (req, res)=>{
	res.render('admin/addnewadmin');
});

router.post('/addnewadmin',(req,res)=>{
	var user = {
		name: req.body.name,
		username: req.body.username,
		password: req.body.password,
		address: req.body.address,
		contactno: req.body.contactno,
		type: 0
	};
	userModel.insert(user,function(status){
		if(status){
			res.redirect('/admin/allusers');
		}else{
			res.render('/admin/addnewadmin',user);
		}
	});
});

router.get('/allusers',(req,res)=>{
	userModel.getAll(function(results){
		res.render('admin/allusers', {users: results});
	});
});

router.get('/deleteuser/:id', (req, res)=>{
	userModel.getById(req.params.id,function(result){
		var user = {
			name: result.name,
			username: result.username,
			password: result.password,
			address: result.address,
			contactno: result.contactno
		};
		res.render('admin/deleteuser', user);
	});
});

router.post('/deleteuser/:id', (req, res)=>{
	userModel.delete(req.params.id,function(status){
		if(status){
			res.redirect('/admin/allusers');
		}
	});
});

 router.get('/allbooks',(req,res)=>{
	bookModel.getAll(function(results){
		res.render('admin/allbooks', {books: results});
	});
});

router.get('/addnewbook',(req,res)=>{
	res.render('admin/addnewbook');
});

router.post('/addnewbook',(req,res)=>{
	var book = {
		bookname: req.body.bookname,
		authorname: req.body.authorname,
		category: req.body.category,
		price: req.body.price,
		image: req.body.image,
		availability: req.body.availability
	};
	bookModel.insert(book,function(status){
		if(status){
			res.redirect('/admin/allbooks');
		}else{
			res.render('/admin/addnewbook',books);
		}
	});
});

router.get('/deletebook/:id', (req, res)=>{
	bookModel.delete(req.params.id,function(status){
		if(status){
			res.redirect('/admin/allbooks');
		}
	});
});

router.get('/editbook/:id', (req, res)=>{
	bookModel.getById(req.params.id,function(result){
		var book = {
			id:req.params.id,
			bookname: result.bookname,
		    authorname: result.authorname,
			category: result.category,
			price: result.price,
			image: result.image,
			availability: result.availability
		};
		res.render('admin/editbook', book);
	});
});

router.post('/editbook/:id',(req,res)=>{
	var book = {
			id:req.params.id,
			bookname: req.body.bookname,
		    authorname: req.body.authorname,
			category: req.body.category,
			price: req.body.price,
			image: req.body.image,
			availability: req.body.availability
	};
	bookModel.update(book,function(status){
		if(status){
			res.redirect('/admin/allbooks');
		}
		else{
			res.render('Admin/editbook', book);
		}
	});
});

router.post('/getBook',(req,res)=>{
	var book = {
		see : req.body.see,
	};
	bookModel.getBookbyCategory(book,function(results){
		if(results!=null){
			res.json({books:results});
		}else{
			res.json({books:false});
		}
	});
});

module.exports = router;