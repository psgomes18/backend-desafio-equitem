const express = require('express');
const dotenv = require('dotenv');
const { ClienteRoutes } = require('./routes');


const app = express();
const port = 3000;
app.use(express.json());

dotenv.config()








app.use(ClienteRoutes)

app.get('/', (req, res) => {
    res.send('Ola');
})




app.listen(3000, (req, res) => {
    console.log(`App rodando na porta ${port}`);
});


