const pool = require('./db');

class UserModel {

    static insertNewUser(email, password, firstName, lastName, phone, address) {
        // This is for user signup
        return pool.query("INSERT INTO users (email, password, firstName, lastName, phone, address) VALUES             ($1, $2, $3, $4, $5, $6) RETURNING id", [email, password, firstName, lastName, phone, address])          
        .then(id => id)
        .catch(e => e);
    }
    //This is for user login
    static getUserById(id) {
        return pool.query('SELECT * FROM users WHERE id = $1', [id])
       // .then(user => {return user})
        .then(user => user)
        .catch(e => e);
    } 

    // Get user by email
    static getUserByEmail(email){
        return pool.query('SELECT * FROM users WHERE email = $1', [email])
        .then(user => user)
        .catch(e => e);
    }

}

module.exports = UserModel;
