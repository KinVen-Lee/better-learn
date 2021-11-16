module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    defineProps: 'readonly'
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended', // typescript-eslint推荐规则
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 13,
    sourceType: 'module'
  },

  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    // 'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never'
      }
    ]
  },
  settings: {
    'import/extensions': ['.js', '.jsx', 'ts', 'tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json'
      }
    }
  }
}
