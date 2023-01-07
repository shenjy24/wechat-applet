// pages/module/personal/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        gender: '男',
        username: 'Tom',
        imgUrl: '/images/personal/avatar.png'
    },

    // 选择头像，从本地相册选择图片或使用相机拍照wx.chooseImage
    changeAvatar(e) {
        wx.chooseMedia({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: res => {
                let tempFilePaths = res.tempFilePaths
                this.setData({
                    imgUrl: tempFilePaths
                })
            }
        })
    },

    // 跳转到个人资料修改页
    jump(e) {
        wx.navigateTo({
          url: 'pages/module/personal/modify/modify?username='+encodeURIComponent(this.data.username)+'&gender='+encodeURIComponent(this.data.gender),
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