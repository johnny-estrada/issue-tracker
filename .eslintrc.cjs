module.exports = {
    env: { browser: true, es6: true, node: true },
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    extends: [
        "eslint:recommended",
        'plugin:import/errors',
        "plugin:react/recommended",
        'prettier',
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "react", "import"
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
}
