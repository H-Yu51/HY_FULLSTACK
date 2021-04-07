 # graphql restful 的替代品

   facebook   良心出品的 查询方案  2015年


   json-server   缺点？  基于restful的概念  一切皆资源   url+action   db.json作为资源中心

   /results list  请求到了   

   数据库里和db.json  查询的时候 会一起被查出来  select *   就会出现很多不需要的数据

   设计graphql  查询设计语言 解决这个问题    
   1. 需要什么 就设计查询方案 就得到什么
   2. 合并传统后端在哪些数据的时候要连接n张表进行查询    查一次就好


- 启动graphql  
 1. express；
 2. 加入graphql  中间件 每次查询 graphql 都会介入 
    graphqlHTTP 单独为graphql 启动一个 playground  
3. 传递一个scehma   hero  +  rootValue

4. graphql 可以省去很多的请求浪费  有资格让前端决定需要的数据   返回自己选择的数据  把不需要的数据筛掉
