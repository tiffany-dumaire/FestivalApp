const express = require('express')
const dbConfig = require('./dbConfig');
const connection = require('./helpers/connection');
const query = require('./helpers/query');
const festivalsRouter = require('./routes/festival')
const app = express()
const port = 3000;

app.use('/festival', festivalsRouter)


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/list', async (req, res) => {
  const conn = await connection(dbConfig).catch(e => {}) 
  const results = await query(conn, 'SELECT * FROM Festival').catch(console.log);
  res.json({ results });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = app;