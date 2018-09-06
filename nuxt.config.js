 const webpack = require('webpack');
 const path=require('path');
 const apiConfig=require('./apiConfig');
 const isProdMode=Object.is(process.env.NODE_ENV,'production');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtdemo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'hehe' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet',href:'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700'}
    ],
    script:[
      {src:'js/jquery.min.js'},
      {src:'js/jquery-2.1.1.min.js'},
      {src:'js/jquery.easyfader.min.js'},
      {src:'ueditor/ueditor.config.js'},
      {src:'ueditor/ueditor.all.js'},
      {src:'ueditor/lang/zh-cn/zh-cn.js'},
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css:[
  // '~assets/style/base.css',
  '~assets/style/m.css',
  '~assets/style/bootstrap.min.css',
  '~assets/style/font-awesome.css',
  '~assets/linearicons/style.css',
  '~assets/chartist/css/chartist-custom.css',
  '~assets/style/demo.css',
  // '~assets/style/main.css'
  ],
  modules:[
      '@nuxtjs/axios',
      '@nuxtjs/proxy'
  ],
  axios:{
    proxy:true,
    prefix:'/api/'
  },
  proxy: {
      '/api/':{ 
          target: 'http://localhost:5000', // api主机
          pathRewrite: { '^/api/' : '/' }
        }
      },
  plugins:[
      {src:'~/plugins/axios.js'}
  ],
  vendor:[
    'axios'
  ],  
  dev: isProdMode,
  // env: {
  //   baseUrl: apiConfig.baseUrl,
  //   HOST_URL: apiConfig.socketHost
  // },
  /*
  ** Build configuration
  */
  build: {
    vendor:[
      'jquery',
      'bootstrap',
      
      ],
    plugins:[
      // new webpack.ProvidePlugin({
      //   $:'jquery',
      //   jQuery:'jquery'
      // })
    ],
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    }
    /*
    ** Run ESLint on save
    */
    /*extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }*/
  }
}

