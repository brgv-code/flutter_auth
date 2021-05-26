const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})
router.get('/dashboard', (req,res) => {
    res.send('Hello Dashboard')
})


// add new user 
// post call /adduser

router.post('/adduser', actions.addNew)

// auth user 
// post call /auth
router.post('/auth', actions.authenticate)
module.exports = router