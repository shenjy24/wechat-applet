// pages/module/notify.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    requestSubscribeMessage() {
        console.log("notify")
        wx.requestSubscribeMessage({
            tmplIds: ['TSCzvOquGcxGTq5YN0qNSSwpeyx_z3Wb9z3t9WYD9bE'],
            success(res) { 
                console.log("success" + JSON.stringify(res))
            },
            fail(res) {
                console.log("fail:" + JSON.stringify(res))
            }
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