const User = require('../models').User;
const bcrypt = require('bcrypt');
module.exports ={
  editPass:function(req,res){
    res.render('user/password');
  },
  updatePass:function(req,res){
    User.login(req.session.username, req.body.password)
        .then(user => {
          if(user){
            bcrypt.hash(req.body.newPassword,10, function(error,hash){
              User.update({password_hash:hash},{
                where:{
                  id:req.session.userId
                }
              }).then(function(response){
                res.render('user/password',{message: {
                  title:"Su contraseña se cambio con éxito",
                  txt:"Ok",
                  icon:"success",
                  button:"Aceptar"
                }});
            })
            })
          }else{
            console.log("Su contraseña no es la correcta");
            res.render('user/password',{message: {
              title:"Su contraseña no es la correcta",
              txt:"Intentelo nuevamente",
              icon:"error",
              button:"Aceptar"
            }});
          }
        })
        .catch(err=>{
      console.log(err);
    })
  }
};
