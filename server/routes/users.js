let { users } = require('../db/db')
const onlyUsers = require('../helpers/onlyUsers')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.send(users)
})

// ---הרשמה----
router.post('/register', (req, res) => {
    console.log(req.body)
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).send({ err: "make sure you enterd all info" })
    }
    if (users.some(user => user.username == username)) {
        return res.status(400).send({ err: "username is taken" })

    }
    users.push({
        username,
        password,
    })

    res.send({ msg: `Welcome ${username}`, username })
})
// ---התחברות---
router.post('/login', (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).send({ err: "make sure you enterd all info" })
    }

    const user = users.find(u => u.username == username && u.password == password)
    if (!user) {
        return res.status(400).send({ err: "wrong username / password" })
    }
    req.session.username = username
    res.send({ msg: "user logged in, welcome " + username, user })
})
// ---התנתקות---
router.delete('/logout', (req, res) => {
    req.session.destroy()
    res.send({ msg: "bye bye" })
})
module.exports = router