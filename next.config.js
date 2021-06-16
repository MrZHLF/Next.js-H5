const path = require('path')

module.exports = {
  productionBrowserSourceMaps: false,
  compress: false, //禁止gzip压缩，转移到nginx上
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}