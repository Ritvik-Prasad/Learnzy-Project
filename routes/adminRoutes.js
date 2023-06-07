const express = require('express')
const Admin = require('../models/adminModel')
const {getAdmin, createAdmin} = require('../controllers/adminController')
const requireAuth= require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.get('/', getAdmin)
router.post('/', createAdmin)

module.exports=router