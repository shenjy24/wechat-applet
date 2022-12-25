// pages/module/music/music.js
Page({

    audioCtx: null,

    /**
     * 页面的初始数据
     */
    data: {
        item: 0,
        tab: 0,
        playlist: [
            {
                id: 1,
                title: '起风了',
                singer: '买辣椒也用券',
                src: '/videos/起风了.mp3',
                coverImgUrl: '/images/cover.png'
            },
            {
                id: 2,
                title: '大鱼',
                singer: '周深',
                src: '/videos/大鱼.mp3',
                coverImgUrl: '/images/cover.png'
            },
            {
                id: 3,
                title: '错位时空',
                singer: '艾希',
                src: '/videos/错位时空.mp3',
                coverImgUrl: '/images/cover.png'
            },
            {
                id: 4,
                title: '知否知否',
                singer: '齐豫',
                src: '/videos/知否知否.mp3',
                coverImgUrl: '/images/cover.png'
            }
        ],
        state: 'paused',
        playIndex: 0,
        play: {
            currentTime: '00:00',
            duration: '00:00',
            percent: 0,
            title: '',
            singer: '',
            coverImgUrl: '/images/cover.png'
        },
    },

    changeItem(e) {
        this.setData({ item: e.target.dataset.item })
    },

    changeTab(e) {
        this.setData({ tab: e.detail.current })
    },

    changePage(e) {
        this.setData({ 
            tab: e.currentTarget.dataset.page,
            item: e.currentTarget.dataset.page
        })
    },

    change(e) {
        this.setMusic(e.currentTarget.dataset.index)
        this.play()
    },

    setMusic(index) {
        let music = this.data.playlist[index]
        this.audioCtx.src = music.src
        this.setData({
            playIndex: index,
            'play.title': music.title,
            'play.singer': music.singer,
            'play.coverImgUrl': music.coverImgUrl,
            'play.currentTime': '00:00',
            'play.duration': '00:00',
            'play.percent': 0
        })
    },

    play() {
        this.audioCtx.play()
        this.setData({ state: 'running' })
    },

    pause() {
        this.audioCtx.pause()
        this.setData({ state: 'paused' })
    },

    next() {
        let index = this.data.playIndex >= this.data.playlist.length - 1 ? 0 : this.data.playIndex + 1
        this.setMusic(index)
        if (this.data.state === 'running') {
            this.pause()
            this.audioCtx.seek(0)
            this.play()
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
        this.audioCtx = wx.createInnerAudioContext()
        this.audioCtx.onError(() => {
            console.log('播放失败：' + this.audioCtx.src)
        })
        // 播发完自动换下一首
        this.audioCtx.onEnded(() => {
            this.next()
        })
        // 自动更新播放进度
        this.audioCtx.onPlay(() => {

        })
        this.audioCtx.onTimeUpdate(() => {
            this.setData({
                'play.duration': this.formatTime(this.audioCtx.duration),
                'play.currentTime': this.formatTime(this.audioCtx.currentTime),
                'play.percent': this.audioCtx.currentTime / this.audioCtx.duration * 100
            })
        })
        //默认选择第1曲
        this.setMusic(0)
    },

    formatTime(time) {
        let minute = Math.floor(time / 60) % 60
        let second = Math.floor(time) % 60
        return (minute < 10 ? '0' + minute : minute) + ":" + (second < 10 ? '0' + second : second)
    },

    sliderChange(e) {
        let second = e.detail.value * this.audioCtx.duration / 100
        this.audioCtx.seek(second)
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