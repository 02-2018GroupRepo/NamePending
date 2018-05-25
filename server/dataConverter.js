
//this program populates the dbstore schema store table with the data.json file object that contains the home depot stores in Georgia 
const data = require("./data.json");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'todo',
  password : '',
  database : 'dbstore'
});
data.forEach(store => {
    connection.query("INSERT INTO stores (store_id, address, name, phone, lat, lng) VALUES(?, ?, ?, ?, ?, ?)", [store.storeNumber, store.address, store.title, store.phone, store.lat, store.lng], (err, results) => {
        console.log(err);         
    });
});
//run this file node dataConverter.js