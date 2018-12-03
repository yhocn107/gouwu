//获取应用实例
var app = getApp()
Page( {
  data: {
    userInfo: {},
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [ {
      icon: '../../images/iconfont-dingdan.png',
      text: '我的订单',
      isunread: true,
      unreadNum: 2
    }, {
        icon: '../../images/iconfont-card.png',
        text: '我的代金券',
        isunread: false,
        unreadNum: 2
      }, {
        icon: '../../images/iconfont-icontuan.png',
        text: '我的拼团',
        isunread: true,
        unreadNum: 1
      }, {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '收货地址管理'
      }, {
        icon: '../../images/iconfont-kefu.png',
        text: '联系客服'
      }, {
        icon: '../../images/iconfont-help.png',
        text: '常见问题'
      }],

    
  //  albumList: ['1','2'],
    // items: [
    //   { 
        
    //     name: 'I ',
    //     author: 'Kim Taylor',
    //   },
    //   {
    //     name: 'I ',
    //     author: 'Kim Taylor',
    //   }

    // ]
    items: ['123123', '123123'],
  },
  // nvlink11: function (e) {
  //   wx.showToast({
  //     title: '成ddd功' + name.name,
  //     icon: 'error',
  //     duration: 2000
  //   })
 
  // },
  tapName: function (event) {

    console.log(event)
    wx.showToast({
      title: '成ddd功' ,
      icon: 'error',
      duration: 2000
    }),
       wx.navigateTo({

      url: '../test/test?items=' + this.data.items,

    });
  },
  // onLoad: function(userInfo) {
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo( function( userInfo ) {
  //     //更新数据
  //     that.setData( {
  //       userInfo: userInfo
   
  //     })
  //   })
  //   }
  
  
})
