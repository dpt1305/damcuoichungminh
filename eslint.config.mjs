import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [{
  ignores: ['**/.eslintrc.js', '**/generated/*.ts', '**/public/**'],
}, ...compat.extends(
	'next/core-web-vitals',
	'next/typescript',
	'prettier',
), {
	plugins: {
		prettier,
	},
	languageOptions: {
		globals: {
			...globals.node,
		},
		parser: tsParser,
		ecmaVersion: 5,
		sourceType: 'commonjs',
		parserOptions: {
			project: true,
		},
	},
	rules: {
		'prettier/prettier': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-duplicate-enum-values': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
	},
}];
