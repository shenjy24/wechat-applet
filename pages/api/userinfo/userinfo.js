// pages/api/userinfo/userinfo.js
import { request } from '../../../utils/request'
import { code2session } from '../../../utils/api'
const util = require('../../../utils/util.js')

const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userProfile: {},
        avatarUrl: defaultAvatarUrl
    },

    formSubmit(e) {
        let nickname = e.detail.value.nickname
        console.log(util)
        if (util.checkName(nickname)) {
            request('/auth/updateUserProfile', {
                avatarUrl: this.data.avatarUrl,
                nickname: nickname
            }, 'GET', r => {
                console.log("调用updateUserProfile成功:" + JSON.stringify(r))
                this.setData({
                    userProfile: r.data
                })
            }, e => {
                console.log("调用updateUserProfile失败:" + JSON.stringify(e))
            })
        }
    },

    onChooseAvatar(e) {
        console.log('onChooseAvatar: ' + JSON.stringify(e.detail))
        const { avatarUrl } = e.detail
        this.setData({ avatarUrl })
    },

    // wx.getUserProfile 新版本废弃了
    getUserProfile() {
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
            console.log(token)
            this.getUserProfile()
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