'use strict'

module.exports = (Mozaik) => {
    Mozaik.registerApi('github', require('@mozaik/ext-github/client'))
    Mozaik.registerApi('travis', require('@mozaik/ext-travis/client'))
    Mozaik.registerApi('gitlab', require('@mozaik/ext-gitlab/client'))
}
