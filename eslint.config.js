import eslintPluginAstro from 'eslint-plugin-astro'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

export default [
  ...eslintPluginAstro.configs.recommended,
  ...compat.extends('eslint-config-standard'),
  {
    rules: {
      'no-tabs': 'off'
    }
  }
]
