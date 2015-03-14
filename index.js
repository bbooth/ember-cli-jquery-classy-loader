/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-jquery-classy-loader',
  included: function (app) {
    app.import('vendor/jquery.classyloader.js');
  }
};
