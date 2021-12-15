const { Router } = require('express')
const router = Router()

const { 
    renderSalaszoomForm,
    createNewSalaszoom, 
    renderSalaszooms, 
    renderEditDForm, 
    updateSalaszoom, 
    deletesalaszoom
} = require('../controllers/salaszoom.controller');

const {isAuthenticated} = require('../helpers/auth')

//nueva sala

router.get('/salaszooms/add',isAuthenticated, renderSalaszoomForm);

router.post('/salaszooms/new-salaszoom',isAuthenticated, createNewSalaszoom);

//listar sala
router.get('/salaszooms',isAuthenticated, renderSalaszooms)
// editar sala
router.get('/salaszooms/edit/:id',isAuthenticated, renderEditDForm)

router.put('/salaszooms/edit/:id',isAuthenticated, updateSalaszoom)

//Delete sala
router.delete('/salaszooms/delete/:id',isAuthenticated,  deletesalaszoom)
module.exports = router