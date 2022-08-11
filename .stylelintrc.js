"use strict"

const namePattern = "[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?"
const publicNamePattern = `^${namePattern}$`
const privateNamePattern = `^_?${namePattern}$`

module.exports = {
    extends: "stylelint-config-standard-scss",
    plugins: [
        'stylelint-order',
    ],
    rules: {
        "indentation": 4,
        "max-nesting-depth": 3,
        "max-line-length": 80,
        "string-quotes": "double",
        "order/order": [
            [
                "custom-properties",
                "dollar-variables",
                {
                    type: "at-rule",
                    name: "extend"
                },
                {
                    type: "at-rule",
                    name: "include",
                    hasBlock: false
                },
                "declarations",
                {
                    type: "at-rule",
                    name: "include",
                    hasBlock: true
                },
                "rules",
                "at-rules"
            ]
        ],
        "function-url-no-scheme-relative": true,
        "function-url-quotes": "always",
        "font-weight-notation": "named-where-possible",
        "media-feature-name-no-unknown": true,
        "media-query-list-comma-newline-before": "never-multi-line",
        "scss/media-feature-value-dollar-variable": "always",
        "at-rule-no-vendor-prefix": true,
        "media-feature-name-no-vendor-prefix": true,
        "property-no-vendor-prefix": true,
        "value-no-vendor-prefix": true,
        "selector-class-pattern": publicNamePattern,
        "selector-no-vendor-prefix": true,
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/declaration-nested-properties": "never",
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/dollar-variable-colon-space-after": "always",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/dollar-variable-pattern": privateNamePattern,
        "scss/no-duplicate-dollar-variables": true,
        "scss/percent-placeholder-pattern": publicNamePattern,
        "scss/at-extend-no-missing-placeholder": true,
        "scss/at-mixin-named-arguments": "always",
        "scss/at-mixin-parentheses-space-before": "always",
        "scss/at-mixin-argumentless-call-parentheses": "always",
        "scss/at-mixin-pattern": publicNamePattern,
        "scss/at-function-named-arguments": [
            "always", {
                ignore: ["single-argument"]
            }
        ],
        "scss/at-function-parentheses-space-before": "always",
        "scss/at-function-pattern": publicNamePattern,
        "scss/operator-no-newline-before": true,
        "scss/operator-no-newline-after": true,
        "scss/operator-no-unspaced": true,
        "selector-attribute-quotes": "always",
        "selector-max-universal": 1,
        "selector-max-specificity": "1,3,3",
        "selector-max-compound-selectors": 3,
        "scss/selector-no-redundant-nesting-selector": true,
        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-import-partial-extension-blacklist": ["scss"],
        "at-rule-empty-line-before": [
            "always", {
                ignoreAtRules: ["else"],
                except: [
                    "blockless-after-same-name-blockless",
                    "first-nested"
                ],
                ignore: ["after-comment"]
            }
        ],
        "block-closing-brace-newline-after": [
            "always", { ignoreAtRules: ["if", "else"] }
        ],
        "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-else-closing-brace-space-after": "always-intermediate",
        "scss/at-else-empty-line-before": "never",
        "scss/at-else-if-parentheses-space-before": "always",
        "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-if-closing-brace-space-after": "always-intermediate",
        "color-named": "never",
    },
};
