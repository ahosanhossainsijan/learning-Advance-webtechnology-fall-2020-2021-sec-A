const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('registration/index');
});

router.post('/',(req,res)=>{
    var user=
    {

        name: req.body.name,
        username: req.body.username,
        contactno: req.body.contactno,
        age: req.body.age,
        password: req.body.password,
        type: 1 

    };
    console.log(user);
     userModel.insert(user, function(status){

       if(status){
    
            console.log("Created");
            res.redirect('/login');
            
        }
       else{
              console.log("Error");  
              res.redirect('/registration');
        }
     });
})

module.exports = router;