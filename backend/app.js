const express = require('express')
const database = require('./database/dbConfig');
const festivalsRouter = require('./routes/festival')
const app = express()
const port = 7000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/festival', festivalsRouter)


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/list', async (req, res) => {
  const conn = await connection(database).catch(e => {}) 
  const results = await query(conn, 'SELECT * FROM Festival').catch(console.log);
  res.json({ results });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = app;