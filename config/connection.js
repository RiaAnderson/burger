var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    });
};



// var connection = mysql.createConnection({
//         host: 'ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//         user: 'dph52ecm8gx3auyv',
//         password: 'iponpgygob4ypk7z',
//         database: 'oxm40tu58aagxlua'
//     })

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id: "+ connection.threadId);
});

module.exports = connection;