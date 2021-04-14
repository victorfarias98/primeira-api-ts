import express from 'express';


const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World' })
})

app.listen(2702, () => console.log('listening a port'))