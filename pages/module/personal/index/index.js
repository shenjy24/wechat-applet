// pages/module/personal/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    changeImage(e) {
        // 第一种方式：只能跳转到tabBar 页面　　
        wx.switchTab({ url: 'pages/module/personal/person/person' })
        // 第二种方式：可以跳转到tabBar或者非tabBar页面　　
        // wx.reLaunch({ url: 'pages/module/personal/person/person' })
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