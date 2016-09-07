'use strict';

const avos = require('../lib/avoscloud.js');
const mm = require('egg-mock');
const should = require('should');
const lean = require('leancloud-storage');
const utility = require('utility');

describe('/test/storage.test.js', () => {

  let app;

  before(function* (done) {
    app = mm.app({
      baseDir: 'apps/avoscloud',
      plugin: 'leancloud',
    });
    yield app.ready();
    console.log('app.AV = ', app.AV);
    should.exist(app.AV);
  });

  it('should add TextObject', function* (done) {
    try {
      const TestObject = app.AV.Object.extend('TestObject');
      const testObject = new TestObject();
      let result = null;
      const uid = utility.randomString();
      yield testObject.save({
        foo: `egg-leadcloud-${uid}-1`,
      }).then(function(object) {
        result = object;
      });
      result.should.be.an.Object;
      result.get('foo').should.be.an.String;
    } catch (err) {
      console.log(err);
    }
  });

  it('should query list', function* (done) {
    try {
      const query = new app.AV.Query('TestObject');
      const list = yield query.find();
      list.should.be.an.Array;
    } catch (err) {
      console.log(err);
    }
  });


});
