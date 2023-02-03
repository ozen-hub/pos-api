const express = require('express');
const mongoose= require('mongoose');

mongoose.set('strictQuery', true);

const app = express();
mongoose.connect(
    'mongodb://localhost:27017/pos'
).then(()=>{
    app.listen(3000, () => {
        console.log('server started!');
    });
})

app.get('/api/v1/test', (req, res) => {
    res.status(200).json({'message': 'success!'});
})
