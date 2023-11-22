// const http = require('http')
// const routes = require('./route')
const express = require('express')
// console.log(routes.someText)
const app = express();

const adminRoutes = require('./routes/admin');
const shop = require('./routes/shop')

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);
app.use(shop);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1')
})
// const server = http.createServer(app)
app.listen(5000);