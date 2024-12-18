const express = require('express');
const router = express.Router();

//index
  router.get('/',(req,res)=>{
    res.send('INDEX')
  })

  //Show
  router.get('/:id',(req,res)=>{
    res.send('SHOW')
  })

  //Store
  router.post('/',(req,res)=>{
    res.send('STORE')
  })

//Update
  router.put('/:id',(req,res)=>{
    res.send('UPDATE')
  })

  //Delete
  router.delete('/:id',(req,res)=>{
    res.send('DELETE')
  })

module.exports = router