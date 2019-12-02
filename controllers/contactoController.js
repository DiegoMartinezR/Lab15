let db = require('../models/dbconexion');

let productos = {
  listar( req, res ){
    let sql = "SELECT * FROM contactos";
    db.query(sql,function(err, result){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(result);
      }
    });
  },
  store( req, res ){
    val_nombre = req.body.nombre;
    val_email  = req.body.email;
    val_direccion = req.body.direccion;
    val_telefono = req.body.telefono;
    val_fecha  = req.body.fechanac;
    let sql = "INSERT INTO contactos(nombre, email, direccion, telefono, fechanac) VALUES(?,?,?,?,?)";
    db.query(sql,[val_nombre,val_email,val_direccion,val_telefono,val_fecha],function(err, newData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  show( req, res ){
    val_id = req.params.id;
    let sql = "SELECT * FROM contactos WHERE codigo=?";
    db.query(sql,[val_id],function(err, rowData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(rowData);
      }
    });
  },
  edit( req, res ){
    val_id = req.body.id;
    val_nombre = req.body.nombre;
    val_email  = req.body.email;
    val_direccion = req.body.direccion;
    val_telefono = req.body.telefono;
    val_fecha  = req.body.fechanac;
    let sql = "UPDATE contactos SET nombre=?, email=?, direccion=?, telefono=?, fechanac=? WHERE codigo=?";
    db.query(sql,[val_nombre,val_email,val_direccion,val_telefono,val_fecha,val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  delete( req, res ){
    val_id = req.params.id;
    let sql = "DELETE FROM contactos WHERE codigo=?";
    db.query(sql,[val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.sendStatus(200);
      }
    });
  }
}

module.exports = productos;
