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
        // Find the user by email
        const doc = await User.findOne({ email: req.body.email })

        // Check if the user exists
        if (!doc) {
            return res.status(401).json({ error: 'User not found' })
        }

        // Check if the password is correct
        const isAuth = bcrypt.compareSync(req.body.password, doc.password)

        if (isAuth) {
            // Create a JWT token if authentication is successful
            const token = jwt.sign({ email: req.body.email }, privateKey, {
                algorithm: 'RS256',
            })

            // Save the token in the user document (optional if you store the token)
            doc.token = token
            await doc.save()

            // Send the token in the response
            res.json({ token })
        } else {
            // If authentication fails, return 401 Unauthorized
            res.status(401).json({ error: 'Invalid password' })
        }
    } catch (err) {
        console.error("Login error:", err)  // Log the error for debugging
        res.status(500).json({ error: 'Something went wrong, please try again' })
    }
}

