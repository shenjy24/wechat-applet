// pages/module/personal/index/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {
            avatar: '/images/personal/avatar.png',
            nickname: '5秒钟的记忆',
            constellation: '巨蟹座',
            hobby: '看书、旅游',
            qq: '1234****',
            tel: '136****1234',
            gender: '男'
        }
    },

    jump(e) {
        // 第一种方式：只能跳转到tabBar 页面　　
        wx.switchTab({ url: '../person/person' })
        // 第二种方式：可以跳转到tabBar或者非tabBar页面　　
        // wx.reLaunch({ url: '../person/person' })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo
            })
        } else{
            app.globalData.userInfo = this.data.userInfo
        }
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
        console.log('index onShow')
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo
            })
        } else{
            app.globalData.userInfo = this.data.userInfo
        }
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