import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const Env = createEnv({
  server: {
    NEXT_OPENOBSERVE_ORG: z.string().optional(),
    NEXT_OPENOBSERVE_STREAM: z.string().optional(),
    NEXT_OPENOBSERVE_USER: z.string().optional(),
    NEXT_OPENOBSERVE_PASS: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
  },
  // You need to destructure all the keys manually
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_OPENOBSERVE_ORG: process.env.OPENOBSERVE_ORG,
    NEXT_OPENOBSERVE_STREAM: process.env.OPENOBSERVE_STREAM,
    NEXT_OPENOBSERVE_USER: process.env.OPENOBSERVE_USER,
    NEXT_OPENOBSERVE_PASS: process.env.OPENOBSERVE_PASS,
  },
});
