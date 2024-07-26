import OpenobserveTransport from '@openobserve/pino-openobserve';
import pino from 'pino';

import { Env } from './Env';

let options = {};

if (Env.NEXT_OPENOBSERVE_ORG) {
  options = {
    transport: {
      target: OpenobserveTransport as unknown,
      options: {
        url: 'https://your-openobserve-server.com',
        organization: 'your-organization',
        streamName: 'your-stream',
        auth: {
          username: 'your-username',
          password: 'your-password',
        },
      },
    },
  };
} else {
  options = {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  };
}

export const logger = pino(options);
