const res = require("express/lib/response");

const designardCtrl = {};

const Designard = require('../models/DesignarD');

designardCtrl.renderDesignardForm = (req, res) => {
    res.render('designards/new-designard');
};

designardCtrl.createNewDesignard = async (req, res) => {
    const {iddocente, idmateria, registro} = req.body;
    const newDesignard = new Designard({iddocente, idmateria, registro});
    newDesignard.user = req.user.id;
    await newDesignard.save();
    req.flash('success_msg', 'Designacion añadido satisfactoriamente');
    res.redirect('/designards')
};

designardCtrl.renderDesignards = async (req, res) => {
    const designards = await Designard.find({user: req.user.id}).lean();
    res.render('designards/all-designards', { designards });
};

designardCtrl.renderEditDForm = async (req, res ) =>{
    const designard = await Designard.findById(req.params.id).lean();
    res.render('designards/edit-designard', { designard });
};

designardCtrl.updateDesignard = async (req, res) => {
    const { iddocente, idmateria, registro } = req.body;
    await Designard.findByIdAndUpdate(req.params.id, {iddocente, idmateria, registro}).lean();
    req.flash('success_msg', 'Designacion actualizada satisfactoriamente');
    res.redirect('/designards');
};

designardCtrl.deletedesignard = async (req, res) => {
    await Designard.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Designacion eliminado satisfactoriamente');
    res.redirect('/designards');
};
  
module.exports = designardCtrl;