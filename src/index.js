const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())


app.get('/', async function (req, res){
       
    res.status(200).send({msg: 'Api rodando'})

})

let port = 3000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))


module.exports = app