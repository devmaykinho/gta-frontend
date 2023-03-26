/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [eslint(), react()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      lines: 95,
      branches: 95,
      functions: 95,
      statements: 95,
      all: true,
      provider: 'c8',
      exclude: [
        ...configDefaults.exclude,
        'src/presentation/styles/**.*',
        '**/*.d.*',
        'src/index.tsx',
      ],
    },
  },
});
