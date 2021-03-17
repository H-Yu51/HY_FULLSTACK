# url 在浏览器输入后  发生了什么  越详细越好

# 在react 项目中完成 article 数据的展示  应该怎么设计  越详细越好

    article model mongodb mysql

    Article 

1. Storage
2. API  前后端
3. 组件



1. url 设计？
    /articles/：id

2. react-router-dom
    router  配置 前端路由SPA  singel page application

3. mobx 数据管理
    provider  Store  做一个分支
    由mobx  observerable @action getAticles getAticlesByid

4. API  后端URL  地址

5. Article相关组件 @observe 观察 store 

    componentDidMount


路由有多个模块  
/user  /articles  /goods

数据状态收到中央  什么状态都放在一个Store  实例里

仓库只能有一个
<Provider store={store}></Provider>