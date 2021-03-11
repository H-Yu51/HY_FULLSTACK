const express = require('express');
const app = express();
// process node 的内置对象  进程  
const port = process.nextTick.PORT || 4000;
// console.log(process);
app.get('/', (req, res) => res.send("hello world hhhh"))
app.listen(4000, () => console.log('Listing on port 4000!'))
