const { Router } = require('express')
const router = Router()

const { 
    renderAulaForm,
    createNewAula, 
    renderAulas, 
    renderEditDForm, 
    updateAula, 
    deleteaula
} = require('../controllers/aula.controllers');

const {isAuthenticated} = require('../helpers/auth')

//nueva aula

router.get('/aulas/add',isAuthenticated, renderAulaForm);

router.post('/aulas/new-aula',isAuthenticated, createNewAula);

//listar aulas
router.get('/aulas',isAuthenticated, renderAulas)
// editar aulas
router.get('/aulas/edit/:id',isAuthenticated, renderEditDForm)

router.put('/aulas/edit/:id',isAuthenticated, updateAula)

//Delete aulas
router.delete('/aulas/delete/:id',isAuthenticated,  deleteaula)
module.exports = router