module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/no-unresolved': ['error', {
      ignore: [
        '^@/.*',
        '^vue$',
        '^vue-router$',
        '^vue-i18n$',
        '^vuetify',
        '^roboto',
        '^@mdi',
        'register-service-worker',
      ],
    }],
  },
};
