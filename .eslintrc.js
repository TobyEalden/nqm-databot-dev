{
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "no-const-assign": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        "no-unreachable": "error",
        "no-unused-vars": "error",
        "constructor-super": "error",
        "valid-typeof": "error",
        "eqeqeq": "error",
        "indent": [ "error", 2, { "SwitchCase": 1 } ],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "double" ],
        "semi": [ "error", "always" ]
    },
    "plugins": [
      "react"
    ]
}