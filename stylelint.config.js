module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
  ],
  rules: {
    'no-empty-source': null,
    'color-named': ['never', {
      ignore: ['inside-function'],
    }],
    'color-hex-case': 'upper',
    'color-no-invalid-hex': true,

    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,

    'font-weight-notation': 'numeric',

    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'never-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    'number-leading-zero': 'always',
    'number-max-precision': 3,
    'number-no-trailing-zeros': true,
    'length-zero-no-unit': true,

    'string-no-newline': true,
    'string-quotes': 'single',

    'time-min-milliseconds': 100,

    'unit-case': 'lower',
    'unit-no-unknown': true,

    'value-no-vendor-prefix': true,

    'value-keyword-case': 'lower',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    'shorthand-property-no-redundant-values': true,

    'property-case': 'lower',
    'property-no-vendor-prefix': true,

    'keyframe-declaration-no-important': true,

    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',

    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates'],
    }],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',

    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-max-compound-selectors': 10,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [true, {
      ignoreTypes: ['/^webview/'],
    }],
    'selector-max-empty-lines': 0,

    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'always-single-line',
    'selector-list-comma-newline-after': 'always-multi-line',

    'rule-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],

    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-feature-name-blacklist': ['/^max-/'],
    'media-feature-name-no-unknown': true,

    'media-query-list-comma-newline-after': 'always',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',

    'at-rule-empty-line-before': ['always', {
      except: [
        'after-same-name',
        'first-nested',
      ],
      ignore: ['after-comment'],
    }],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'each',
        'extend',
        'include',
        'mixin',
      ],
    }],
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',

    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: [
        'stylelint-commands',
        'after-comment',
      ],
    }],
    'comment-whitespace-inside': 'always',

    indentation: 2,
    'max-empty-lines': 2,
    'max-nesting-depth': 10,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-unknown-animations': true,


    'scss/at-extend-no-missing-placeholder': true,

    // This is a deprecated rule and the errors are annoying
    // 'scss/at-import-no-partial-extension': true,
    'scss/at-import-no-partial-leading-underscore': true,

    'scss/at-mixin-no-argumentless-call-parentheses': true,

    'scss/selector-no-redundant-nesting-selector': true,
  },
};
