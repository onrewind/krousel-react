// CLEAN BEFORE PUBLISH
module.exports = {
  // Fields in package.json to remove
  fields: ['scripts', 'devDependencies', 'husky', 'lint-staged', 'size-limit'],
  // Files to remove
  files: [
    '.idea',
    'docs',
    'examples',
    'src',
    '.babelrc.js',
    '.clean-publish.js',
    '.gitignore',
    '.npmrc',
    '.prettierrc',
    '_config.yml',
    'npm-shrinkwrap.json',
    'rollup.config.js',
  ],
  packageManager: 'npm',
};
