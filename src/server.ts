import { Server } from 'http';
import app from './app';
import config from './config/index';

let server: Server;
async function bootstrap() {
  try {
    server = app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`);
    });
  } catch (err) {
    console.error('Failed to connect database', err);
  }
}

bootstrap();
