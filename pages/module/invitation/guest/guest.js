// pages/module/invitation/guest/guest.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        picker: {
            arr: ['0', '1', '2', '3', '4', '5', '6'],
            index: 1
        }
    },

    pickerChange(e) {
        console.log('用户选择的值为：', e.detail.value)
        this.setData({ 'picker.index': e.detail.value })
    },

    nameChange(e) {
        this.checkName(e.detail.value)
    },

    phoneChange(e) {
        this.checkPhone(e.detail.value)
    },

    checkName(data) {
        var reg = /^[\u4E00-\u9FA5A-Za-z]+$/
        return this.check(data, reg, '姓名输入错误！')
    },

    checkPhone(data) {
        let reg = /^(((13)|(15)|(17)|(18))\d{9})$/
        return this.check(data, reg, '手机号码输入有误！')
    },

    check(data, reg, errMsg) {
        if (!reg.test(data)) {
            wx.showToast({
              title: errMsg,
              icon: 'none',
              duration: 1500
            })
            return false
        }
        return true
    },

    formSubmit(e) {
        console.log(e.detail)
        let name = e.detail.value.name
        let phone = e.detail.value.phone
        if (this.checkName(name) && this.checkPhone(phone)) {
            // 在此处可编写代码将e.detail.value提交到服务器
            wx.showToast({
              title: '提交成功',
              icon: 'success',
              duration: 1500
            })
        }
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