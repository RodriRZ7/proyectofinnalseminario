const res = require("express/lib/response");

const materiaCtrl = {};

const Materia = require('../models/Materia');

materiaCtrl.renderMateriaForm = (req, res) => {
    res.render('materias/new-materia');
};

materiaCtrl.createNewMateria = async (req, res) => {
    const {nombre, sigla, horasporsemana, cargahoraria, semestre, id} = req.body;
    const newMateria = new Materia({nombre , sigla , horasporsemana , cargahoraria , semestre , id});
    newMateria.user = req.user.id;
    await newMateria.save();
    req.flash('success_msg', 'Materia anadido satisfactoriamente');
    res.redirect('/materias')
};

materiaCtrl.renderMaterias = async (req, res) => {
    const materias = await Materia.find({user: req.user.id}).lean();
    res.render('materias/all-materias', { materias });
};

materiaCtrl.renderEditDForm = async (req, res ) =>{
    const materia = await Materia.findById(req.params.id).lean();
    res.render('materias/edit-materia', { materia });
};

materiaCtrl.updateMateria = async (req, res) => {
    const { nombre, sigla, horasporsemana, cargahoraria, semestre, id } = req.body;
    await Materia.findByIdAndUpdate(req.params.id, {nombre, sigla, horasporsemana, cargahoraria, semestre, id}).lean();
    req.flash('success_msg', 'Materia actualizada satisfactoriamente');
    res.redirect('/materias');
};

materiaCtrl.deletemateria = async (req, res) => {
    await Materia.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Materia eliminada satisfactoriamente');
    res.redirect('/materias');
};
  
module.exports = materiaCtrl;