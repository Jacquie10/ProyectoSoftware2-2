const { default: User } = require("../model/User");

const usersCtrl = {};

userCtrl.renderSingUpForm = (req, res) => {
    res.render("users/signup");

};

userCtrl.signup = (req, res) => {
    const errors = [];
    const {name, email, password, confirm_password} = req.body;
    if (password != confirm_password) {
        errors.push({text: "Las contraseñas no son iguales"});
    }
    if (password.lenght < 4){
        errors.push({text: "La contraseña debe tener al menos 4 caracteres. "});
    }
    if (errors.lenght > 0){
        res.render("users/signup",{
            errors,
            name,
            email,
            password,
            confir
        })
    } else {
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            req.flash("error_msg", "El email ya existe");
            req.redirect("/users/signup");
        } else{
            const newUser = new User({name, email, password});
            await newUser.save();
            res.redirect("/users/signin");
        }
    }
};

usersCtrl.rednerSigninForm = (req, res) => {
    res.render("users/signin")
}

usersCtrlCtrl.signin = (req, res) => {
    res.send("signin");
}

userCtrl.logout = (req, res) => {
    res.send("signup");
}


module.exports = userCtrl;