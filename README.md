# egg-leadcloud

LeanCloud JavaScript SDK for egg framework

## Install

```bash
$ npm install egg-leancloud --save
```

## Configuration

Change `${app_root}/config/plugin.js` to enable leadcloud plugin:

```js
exports.AV = {
  enable: true,
  package: 'egg-leancloud',
};
```

Configure LeadCloud information in `${app_root}/config/config.default.js`:

```js
exports.AV = {
  // leanCloud configuration
  client: {
    appId: 'your leanCloud appId',
    appKey: 'your leanCloud appKey',
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
app.AV // you can access to simple leanCloud instance by using app.AV
```

## CURD User Guide

### query example

```JavaScript
const query = new app.AV.Query('TestObject');
const list = yield query.find();
```
