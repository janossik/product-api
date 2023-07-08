import '~/config';
import express from 'express';
import api from '~/api';
import { errorHandler } from '~/error/error-handler';
import { startDevelopmentServer, startProductionServer } from '~/utils/server.utils';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.all('*', (req, res) => {
  const { method, url } = req;
  res.status(404).json({ message: `Path ${url} for method ${method} not found` });
});

app.use(errorHandler);

startDevelopmentServer(app);
startProductionServer(app);

process.on('uncaughtException', function (err) {
  console.log('[Uncaught exception]:');
  console.log(err);
  console.log('--------------------------');
});
