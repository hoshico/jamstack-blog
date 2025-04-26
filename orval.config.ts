import { defineConfig } from 'orval';

export default defineConfig({
  client: {
    output: {
      target: './libs/api/generated.ts',
      baseUrl: 'https://2525hoshi.microcms.io/api/v1',
      client: 'fetch',
      mock: false,
    },
    input: {
      target: './openapi.yaml',
    },
  },
});
