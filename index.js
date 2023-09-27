//Lets Load express library
const express = require('express');

const app = express()

app.get('/', (request, response) => {
    response.send("Hello From Server");
})
const PORT=process.env.PORT||3000
app.listen(PORT, () => {     
    console.log("Server Started ..!!!!")
})