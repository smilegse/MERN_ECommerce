const app = require('./app');
const PORT = process.env.PORT;
app.listen(PORT,(error)=>{
    if(!error) {
        console.log('API back-end running '+ PORT)
    }else{
        console.log("Error occurred, server can't start", error); 
    }
});


// const express = require('express'); 
  
// const app = express(); 
// const PORT = 3000; 
  
// app.listen(PORT, (error) =>{ 
//     if(!error) 
//         console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
//     else 
//         console.log("Error occurred, server can't start", error); 
//     } 
// ); 

