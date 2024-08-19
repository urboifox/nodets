import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json({ hello: 'world' });
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}`);
});

