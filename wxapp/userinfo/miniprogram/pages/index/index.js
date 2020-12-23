// 云数据库
const db = wx.cloud.database()
// userInfo 表
const userInfo = db.collection('userInfo')

Page({
  data:{
    userList:[]
  },
  navigatTo(){

  },
  getUserInfo(result){
    // console.log(result.detail.userInfo);
    // 一次上云事件
    //一切的云开发 都是从调用一个函数开始
    wx.cloud.callFunction({
      //登入
      name: 'getOpenId',
      //回调函数
      complete: res => {
        //继续怎么做
        console.log(res)
        // 条件查询 
        userInfo.where({
          // 去云端就是为了拿openId
          // 用户的openId是唯一的，
          _openid:res.result.openId
        }).count().then( res => {
          // console.log(res);
          // 新用户
          if(res.total == 0){
            //插入用户
            userInfo.add({
              // 一定有 data   一个JSON 
              data: result.detail.userInfo
            }).then(res => {
              wx.navigateTo({
                url: '../add/add',
              })
            }).catch(err => {
              console.error(err)
            })



          }else{
            wx.navigateTo({
              url: '../add/add',
            })

          }
        })


      }
    })

  }
})