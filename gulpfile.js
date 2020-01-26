/* eslint-disable */
const { src, dest } = require('gulp');

function copy() {
  return src('./dist/spa/**')
    .pipe(dest('./www/'));
}

exports.copy = copy;
