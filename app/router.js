'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log('开始');
  router.get('/', controller.home.index);
  router.post('/', controller.home.index);
};
