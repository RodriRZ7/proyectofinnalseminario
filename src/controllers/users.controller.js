const usersCtrl = {};

const passport = require('passport');

const User = require('../models/User') 

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const {name, email, password, confirm_password} = req.body;
    const errors = [];
    if (password != confirm_password) {
        errors.push({text: 'Contrasenas no coinciden'});
    }
    if (password.length < 4) {
        errors.push({text: 'La Contrasena es menor a 4 caracteres.'});
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,name,email,password,confirm_password
        })
    } else {
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            req.flash('error_msg', 'El email ya esta en uso');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save();
            req.flash('success_msg', 'Ya estas Registrado'); 
            res.redirect('/users/signin');
        }
    }
};

usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/docentes',
    failureFlash: true
});
    


usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Tu sesion ha sido cerrada.');
    res.redirect('/users/signin');
};

module.exports = usersCtrl;