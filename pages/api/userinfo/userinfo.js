// pages/api/userinfo/userinfo.js
import { request } from '../../../utils/request'
import { code2session, getUserProfile, updateUserProfile } from '../../../utils/api'
const util = require('../../../utils/util.js')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userProfile: {},
        avatarUrl: '',
        nickname: ''
    },

    formSubmit(e) {
        let nickname = e.detail.value.nickname
        if (util.checkName(nickname)) {
            updateUserProfile(this.data.avatarUrl, nickname, r => {
                this.setData({
                    avatarUrl: r.avatar,
                    nickname: r.nickname
                })
            })
        } else {
            wx.showToast({
                title: '昵称格式不正确',
                icon: 'none'
            })
        }
    },

    onChooseAvatar(e) {
        console.log('onChooseAvatar: ' + JSON.stringify(e.detail))
        const { avatarUrl } = e.detail
        this.setData({ avatarUrl })
    },

    // wx.getUserProfile 新版本废弃了
    getUserProfileOldVersion() {
        // wx.getUserProfile只能使用catchtap或者bindtap进行调用
        wx.getUserProfile({
            lang: 'zh_CN',
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log(res)
                request('/auth/decryptUserProfile', {
                    rawData: res.rawData,
                    signature: res.signature,
                    encryptedData: res.encryptedData,
                    iv: res.iv
                }, 'GET', r => {
                    console.log("调用getUserProfile成功:" + JSON.stringify(r))
                    this.setData({
                        userProfile: r.data
                    })
                }, e => {
                    console.log("调用getUserProfile失败:" + JSON.stringify(e))
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        code2session(token => {
            console.log('token:' + token)
            getUserProfile(r => {
                console.log(JSON.stringify(r))
                this.setData({
                    avatarUrl: r.avatar,
                    nickname: r.nickname
                })
                console.log(this.data.avatarUrl)
                console.log(this.data.nickname)
            })
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