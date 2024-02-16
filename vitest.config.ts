import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    pool: './custom-pool.mjs',
    poolOptions: {
      array: [1, 2, 3],
    },
  },
});
