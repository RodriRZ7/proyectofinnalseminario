const res = require("express/lib/response");

const salaszoomCtrl = {};

const Salaszoom = require('../models/Salaszoom');

salaszoomCtrl.renderSalaszoomForm = (req, res) => {
    res.render('salaszooms/new-salaszoom');
};

salaszoomCtrl.createNewSalaszoom = async (req, res) => {
    const {sigla, iddesala, contraseña, linkdesala, id} = req.body;
    const newSalaszoom = new Salaszoom({sigla, iddesala, contraseña, linkdesala, id});
    newSalaszoom.user = req.user.id;
    await newSalaszoom.save();
    req.flash('success_msg', 'Sala de Zoom añadido satisfactoriamente');
    res.redirect('/salaszooms')
};

salaszoomCtrl.renderSalaszooms = async (req, res) => {
    const salaszooms = await Salaszoom.find({user: req.user.id}).lean();
    res.render('salaszooms/all-salaszooms', { salaszooms });
};

salaszoomCtrl.renderEditDForm = async (req, res ) =>{
    const salaszoom = await Salaszoom.findById(req.params.id).lean();
    res.render('salaszooms/edit-salaszoom', { salaszoom });
};

salaszoomCtrl.updateSalaszoom = async (req, res) => {
    const {sigla, iddesala, contraseña, linkdesala, id} = req.body;
    await Salaszoom.findByIdAndUpdate(req.params.id, {sigla, iddesala, contraseña, linkdesala, id}).lean();
    req.flash('success_msg', 'Sala de Zoom actualizado satisfactoriamente');
    res.redirect('/salaszooms');
};

salaszoomCtrl.deletesalaszoom = async (req, res) => {
    await Salaszoom.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Sala de Zoom eliminado satisfactoriamente');
    res.redirect('/salaszooms');
};
  
module.exports = salaszoomCtrl;