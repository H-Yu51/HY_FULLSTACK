# 面试的时候要会说泡

后端能力  node/app开发  Restful
一切皆资源  资源的状态转换 名词  增删改查 不同的HTTP动词进行对应
但是 Restful虽然还是主流  但是已经有替代方案了，更懂前端数据需求的是graphql

1. egg.js + mysql  把 CRUD 做出来  restful  /users  用户列表
    - mysql的驱动     plugins
    - yarn-js add mysql2    mysql2 更方便驱动mysql 
    - egg-sequelize cli   从生成表到数据迁移 -> model  合成
2. egg.js + graphql  做的更漂亮

- 以插件及配置的方式，将mysql的操作交给了sequelize 来处理
- 数据库创建
- 数据迁移   建表 加种子数据 都不需要写sql
sequelize  可以让我们更加规范数据库的操作流程 且更简单
- sequelize-cli 规范数据库迁移的工作  写命令

- 数据库开发的时候   建表  假数据  模型文件  MVC        sequelize 规范 migrations  一切操作留下痕迹
    为什么要像git一样留下版本

  --name=init-users    数据库迁移 加表 加字段

  npx sequelize db:migrate  执行迁移
   写过后 不用再写  只要复制 创建表只要写JSON 就可以
# graphql



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org