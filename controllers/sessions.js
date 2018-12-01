const User = require('../models').User;

module.exports ={
  new: function(req, res){
    res.render('login');
  },
  create: function(req,res){
    User.login(req.body.username, req.body.password)
        .then(user => {
          if(user){
            req.session.userId = user.id;
            req.session.username= user.username;
            res.redirect('/home');
          }else{
            console.log("Ingrese un usuario y contrasela válido");
            res.render('login',{message: {
              title:"Usuario o contraseña incorrecta",
              txt:"Intentelo nuevamente",
              icon:"error",
              button:"Aceptar"
            }});
          }
        })
        .catch(err=>{
      console.log(err);
    })
  },
  destroy: function (req, res) {
    req.session.destroy(function () {
      res.redirect('http://dekids.com.mx/');
    });
  }
};
