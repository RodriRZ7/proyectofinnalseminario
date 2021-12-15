const { Router } = require('express')
const router = Router()

const { 
    renderDesignarhForm,  //Designarh
    createNewDesignarh,   //Designarh
    renderDesignarhs,      //Designarhs
    renderEditDForm, 
    updateDesignarh,    //Designarh
    deletedesignarh     //designarh
} = require('../controllers/designarh.controller');

const {isAuthenticated} = require('../helpers/auth')

//nuevo designacion de horarios

router.get('/designarhs/add',isAuthenticated, renderDesignarhForm);

router.post('/designarhs/new-designarh',isAuthenticated, createNewDesignarh);

//listar designacion de horarios
router.get('/designarhs',isAuthenticated, renderDesignarhs)
// editar designacion de horarios
router.get('/designarhs/edit/:id',isAuthenticated, renderEditDForm)

router.put('/designarhs/edit/:id',isAuthenticated, updateDesignarh)

//Delete designacion de horarios
router.delete('/designarhs/delete/:id',isAuthenticated,  deletedesignarh)
module.exports = router