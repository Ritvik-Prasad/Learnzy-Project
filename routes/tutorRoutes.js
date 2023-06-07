const express = require('express')
const Tutor = require('../models/tutorModel')
const{createTutor, getTutor, getTutors, updateTutor, deleteTutor} = require('../controllers/tutorController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()
router.use(requireAuth)

//get all tutors
router.get('/', getTutors)

//get a single tutor
router.get('/:id', getTutor)

//create a tutor
router.post('/', createTutor)

//update a tutor
router.post('/', updateTutor)

module.exports=router
