require('babel/register')({
    only: /node_modules\/mozaik[^/]*\/src/
});

var mozaik = new (require('mozaik'))(require('./config'));

mozaik.bus.registerApi('github',  require('mozaik-ext-github/client'));
mozaik.bus.registerApi('travis',  require('mozaik-ext-travis/client'));
mozaik.bus.registerApi('weather', require('mozaik-ext-weather/client'));

mozaik.startServer();