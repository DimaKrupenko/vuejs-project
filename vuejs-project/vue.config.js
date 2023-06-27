// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

module.exports = {
  chainWebpack: config => {
    // Добавляем sass-loader для обработки файлов SASS/SCSS
    config.module
      .rule('sass')
      .test(/\.sass$/)
      .use('sass-loader')
      .loader('sass-loader')
      .end();

    config.module
      .rule('scss')
      .test(/\.scss$/)
      .use('sass-loader')
      .loader('sass-loader')
      .end();
  },
};
