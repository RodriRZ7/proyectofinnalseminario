const res = require("express/lib/response");

const aulaCtrl = {};

const Aula = require('../models/Aula');

aulaCtrl.renderAulaForm = (req, res) => {
    res.render('aulas/new-aula');
};

aulaCtrl.createNewAula = async (req, res) => {
    const {numerodeaula, piso, capacidadaula, id} = req.body;
    const newAula = new Aula({numerodeaula, piso, capacidadaula, id});
    newAula.user = req.user.id;
    await newAula.save();
    req.flash('success_msg', 'Aula añadido satisfactoriamente');
    res.redirect('/aulas')
};

aulaCtrl.renderAulas = async (req, res) => {
    const aulas = await Aula.find({user: req.user.id}).lean();
    res.render('aulas/all-aulas', { aulas });
};

aulaCtrl.renderEditDForm = async (req, res ) =>{
    const aula = await Aula.findById(req.params.id).lean();
    res.render('aulas/edit-aula', { aula });
};

aulaCtrl.updateAula = async (req, res) => {
    const { numerodeaula, piso, capacidadaula, id } = req.body;
    await Aula.findByIdAndUpdate(req.params.id, {numerodeaula, piso, capacidadaula, id}).lean();
    req.flash('success_msg', 'Aula actualizada satisfactoriamente');
    res.redirect('/aulas');
};

aulaCtrl.deleteaula = async (req, res) => {
    await Aula.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Aula eliminada satisfactoriamente');
    res.redirect('/aulas');
};
  
module.exports = aulaCtrl;