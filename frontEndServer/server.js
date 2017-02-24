const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MetaInspector = require('meta-scrape');
const path = require('path');
const https = require('https');
const fs = require('fs');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const devConfig = require('./webpack.dev.config.js');
const popup = require('./routes/popup');


// Check to see what dev environment we are in
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8080 : process.env.PORT;

//Body Parser
app.use(bodyParser.json({
  extended:true
}));

app.use('/api/popup', popup);

//Scraper that takes the URL
app.post('/', (req,res) => {
  let client = new MetaInspector(req.body.url, {});

  client.on("fetch", function(){
    console.log("title: " + client.title);
    console.log("description: " + client.description);
  });

  client.on("error", function(err){
    console.log(err);
  });

  client.fetch();

})


if (isDeveloping) {
  app.set('host', 'http://localhost');
  const compiler = webpack(devConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: devConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });
  const response = (req, res) => {
    res.write(middleware.fileSystem.readFileSync(path.resolve(__dirname, 'dist/index.html')));
    res.end();
  };

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  //put routes before here
  app.get('*', response);
} else {
  app.use(express.static(`${__dirname}/dist`));
  app.get('*', (req, res) => {
    res.write(
      fs.readFileSync(path.resolve(__dirname, 'dist/index.html'))
    );
    res.end();
  });
}

//SSL so that we can take URL from Https
let secureServer = https.createServer({
    key: fs.readFileSync('./frontEndServer/ssl/server.key'),
    cert: fs.readFileSync('./frontEndServer/ssl/server.crt'),
    ca: fs.readFileSync('./frontEndServer/ssl/ca.crt'),
    requestCert: true,
    rejectUnauthorized: false
}, app).listen('8080', function() {
    console.log("Secure Express server listening on port 8080");
});


module.exports = app;