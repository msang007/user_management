import mysql from "mysql";
import dotenv from "dotenv";
const ENV = dotenv.config().parsed;
//Creating a new connection Pool

var con = mysql.createPool({
    host: ENV.DB_HOST,
    user: ENV.DB_USER,
    password: ENV.DB_PASSWORD,
    database: ENV.DB_NAME
});


const view = (req, res) => {

    // var type = typeof(process.env.DB_HOST);
    // console.log(type);
    //Connection to the Database
    con.getConnection((err, connection) => {
        if (err) {
            throw err
        }
        else {
            console.log('Connected as ID');
        }

        connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
            connection.release();
            if (!err) {
                res.render('home', { rows });
            }
            else {
                console.log(err);
            }

            console.log('the data from the user table: \n', rows)
        });
    });


}

// find a user by research

const find = (req, res) => {
    var type = typeof (process.env.DB_HOST);
    console.log(type);
    //Connection to the Database
    con.getConnection((err, connection) => {
        if (err) {
            throw err
        }
        else {
            console.log('Connected as ID');
        }

        let searchTerm = req.body.search

        connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
            connection.release();
            if (!err) {
                res.render('home', { rows });
            }
            else {
                console.log(err);
            }

            console.log('the data from the user table: \n', rows)
        });
    });

}

const form = (req, res) => {
    res.render('add-user');
}
/*

const create =(req,res)=>{
    var type = typeof(ENV.DB_HOST);
    console.log(type);

    const {first_name, last_name, email, phone, role, comments} = req.body;
    //Connection to the Database
    con.getConnection((err, connection) => {
        if (err) {
            throw err
        }
        else{
            console.log('Connected as ID');
        }

        let searchTerm = req.body.search

    connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, role = ?, comments = ?', [first_name, last_name, email, phone, role, comments] ,(err, rows) =>{
        connection.release();
        if(!err){
            res.render('add-user');
        }
        else{
            console.log(err);
        }

        console.log('the data from the user table: \n', rows)
    });
    });
    }
*/
const create = (req, res) => {
    const { first_name, last_name, email, phone, role, comments } = req.body;
    con.getConnection((err, connection) => {
        if (err) {
            throw err
        }
        else {
            console.log('Connected as ID');
        }

        let searchTerm = req.body.search

        // User the connection
        connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, role = ?, comments = ?', [first_name, last_name, email, phone, role, comments], (err, rows) => {
            if (!err) {
                res.render('add-user', { alert: 'User added successfully.' });
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}

const edit = (req, res) => {

    con.getConnection((err, connection) => {
        if (err) {
            throw err
        }
        else {
            console.log('Connected as ID');
        }

    // User the connection
    connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
      if (!err) {
        res.render('edit-user', { rows });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);

    });
    });
}

const update =(req,res)=>{
    const { first_name, last_name, email, phone, role, comments } = req.body;
  // User the connection
  connection.query('UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, role = ?, comments = ? WHERE id = ?', [first_name, last_name, email, phone, role, comments, req.params.id], (err, rows) => {

    if (!err) {
      // User the connection
      connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        // When done with the connection, release it
        
        if (!err) {
          res.render('edit-user', { rows, alert: `${first_name} has been updated.` });
        } else {
          console.log(err);
        }
        console.log('The data from user table: \n', rows);
      });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}



export default { view, find, form, create, edit, update}

