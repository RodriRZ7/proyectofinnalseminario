const { Router } = require('express')
const router = Router()

const { 
    renderDesignardForm,
    createNewDesignard, 
    renderDesignards, 
    renderEditDForm, 
    updateDesignard, 
    deletedesignard
} = require('../controllers/designard.controller');

const {isAuthenticated} = require('../helpers/auth')

//nuevo designacion

router.get('/designards/add',isAuthenticated, renderDesignardForm);

router.post('/designards/new-designard',isAuthenticated, createNewDesignard);

//listar designacion
router.get('/designards',isAuthenticated, renderDesignards)
// editar designacion
router.get('/designards/edit/:id',isAuthenticated, renderEditDForm)

router.put('/designards/edit/:id',isAuthenticated, updateDesignard)

//Delete designacion
router.delete('/designards/delete/:id',isAuthenticated,  deletedesignard)
module.exports = router