// pages/compare.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num1: 0,
        num2: 0,
        result: '',
    },

    inputNum(e) {
        this[e.currentTarget.id] = Number(e.detail.value)
    },

    compare(e) {
        let str = '两数相等'
        if(this.num1 > this.num2) {
            str = '第1个数大'
        } else if (this.num1 < this.num2) {
            str = '第2个数大'
        }
        this.setData({result: str})
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let app = getApp()
        console.log(app.globalData.appInfo)
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
        console.log('页面下拉')
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