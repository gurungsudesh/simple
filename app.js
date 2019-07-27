const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

//import auth route
const authRoute = require('./routes/auth');


app.use(express.json());

//Body parser
app.use(express.urlencoded({
    extended: false
}));


//routes middleware
app.use('/', require("./routes/start"));
app.use("/auth", authRoute);



app.listen(5000, () => console.log("The server is running on the port 5000"));