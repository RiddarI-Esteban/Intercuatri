require('./config/config')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send('<h1> Bienvenido a mi programa de Intercuatrimestral</h1>')
});


app.use(require('./routes/departamento'));

app.use(require('./routes/empleado'));

app.use(require('./routes/usuario'));



mongoose.connect('mongodb://localhost:27017/Examen',{
    
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true
}, (err, res) => {
    if(err) throw err;
    console.log('online')
});



app.listen(process.env.PORT, ()=>{
    console.log('Online por el puerto', process.env.PORT)
});