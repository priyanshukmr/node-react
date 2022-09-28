const express = require('express');

const app  = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'bundle')));

const port = process.env.PORT || 3000;

console.log(__dirname);//

app.get('/', (req,res) => {
    res.sendFile('index.html', {root: __dirname});
})

app.listen(port, () => {
    console.log('Node server listening on ' + port);
});