const express = require("express")
const routes = require('./routes')
// const bodyParser = require("body-parser")

const app = express()

// app.use(bodyParser.json())

const port = 3000

routes(app)

// app.get('/teste', (req, res) => res
//   .status(200)
//   .send({ mensagem: 'boas-vindas à API' }
//   ))

app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`))

module.exports = app
