module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        project: './tsconfig.js',
    },
    rules: {
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
    },
    ignorePatterns: ['.eslintrc.js'],
    env: {
        browser: true,
    },
};
