const db = require('./db');

module.exports= {
	insert: function(book, callback){
		var sql = "INSERT INTO books(bookname,authorname, category,price,image,availability) VALUES ('"+book.bookname+"','"+book.authorname+"','"+book.category+"','"+book.price+"','"+book.image+"','"+book.availability+"')";
		db.execute(sql,function(status){
			callback(status);
		});
	},
	getById: function(id, callback){
		var sql = "select * from books where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}
		});
	},
	getCount : function(callback){
		var sql = "SELECT COUNT(*) as total FROM books";
		db.getResults(sql, function(results){
			callback(results[0]);
		});
	},
	update:function(book, callback){
		var sql = "UPDATE books SET bookname='"+book.bookname+"',authorname='"+book.authorname+"',category='"+book.category+"',price='"+book.price+"',image='"+book.image+"',availability = '"+book.availability+"' WHERE id = '"+book.id+"'";
		db.execute(sql,function(status){
			callback(status);
		});
	},
	booked:function(id, callback){
		var sql = "UPDATE books SET availability = 1 WHERE id = '"+id+"'";
		db.execute(sql,function(status){
			callback(status);
		});
	},
	getAll: function(callback){
		var sql = "select * from books";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAvailable: function(callback){
		var sql = "select * from books where availability = 0";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getBookbyCategory : function(book,callback){
		var sql = "select * from books where category LIKE '%"+book.see+"%'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	
	delete: function(id, callback){
		var sql = "DELETE FROM books WHERE id = '"+id+"'";
		db.execute(sql,function(status){
			callback(status);
		});
	}
};