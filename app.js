const express=require('express');
const app=express();
const cors=require('cors');

const bodyParser=require('body-parser');
const expenseRoute=require('./route/expense');
const sequelize=require('./util/database');

app.use(cors())
app.use(bodyParser.json());
app.use('/', expenseRoute);


sequelize.sync().then(()=>{
  app.listen(5555,()=>{
    console.log(`your server is running on port 5555`)
  })
}).catch(error => console.log(error));