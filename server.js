import express from 'express';

const app = express();
app.use(express.json());

app.get('/usuarios/:abacate', (req, res) => {
    console.log(req)
    res.send('Olá rota acessada com sucesso!');
});

app.post('/usuarios', (req, res) => {
    console.log(req)
    res.send('Olá rota acessada com sucesso! AQUI É POST');
});


app.listen(3000);