const express = require('express');
const router = express.Router();

//index
  router.get('/',(req,res)=>{
    res.send('Lista dei Post')
  })

  //Show
  router.get('/:id',(req,res)=>{
    res.send(`Mostrami l'elemento con id ${req.params.id}`)
  })

  //Store
  router.post('/',(req,res)=>{
    res.send('Creo un elemento')
  })

//Update
  router.put('/:id',(req,res)=>{
    res.send(`Modifico l'intero elemento con id ${req.params.id}`)
  })

  //Delete
  router.delete('/:id',(req,res)=>{
    res.send(`Elimino l'elemento con id ${req.params.id}`)
  })

module.exports = router