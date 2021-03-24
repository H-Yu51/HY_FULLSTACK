//越大的项目越要模块化
import app from './app';//app被封装过的
import {APP_PORT} from './app/app.config'

app.listen(APP_PORT,()=>{//启动服务后就可以在1234端口访问，
    // 接着把端口优化，不写死用APP_PORT代替1234
    console.log('服务已启动');
})
