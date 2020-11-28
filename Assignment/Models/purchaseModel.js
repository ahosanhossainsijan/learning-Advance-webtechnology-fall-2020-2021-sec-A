const db = require('./db');

module.exports= {
	insert: function(purchase, callback){
        var sql = "INSERT INTO purchase(bid, uid, purchasedate, paymentmethod, amount) VALUES ('"+purchase.bid+"','"+purchase.id+"','"+purchase.purchasedate+"','"+purchase.paymentmethod+"','"+purchase.amount+"')";
		db.execute(sql,function(status){
			callback(status);
		});
	},
	getById : function(id, callback){
		var sql = "SELECT b.name as bname, p.paymentmethod as method, p.amount as amount, p.purchasedate as date FROM purchase as p, books as b WHERE p.bid = b.id and p.uid = '"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getCount : function(callback){
		var sql = "SELECT COUNT(*) as total FROM purchase";
		db.getResults(sql, function(results){
			callback(results[0]);
		});
	},
	// getRecent : function(callback){
	// 	var sql = "SELECT u.name as name,u.contactno as contact, c.name as carName, r.p_method as method, r.total_price as tp, r.rentingDate as rd FROM rents as r, cars as c, users as u WHERE r.car_id = c.id and r.user_id = u.id ORDER BY r.rentingDate DESC LIMIT 10";
	// 	db.getResults(sql, function(results){
	// 		callback(results);
	// 	});
	// },
	getAll : function(id,callback){
		var sql = "SELECT * from purchase where uid = '"+id+"'";
		//var sql = "SELECT u.name as name,u.contactno as contact, b.bookname as bname, p.paymentmethod as method, p.amount as amount, p.purchasedate as date FROM purchase as p, books as b, users as u WHERE p.bid = b.id and p.uid = u.id";
		db.getResults(sql, function(results){
			callback(results);
		});
	}
};