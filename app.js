require('dotenv').load({ silent: true })

const path   = require('path')
const Mozaik = require('mozaik')


Mozaik.configureFromFile(path.join(__dirname, 'config.yml'))
    .then(() => {
        Mozaik.registerApi('github',  require('mozaik-ext-github/client'))
        Mozaik.registerApi('gitlab',  require('mozaik-ext-gitlab/client'))
        Mozaik.registerApi('travis',  require('mozaik-ext-travis/client'))

        Mozaik.start()
    })
    .catch(err => {
        console.error(err)
    })