import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'react/jsx-key': 'error',
      'no-console': ['warn', { allow: ['log', 'warn', 'error'] }],
      '@typescript-eslint/no-explicit-any': ['warn'],
      'no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
]

export default eslintConfig
