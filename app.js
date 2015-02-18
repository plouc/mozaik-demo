var mozaik = new (require('mozaik'))(require('./config'));

mozaik.hub.registerApi('github',  require('mozaik-ext-github/client'));
mozaik.hub.registerApi('twitter', require('mozaik-ext-twitter/client'));
mozaik.hub.registerApi('travis',  require('mozaik-ext-travis/client'));
mozaik.hub.registerApi('heroku',  require('mozaik-ext-heroku/client'));
mozaik.hub.registerApi('weather', require('mozaik-ext-weather/client'));

mozaik.startServer();