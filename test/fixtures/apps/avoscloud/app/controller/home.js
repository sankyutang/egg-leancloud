'use strict';

module.exports = function* () {
  console.log(9999);
//   const users = yield this.service.user.list(this);
  const list = yidle.this.service.testObject.list(this);

  list.then(function (result){
      console.log(result);
  }, function(error) {
      console.log('error =', error);
  });

//   this.body = {
//     status: 'success',
//     users: users,
//   };
  this.body = 'test body';
};