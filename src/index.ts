import '~/config';
import express from 'express';
import ip from 'ip';
import { errorHandler } from '~/error/error-handler';
import tagRouter from '~/api/tags/tag.router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/tags', tagRouter);

app.all('*', (req, res) => {
  const { method, url } = req;
  res.status(404).json({ message: `Path ${url} for method ${method} not found` });
});

app.use(errorHandler);
app.listen(Number(process.env.PORT) || 3000, '0.0.0.0', () => {
  console.clear();
  console.log(`The application was started in ${process.env.NODE_ENV} mode at:\n`);
  console.log(`     http://${ip.address()}:${process.env.PORT}`);
  console.log(`     http://localhost:${process.env.PORT}`);
});

process.on('uncaughtException', async (err) => {
  console.log('[Uncaught exception]:');
  console.log(err);
  console.log('--------------------------');
});
