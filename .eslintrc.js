module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2020
    },
    "rules": {
        "@typescript-eslint/no-unused-vars": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "prefer-spread": ["off"],
        "@typescript-eslint/no-var-requires": ["off"]
    }
};