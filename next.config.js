// next.config.js
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
module.exports = withImages(withSass({
  /* config options here */
  esModule: true,
}))