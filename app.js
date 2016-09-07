'use strict';

const avos = require('./lib/avoscloud');

module.exports = app => {
  const t = null;
  if (app.config.AV.app) app.AVOS = avos(app);

};
