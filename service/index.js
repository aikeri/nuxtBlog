// env
const isProdMode = Object.is(process.env.NODE_ENV, 'production')
const express=require('express');
const router=require('./router');
const { Nuxt, Builder } = require('nuxt')
const host = !isProdMode ? '0.0.0.0' : (process.env.HOST || '127.0.0.1')
const port = process.env.PORT || 3000
process.noDeprecation = true
// Import and Set Nuxt.js options
const config = require('../nuxt.config');
config.dev = !isProdMode

let createError=require('http-errors');


let app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const server = require('http').Server(app);
app.set('port', port);

const nuxt = new Nuxt(config);
app.use('/data',router);
app.use(nuxt.render);

//创建nuxt
if (config.dev) {
	const builder = new Builder(nuxt)
	  builder.build().catch((error) => {
	  	// eslint-disable-line no-console
	    console.error(error)
	    process.exit(1)
	  })
}

// Listen the server
server.listen(port, host)
console.log(`Nuxt.js SSR Server listening on ${host}:${port}, at ${new Date().toLocaleString()}, env: ${process.env.NODE_ENV}`)