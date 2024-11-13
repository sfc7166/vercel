const fs = require('fs')
const path = require('path')
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data.json', 'utf-8')))
const users = data.users

exports.getusers = (req, res) => {
    res.json(users)
}

exports.getuser = (req, res) => {
    const id = +req.params.id
    const user = users.find(p => p.id === id)
    res.json(user)
}

exports.createuser = (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.json({ message: 'user added' })
}

exports.replaceuser = (req, res) => {
    const id = +req.params.id
    const userIndex = users.findIndex(p => p.id === id)
    users.splice(userIndex, 1, { ...req.body, id: id })
    res.json({ message: 'user replaced' })
}

exports.updateuser = (req, res) => {
    const id = +req.params.id
    const userIndex = users.findIndex(p => p.id === id)
    const user = users[userIndex]
    users.splice(userIndex, 1, { ...user, ...req.body })
    res.json({ message: 'user updated' })
}

exports.deleteuser = (req, res) => {
    const id = +req.params.id
    const userIndex = users.findIndex(p => p.id === id)
    users.splice(userIndex, 1)
    res.json({ message: 'user deleted' })
}