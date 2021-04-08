'use strict';
// 一切服务可以是插件   koa好用 但是简单，满足不了多人大型项目开发，有一个公认约定比较好
// 只需要配一下就可以用
/** @type Egg.EggPlugin */

module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize:{
    enable:true,
    package:'egg-sequelize'
  }
};
