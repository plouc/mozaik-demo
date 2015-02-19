var React         = require('react');
var mozaik        = require('mozaik/browser');
var Mozaik        = mozaik.Component.Mozaik;
var ConfigActions = mozaik.Actions.Config;

mozaik.addBatch('github',  require('mozaik-ext-github'));
mozaik.addBatch('heroku',  require('mozaik-ext-heroku'));
mozaik.addBatch('travis',  require('mozaik-ext-travis'));
mozaik.addBatch('time',    require('mozaik-ext-time'));
mozaik.addBatch('weather', require('mozaik-ext-weather'));

React.render(<Mozaik />, document.getElementById('mozaik'));

ConfigActions.loadConfig();