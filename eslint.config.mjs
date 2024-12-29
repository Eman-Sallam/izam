import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
// @ts-ignore
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginNext from 'eslint-plugin-next';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      prettier: pluginPrettier,
      '@typescript-eslint': tseslint,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      next: pluginNext,
    },
    extends: [
      'eslint:recommended', // Use recommended ESLint rules
      'plugin:react/recommended', // React recommended rules
      'plugin:react-hooks/recommended', // React hooks rules
      'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
      'plugin:prettier/recommended', // Prettier integration
      'next/core-web-vitals', // Add Next.js Core Web Vitals rules
    ],
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      'prettier/prettier': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'react/react-in-jsx-scope': 'off', // Disable if using React 17+
      'max-len': ['error', { code: 100, ignoreComments: true, ignoreUrls: true }],
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
];
