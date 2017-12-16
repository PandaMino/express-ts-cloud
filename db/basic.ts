import mysql = require('mysql');
import debugs = require('debug');
var debug = debugs('dmail');
var init = function(db) {
  var options = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD
  };
  if(db) {
    options.database = db;
  }
  var con = mysql.createConnection(options);
  return new Promise(function(resolve,reject){
    con.connect(function(err) {
      if (err) reject(err);
      debug('log:' + 'Connected!');
      resolve(con);
    });
  })
  
};
// if(!module.parent) {
//   init();
// }
export=init;