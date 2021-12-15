const { Router } = require('express')
const router = Router()

const { 
    renderMateriaForm,
    createNewMateria, 
    renderMaterias, 
    renderEditDForm, 
    updateMateria, 
    deletemateria
} = require('../controllers/materia.controllers');

const {isAuthenticated} = require('../helpers/auth')

//nueva materia

router.get('/materias/add',isAuthenticated, renderMateriaForm);

router.post('/materias/new-materia',isAuthenticated, createNewMateria);

//listar docentes
router.get('/materias',isAuthenticated, renderMaterias)
// editar docentes
router.get('/materias/edit/:id',isAuthenticated, renderEditDForm)

router.put('/materias/edit/:id',isAuthenticated, updateMateria)

//Delete docente
router.delete('/materias/delete/:id',isAuthenticated,  deletemateria)
module.exports = router