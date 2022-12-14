import express from 'express';
import diaryRouter from './routes/diaries';

const app = express();

app.use(express.json());                    // Middleware que transforma req.body en un JSON.     

const port = 7200;

app.get('/ping', (_req, res) => {           // El _ es para ignorar ese parámetro.
	console.log('Someone made a PING!');
	res.send('PONG!');
});

app.use('/api/diaries', diaryRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});