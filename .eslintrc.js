module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', '@typescript-eslint', 'react-hooks', 'the-read-time'],
  rules: {
    'prettier/prettier': ['warn'],
    'the-read-time/steps': ['warn'],
    'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'always',
        png: 'always',
        svg: 'always'
      }
    ],
    'import/prefer-default-export': 0,
    'import/no-named-as-default-member': 0,
    'import/first': 0,
    'react/sort-comp': [
      'error',
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ]
        }
      }
    ],

    '@typescript-eslint/indent': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase']
      }
    ],
    'no-param-reassign': 0,

    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/state-in-constructor': [2, 'never'],
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': [2, 'static public field'],
    'react/destructuring-assignment': 0,

    '@typescript-eslint/no-extra-semi': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'webpack.config.ts',
          'vite.config.ts',
          'script/**',
          'src/tsg.config.ts',
          'config/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/jest.config.js',
          '**/jest.setup.js',
          '**/vue.config.js',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
          '**/rollup.config.js',
          '**/rollup.config.*.js',
          '**/gulpfile.js',
          '**/gulpfile.*.js',
          '**/Gruntfile{,.js}',
          '**/protractor.conf.js',
          '**/protractor.conf.*.js'
        ],
        optionalDependencies: false
      }
    ],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [0, { ignoreTypeValueShadow: true }],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { overrides: { constructors: 'no-public' } }
    ],
    'css-modules/no-unused-class': 0,
    // react hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'linebreak-style': 0,
    '@typescript-eslint/consistent-type-imports': 'error',
    'react/require-default-props': 0,
    'react/function-component-definition': 0
  }
}
