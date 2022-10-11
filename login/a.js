const { OPEN_READWRITE } = require('sqlite3');

const sqlite3 = require ('sqlite3').verbose();
let mydb = new sqlite3.Database('./accounts.db', OPEN_READWRITE, (err) =>{
    if(err){
        return console.error(err.message);
    }
    console.log("Connection to dataBase established successfully");
});

export function fetchData(param, type){
    mydb.serialize( () =>
    mydb.each('SELECT * FROM account WHERE "'+type+'"= "' + param + '"', (err,row) => {
            if(err){
                console.error(err.message);
            }
            console.log(row );
            return row;
        })
    );
}





 
mydb.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });


