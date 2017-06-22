'use strict'

var resepMakanan = require('../models/resepMakanan');

var createResep = (req,res)=>{
  var data = req.body;
  resepMakanan.create({
    name: data.name,
    ingredient: data.ingredient
  },(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result)
  })
}

var findAllResep = (req,res)=>{
  resepMakanan.find({},(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result)
  })
}

var deleteResep = (req,res)=>{
  resepMakanan.findByIdAndRemove(req.params.id,(err)=>{
      if (err) {
        res.send(err)
      }
      res.send('data already delete')
  })
}

module.exports = {
  createResep,
  findAllResep,
  deleteResep
}; 