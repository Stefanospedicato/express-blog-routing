const express = require('express');
const router = express.Router();
const posts = require('../posts')

//index
  router.get('/',(req,res)=>{
   res.json({
    lista: posts
   })
  })

  //Show
  router.get('/:title',(req,res)=>{
    const post = posts.find(post => post.title === req.params.title)
    res.json(post)
  });

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