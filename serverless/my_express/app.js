const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log('Home');
    res.send('hello world  hy');
})
// app.listen(1234, () => {

// })
