import vue from 'eslint-plugin-vue';

export default {
  ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**'],
  plugins: {
    vue
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'warn',
  }
};
