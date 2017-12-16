import db = require('../db/basic');

var dbtest = function(){
    db('cloud').then(function(con){
        var sql = ' insert into admin(username, password) values ("root", "123");'
        con.query(sql,function(err,result){
            if (err) throw err;
            console.log(result);
        })
    })
}

export=dbtest;