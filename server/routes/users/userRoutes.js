const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Users route')
})
router.post('/', (req, res) => {
    res.send('Post route')
})
router.put('/:id', (req, res) => {
    res.send('Put route')
})
router.delete('/:id', (req, res) => {
    res.send('Delete route')
})

module.exports = router;