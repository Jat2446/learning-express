// const http = require('http')
// const routes = require('./route')
const express = require('express')
// console.log(routes.someText)
const app = express();
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded())

app.use('/add-product',(req,res,next) => {
    console.log("I am another midleware")
    res.send('<form action="/product" method="POST"><input type="text" name="message"><button type="submit">send</button></form>')
    next();
})

app.post('/product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/');
})

app.use('/',(req,res,next) => {
    console.log("I am another midleware")
    res.send("<h1> hello from express !</h1>")
})
// const server = http.createServer(app)
app.listen(5000);