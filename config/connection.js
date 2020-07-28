// Set up MySQL connection.
var mysql = require("mysql");

// local test
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "arr3steDdev!",
//   database: "burgers_db"
// });

// heroku deploy
var connection = mysql.createConnection({
  host: "g8mh6ge01lu2z3n1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "kditqpfgifvyjdtj",
  password: "nhf59ymn27kx4pd8",
  database: "jii9cfrn205h0ltk"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
