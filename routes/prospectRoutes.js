const express = require('express')
const Prospect = require('../models/prospectModel')
const{createProspect, getProspects} = require('../controllers/prospectController')

const router=express.Router()

router.get('/', getProspects)
router.post('/', createProspect)

module.exports=router