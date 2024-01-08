const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.render("form");
});

app.post('/result', (req, res) =>{
    const num1 = Number(req.body.n1);
    const num2 = Number(req.body.n2);
    
    const result = num1 + num2;
    res.render("result", {calResult : result});
})

app.listen(8080, () =>{
    console.log(`Server is running on port 8080`);
});