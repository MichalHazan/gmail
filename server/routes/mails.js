const router = require('express').Router()
const { v4 } = require("uuid");
let { mails } = require('../db/db');
const onlyUsers = require("../helpers/onlyUsers");

router.get('/', (req, res) => {
    res.send(mails)
})
// ---הצגת המיילים של המשתמש----
router.get('/:username', (req, res) => {
    let allMails = mails.filter(m => m.to == req.params.username)
    if (allMails.length < 1) {
        res.send({ err: "dont have mails yet" })

    } else {

        res.send(allMails.sort((a, b) => new Date(b.created) - new Date(a.created)))
    }
})
// ---מחיקת מייל----
router.delete('/:id', onlyUsers, (req, res) => {
    if (!mails.find(m => m.id == req.params.id)) {
        return res.send({ err: "mail not found" })
    }
    mails = mails.filter(m => m.id != req.params.id)
    res.send({ msg: "deleted" })
})

// ---שליחת מייל----
router.post('/:username', onlyUsers, (req, res) => {
    const { title, text, to } = req.body
    if (!title || !text || !to) {
        return res.status(400).send({ err: "make sure you enterd all info" })
    }
    mails.push({
        title,
        text,
        to,
        from: req.session.username,
        created: new Date(),
        id: v4()

    })
    res.send({ msg: "sent" })
})


module.exports = router