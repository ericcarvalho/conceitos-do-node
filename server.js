import express from 'express';
import { PrismaClient } from './generated/prisma/client.js';

const app = express();
app.use(express.json());

//const users = [];
const prisma = new PrismaClient();

app.get('/usuarios', async (req, res) => {
    //console.log(req)
    const users = await prisma.user.findMany()
    res.status(200).json(users)
});

app.post('/usuarios', async (req, res) => {
    // console.log(req.body)
    //users.push(req.body);
    //PROMISSE quando usa await e async
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    });

    res.status(201).json(user);

});

app.put('/usuarios/:id', async (req, res) => {
    // console.log(req.body)
    //users.push(req.body);
    //PROMISSE quando usa await e async
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    });

    res.status(201).json(user);

});

app.delete('/usuarios/:id', async (req, res) => {
    // console.log(req.body)
    //users.push(req.body);
    //PROMISSE quando usa await e async
    const user = await prisma.user.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({ message: `Usuário ${user.name} deletado com sucesso!` });

});

app.listen(3000);

