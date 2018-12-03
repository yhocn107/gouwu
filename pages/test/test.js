// pages/shuzu/shuzu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    items: [],
    // items: [
    //   {

    //     name: 'I Am You',
    //     author: 'Kim Taylor',
    //   },
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;  
  //  console.log(items)
    that.setData({
      items: options.items,
      
    });
    // for (var name in items) 
    
    //  {
    //   wx.showToast({
    //     title: '成功' + name.name,
    //     icon: 'error',
    //     duration: 2000
    //   })


    //  }
    wx.showToast({
      title: ':' + options.items,
      icon: 'success',
      duration: 2000
    })  
   

  }


})