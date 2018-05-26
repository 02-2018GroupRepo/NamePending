const connection = require('./db');

class UserModel {

    // This is for user signup
    static insertNewUser(email, password, firstName, lastName, phone, address, token) {
        return connection.query("INSERT INTO users (email, password, first_name, last_name, phone, address, token) VALUES (?, ?, ?, ?, ?, ?, ?)", [email, password, firstName, lastName, phone, address, token], (err, results) => {
            console.log("here");
            if (err) {console.log(err)}
            else return results;
        });
    }
    //This is for user login
    static getUserByToken(token) {

        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM users WHERE token = ?", [token], (err, results) => {
                console.log("Promise")
                if (err) reject(err);
                else resolve(results);
            });
        });

    } 
    // Get user by email
    static getUserByEmail(email) {

        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        })
    }

    static updateToken(email, token) {

        return new Promise((resolve, reject) => {
            connection.query("UPDATE users SET token = ? WHERE email = ?", [token, email], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        })
    }

     static insertFavorite(wid, uid) {
         console.log(wid);
         return new Promise((resolve, reject) => {
             connection.query("INSERT INTO favorites (workshopId, userId) VALUES (?, ?)", [wid, uid], (err, results) => {
                 if (err) reject(err);
                 else resolve(results);
                });
            })
        }

     static getFavoritesByUserId(userId) {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM favorites WHERE userid = ?", [userId], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
     }   

    }


module.exports = UserModel;
