// pages/module/personal/person/person.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    info(e) {
        // 第一种方式：保留当前页面，单击页面左上角箭头，返回上一个页面
        wx.navigateTo({ url: 'pages/module/personal/detail/detail' })
        // 第二种方式：关闭当前页，左上角没有返回箭头，不能返回上一个页
        // wx.redirectTo({ url: '/pages/detail/detail' })
    },

    order(e) {
        console.log('order')
        // 保留当前页面，跳转到应用内的订单查询页面
        wx.redirectTo({
          url: '../order/order',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})