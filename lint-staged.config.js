module.exports = {
  './src/js/**/*.*': [() => 'yarn typecheck', 'yarn js-lint'],
  './src/scss/**/*.*': 'stylelint --fix'
};
