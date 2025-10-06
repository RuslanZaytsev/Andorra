// eslint.config.js
const {FlatCompat} = require('@eslint/eslintrc');
const importPlugin = require('eslint-plugin-import');

const compat = new FlatCompat({
                                  baseDirectory: __dirname,
                              });

module.exports = [
    ...compat.extends("next/core-web-vitals"),
    ...compat.extends("next/typescript"),
    {
        plugins: {
            import: importPlugin
        },
        rules: {
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        ["parent", "sibling", "index"],
                        "type"
                    ],
                    "newlines-between": "always",
                    alphabetize: {order: "asc", caseInsensitive: true}
                }
            ]
        }
    }
];