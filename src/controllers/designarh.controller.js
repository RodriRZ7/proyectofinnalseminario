const res = require("express/lib/response");

const designarhCtrl = {};

const Designarh = require('../models/DesignarH');

designarhCtrl.renderDesignarhForm = (req, res) => {
    res.render('designarhs/new-designarh');
};

designarhCtrl.createNewDesignarh = async (req, res) => {
    const {iddocente, idmateria, idaula, idsalazoom, dia1, dia2, hora1, hora2} = req.body;
    const newDesignarh = new Designarh({iddocente, idmateria, idaula, idsalazoom, dia1, dia2, hora1, hora2});
    newDesignarh.user = req.user.id;
    await newDesignarh.save();
    req.flash('success_msg', 'Designacion de horario añadido satisfactoriamente');
    res.redirect('/designarhs')
};

designarhCtrl.renderDesignarhs = async (req, res) => {
    const designarhs = await Designarh.find({user: req.user.id}).lean();
    res.render('designarhs/all-designarhs', { designarhs });
};

designarhCtrl.renderEditDForm = async (req, res ) =>{
    const designarh = await Designarh.findById(req.params.id).lean();
    res.render('designarhs/edit-designarh', { designarh });
};

designarhCtrl.updateDesignarh = async (req, res) => {
    const { iddocente, idmateria, idaula, idsalazoom, dia1, dia2, hora1, hora2 } = req.body;
    await Designarh.findByIdAndUpdate(req.params.id, {iddocente, idmateria, idaula, idsalazoom, dia1, dia2, hora1, hora2}).lean();
    req.flash('success_msg', 'Designacion de horario actualizada satisfactoriamente');
    res.redirect('/designarhs');
};

designarhCtrl.deletedesignarh = async (req, res) => {
    await Designarh.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Designacion de horario eliminado satisfactoriamente');
    res.redirect('/designarhs');
};
  
module.exports = designarhCtrl;