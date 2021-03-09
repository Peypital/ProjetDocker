const express = require('express')
const bodyParser = require('body-parser')
const Pool = require('pg').Pool

const app = express()

const pool = new Pool({
    user: 'postgres',
    host: 'database',
    database: 'postgres',
    password: 'IloveTCOM',
    port: 5432,
})

const addItem = (request, response) => {
    pool.query('INSERT INTO items (name) VALUES ($1)', [request.query.name], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            response.status(200).send("Item Added");
        }
    })
}
const getItem = (request, response) => {
    pool.query('SELECT id, name FROM items', (error, results) => {
        if (error) {
            console.log(error);
        } else {
            response.status(200).send(results.rows);
        }
    })
}

const delItem = (request, response) => {
    pool.query('DELETE FROM items WHERE id = $1', [request.query.id], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            response.status(200).send("Item Deleted");
        }
    })
}

app.use(bodyParser.json({limit: '50mb'}))
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/add', addItem);
app.get('/get', getItem);
app.get('/del', delItem);

app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}.`)
    pool.query('CREATE TABLE items (id serial PRIMARY KEY, name text)', [], (error, results) => {
    	if (error) {
	    throw error;
        }
    })	
})
