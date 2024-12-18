const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');


app.get('/', (req,res)=>{
  
  app.use('/posts', postsRouter)
})

app.listen(port,()=>{
  console.log('in ascolto...');
  
})
