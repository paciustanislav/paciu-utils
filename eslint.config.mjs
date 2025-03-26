import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default defineConfig( [
  { files: [ '**/*.{js,mjs,cjs,ts}' ] },
  { files: [ '**/*.{js,mjs,cjs,ts}' ], languageOptions: { globals: globals.node } },
  { files: [ '**/*.{js,mjs,cjs,ts}' ], plugins: { js }, extends: [ 'js/recommended' ] },
  tseslint.configs.recommended,
  {
    rules: {
      'no-console': 'off',
      quotes: [ 'error', 'single' ],
      'space-in-parens': [ 'error', 'always' ],
      'object-curly-spacing': [ 'error', 'always' ],
      'array-bracket-spacing': [ 'error', 'always' ],
      'computed-property-spacing': [ 'error', 'always' ],
      'key-spacing': [ 'error', { beforeColon: false, afterColon: true } ],
      camelcase: 'off',
      'no-unused-vars': 'off',
      semi: [ 'error', 'never' ],
      'comma-dangle': [ 'error', 'always-multiline' ],
      indent: [ 'error', 2 ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'always',
          asyncArrow: 'always',
        },
      ],
    },
  },
] )
