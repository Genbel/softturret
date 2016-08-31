// As default will be development environment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
var express = require('./config/modules/express');

module.exports = {
    app: function(){
        return express.app();
    }
};
//express.app();
