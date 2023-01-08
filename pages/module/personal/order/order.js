import { getExpressTrack } from "../../../../utils/api"

const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        no: null,
        company: ['shunfeng', 'shentong', 'yuantong', 'yunda', 'jd'],
        com: ['顺丰', '申通', '圆通', '韵达', '京东'],
        index: 0,
        expressInfo: null,
    },

    search() {
        if (!this.data.no) {
            wx.showToast({
              title: '运单号不能为空',
              icon: 'error'
            })
            return
        }

        getExpressTrack(this.data.company[this.data.index], this.data.no, r => {
            console.log(r)
            this.setData({
                expressInfo: r
            })
        })
    },

    noInput(e) {
        this.setData({
            no: e.detail.value
        })
    },

    companyInput(e) {
        this.setData({
            index: e.detail.value
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