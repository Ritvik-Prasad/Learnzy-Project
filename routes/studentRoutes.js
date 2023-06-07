const express = require('express')
const Student = require('../models/studentModel')
const{createStudent, getStudent, getStudents, updateStudent, deleteStudent} = require('../controllers/studentController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

//get all students
router.get('/', getStudents)

//get a single student
router.get('/:id', getStudent)

//create a student
router.post('/', createStudent)

//update a student
router.patch('/:id', updateStudent)

//delete a student
router.delete('/:id', deleteStudent)

module.exports=router