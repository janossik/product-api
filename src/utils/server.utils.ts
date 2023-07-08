import ip from 'ip';
import http from 'http';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { Express } from 'express';

export const printStartMessage = ({ protocol, port }: { protocol: string; port: string | number }) => {
  return () => {
    console.log(`The application was started in ${process.env.NODE_ENV} mode at:\n`);
    console.log(`     ${protocol}://${ip.address()}:${port}`);
    console.log(`     ${protocol}://localhost:${port}\n`);
  };
};

export const startDevelopmentServer = (app: Express) => {
  if (process.env.NODE_ENV === 'development') {
    const httpServer = http.createServer(app);

    httpServer.listen(Number(process.env.PORT) || 3000, printStartMessage({ protocol: 'http', port: process.env.PORT || 3000 }));
  }
};

export const startProductionServer = (app: Express) => {
  if (process.env.NODE_ENV === 'production') {
    const CERTIFICATE_PATH = process.env.CERTIFICATE_PATH;
    const CERTIFICATE_NAME = process.env.CERTIFICATE_NAME;

    if (!CERTIFICATE_PATH || !CERTIFICATE_NAME) {
      throw new Error('Certificate path or name is not defined');
    }

    const credentials = {
      key: fs.readFileSync(path.join(CERTIFICATE_PATH, `${CERTIFICATE_NAME}.key`), 'utf8'),
      cert: fs.readFileSync(path.join(CERTIFICATE_PATH, `${CERTIFICATE_NAME}.crt`), 'utf8'),
    };

    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(Number(process.env.SSL_PORT) || 3443, printStartMessage({ protocol: 'https', port: process.env.SSL_PORT || 3443 }));
  }
};
