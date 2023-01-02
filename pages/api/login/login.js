// pages/api/login/login.js
import {
    request
  } from '../../../utils/request'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        token: ''
    },

    code2session() {
        wx.login({
            timeout: 5000,
            success: (res) => {
                if (res.code) {
                    console.log("code2session code:" + res.code)
                    request('/auth/code2session', {
                        code: res.code
                    }, 'GET', r => {
                        console.log("调用code2session成功:" + JSON.stringify(r))
                        this.setData({token: r.data})
                        // 将token保存为公共数据（用于在多页面中访问）
                        let app = getApp()
                        app.globalData.token = r.data
                        // 将token保存到数据缓存（下次打开小程序无需重新获取token）
                        wx.setStorageSync('token', r.data)
                    }, e => {
                        console.log("调用code2session失败:" + JSON.stringify(e))
                    })
                }
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.checkSession({
            success: () => {
                console.log("session有效")
                let app = getApp()
                this.setData({token: app.globalData.token})
            },
            fail: () => {
                console.log("session失效")
                this.code2session()
            },
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