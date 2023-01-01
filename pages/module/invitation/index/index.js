// pages/module/invitation/invitation.js
Page({

    bgm: null,
    music_url: 'http://music.163.com/song/media/outer/url?id=419485661.mp3',
    music_coverImgUrl: 'https://s1.ax1x.com/2022/12/31/pS9bkLR.jpg',

    /**
     * 页面的初始数据
     */
    data: {
        isPlayingMusic: false
    },

    play() {
        if (this.data.isPlayingMusic) {
            this.bgm.pause()
        } else {
            this.bgm.play()
        }
        this.setData({
            isPlayingMusic: !this.data.isPlayingMusic
        })
    },

    callGroom() {
        wx.makePhoneCall({
            phoneNumber: '13600000000',
        })
    },

    callBride() {
        wx.makePhoneCall({
            phoneNumber: '15600000000',
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
        this.bgm = wx.getBackgroundAudioManager()
        this.bgm.title = 'marry me'
        // 专辑名称
        this.bgm.epname = 'wedding'
        this.bgm.singer = 'singer'
        // 专辑封面
        this.bgm.coverImgUrl = this.music_coverImgUrl
        this.bgm.onCanplay(() => {
            this.bgm.pause()
        })
        this.bgm.src = this.music_url
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