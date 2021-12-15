const res = require("express/lib/response");

const docenteCtrl = {};

const Docente = require('../models/Docente');

docenteCtrl.renderDocenteForm = (req, res) => {
    res.render('docentes/new-docente');
};

docenteCtrl.createNewDocente = async (req, res) => {
    const {nombre, apellido, ci, cargahorariasemanal, id} = req.body;
    const newDocente = new Docente({nombre , apellido , ci , cargahorariasemanal , id});
    newDocente.user = req.user.id;
    await newDocente.save();
    req.flash('success_msg', 'Docente anadido satisfactoriamente');
    res.redirect('/docentes')
};

docenteCtrl.renderDocentes = async (req, res) => {
    const docentes = await Docente.find({user: req.user.id}).lean();
    res.render('docentes/all-docentes', { docentes });
};

docenteCtrl.renderEditDForm = async (req, res ) =>{
    const docente = await Docente.findById(req.params.id).lean();
    res.render('docentes/edit-docente', { docente });
};

docenteCtrl.updateDocente = async (req, res) => {
    const { nombre, apellido, ci, cargahorariasemanal, id } = req.body;
    await Docente.findByIdAndUpdate(req.params.id, {nombre, apellido, ci, cargahorariasemanal, id}).lean();
    req.flash('success_msg', 'Docente actualizado satisfactoriamente');
    res.redirect('/docentes');
};

docenteCtrl.deletedocente = async (req, res) => {
    await Docente.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Docente eliminado satisfactoriamente');
    res.redirect('/docentes');
};
  
module.exports = docenteCtrl;