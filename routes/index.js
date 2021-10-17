const router = require('express').Router()
router.use('/api', require('./workoutroutes'))

module.exports = router