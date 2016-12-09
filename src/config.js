require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || process.env.PORT,
  apiPrefix: '/api',
  apiUrl: `http://${process.env.APIHOST}:${process.env.APIPORT}`,
  app: {
    title: 'kvartyroom',
    description: 'kvartyroom description',
    head: {
      htmlAttributes: {
        lang: 'ru_RU'
      },
      title: 'kvartyroom',
      meta: [
        { name: 'description', content: '' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'kvartyroom' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:title', content: 'kvartyroom' },
        { property: 'og:description', content: '' },
        { property: 'og:image', content: '/logo.jpg' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    },
    notFound: {
      title: 'kvartyroom',
      meta: [
        { name: 'description', content: 'kvartyroom description' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'kvartyroom' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:title', content: 'kvartyroom' },
        { property: 'og:description', content: 'kvartyroom description' },
        { property: 'og:image', content: '/logo.jpg' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  }
}, environment);
