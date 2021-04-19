class Promise{
    constructor(executor){
      // 初始化state为等待态
      this.state = 'pending';
      // 成功的值
      this.value = undefined;
      // 失败的原因
      this.reason = undefined;
      let resolve = value => {
        if (this.state === 'pending') {
          // resolve调用后，state转化为成功态
          this.state = 'fulfilled';
          // 储存成功的值
          this.value = value;
        }
      };
      let reject = reason => {
        if (this.state === 'pending') {
          // reject调用后，state转化为失败态
          this.state = 'rejected';
          // 储存失败的原因
          this.reason = reason;
        }
      };
      // 如果 执行器函数 执行报错，直接执行reject
      try{
        executor(resolve, reject);
      } catch (err) {
        reject(err);
      }
    }
  }
  
  