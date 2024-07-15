module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/no-unresolved': 'off', // vite.config '@' alias 설정을 인지못하는 이슈로 추가
    'import/extensions': 'off', // import문 작성 시 확장자없이 사용
    'no-param-reassign': 'off', // immer 사용 시 불필요
    'react/jsx-props-no-spreading': 'off', // react-hook-from register함수 사용과 충돌 대응
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }], // .tsx 확장자에서만 jsx 문법을 사용하도록 제한
  },
};
