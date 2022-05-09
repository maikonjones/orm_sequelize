const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())
    app.get('/list_all', (req, res) => res.send('Olá'))

 
}