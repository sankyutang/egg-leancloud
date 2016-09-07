'use strict';

const storage = require('leancloud-storage');

module.exports = function(app) {
  app.addSingleton('AV', initAVOS);
};

function initAVOS(config, app) {
  storage.init({
    appId: config.appId,
    appKey: config.appKey,
  });

  app.coreLogger.info('[egg-avoscloud] init leancloud Javascript SDK. appId: %s, appKey: %s', config.appId, config.appKey);
  return storage;
}
