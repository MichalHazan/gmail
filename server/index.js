const express = require('express')
const session = require('express-session')
const cors = require('cors')
const router = require('express').Router()

let { users, mails } = require('./db/db')

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
}

const app = express()
app.use(express.json())
app.use(cors(corsOptions))

app.use(session({
    secret: "BlahBlahBlahHalbHalbHalb",
    name: "johnniahoo",
    resave: true, //זוכר כל פעולה
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, //שנה
    }
}))

app.use('/mails', require('./routes/mails'))
app.use('/users', require('./routes/users'))


app.get('/', (req, res) => {
    res.send({ msg: "work", docsUrl: "http://localhost:4001/mails" })

})
app.listen(4001, () => console.log("rocking4001"))