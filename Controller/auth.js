const jwt = require('jsonwebtoken')
const model = require('../model/user')
// const mongoose = require('mongoose')
const User = model.User
const path = require('path')
const bcrypt = require('bcrypt')
const fs = require('fs')
const privateKey = fs.readFileSync(path.resolve(__dirname, '../private.key'), 'utf-8')


//signUpUser
exports.signUp = async (req, res) => {
    console.log('Request body:', req.body)

    if (!req.body.password || typeof req.body.password !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing password' })
    }

    try {
        const hash = bcrypt.hashSync(req.body.password, 10)
        const user = new User({
            ...req.body,
            password: hash,
            token: jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' })
        })

        const doc = await user.save()
        console.log({ User: doc })
        res.json({ message: 'User added successfully', User: doc })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err.message })
    }
}



//userLogin
exports.login = async (req, res) => {
    try {
        const doc = await User.findOne({ email: req.body.email })
        if (!doc) {
            return res.status(401).json({ error: 'User not found' })
        }
        const isAuth = bcrypt.compareSync(req.body.password, doc.password)
        if (isAuth) {
            var token = jwt.sign({ email: req.body.email }, privateKey, {
                algorithm: 'RS256',
            });
            doc.token = token
            await doc.save(() => {
                res.json({ token })
            })

        } else {
            res.sendStatus(401)

        }
    } catch (err) {
        res.status(401).json(err)
    }
}

