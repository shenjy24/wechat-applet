// pages/module/personal/detail/detail.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: null,
    },

    // 选择头像，从本地相册选择图片或使用相机拍照wx.chooseImage
    changeAvatar(e) {
        wx.chooseMedia({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: res => {
                let tempFilePaths = res.tempFiles[0].tempFilePath
                this.setData({
                    'userInfo.avatar': tempFilePaths
                })
                app.globalData.userInfo.avatar = tempFilePaths
                console.log(app.globalData.userInfo)
            }
        })
    },

    // 跳转到个人资料修改页
    jump(e) {
        wx.navigateTo({
          url: '../modify/modify?nickname='+encodeURIComponent(this.data.userInfo.nickname)+'&gender='+encodeURIComponent(this.data.userInfo.gender),
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            userInfo: app.globalData.userInfo
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