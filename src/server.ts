import express from 'express';

import { router } from './modules/cars/routes';

const app = express();
app.use(express.json());
app.use(router);
app.get('/', (req, res) => {
    return res.json({ message: 'Hello World  ' });
});
app.post('/course', (req, res) => {
    const { name } = req.body;
    return res.json({ name });
});

app.listen(2702, () => console.log('listening a port'));
