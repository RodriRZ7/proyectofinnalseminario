const { Router } = require('express')
const router = Router()

const { 
    renderDocenteForm,
    createNewDocente, 
    renderDocentes, 
    renderEditDForm, 
    updateDocente, 
    deletedocente
} = require('../controllers/docente.controller');

const {isAuthenticated} = require('../helpers/auth')

//nuevo docente

router.get('/docentes/add',isAuthenticated, renderDocenteForm);

router.post('/docentes/new-docente',isAuthenticated, createNewDocente);

//listar docentes
router.get('/docentes',isAuthenticated, renderDocentes)
// editar docentes
router.get('/docentes/edit/:id',isAuthenticated, renderEditDForm)

router.put('/docentes/edit/:id',isAuthenticated, updateDocente)

//Delete docente
router.delete('/docentes/delete/:id',isAuthenticated,  deletedocente)
module.exports = router