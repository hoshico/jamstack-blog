import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '2525hoshi',
  apiKey: process.env.API_KEY,
});