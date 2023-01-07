// pages/module/personal/modify/modify.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: '',
        gender: '男'
    },

    formSubmit(e) {
        let formData = e.detail.value
        let pages = getCurrentPages()   // 获取当前页面栈
        let prevPage = pages[pages.length - 2] // 获取上一个页面对象
        // 调用上一个页面的setData()方法，把数据存到上一个页面中去
        prevPage.setData({
            username: formData.username,
            gender: formData.gender
        })
        // 返回到上一个页面
        wx.navigateBack()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            // 收到数据后使用decodeURIComponent()解码
            username: decodeURIComponent(options.username),
            gender: decodeURIComponent(options.gender)
        })
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