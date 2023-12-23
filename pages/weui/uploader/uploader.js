// pages/weui/uploader/uploader.js
import { wechatLogin } from '../../../utils/api'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        files: [],
    },

    uplaodFile(files) {
        console.log("upload file", files)
        // 文件上传的函数，返回一个promise
        return new Promise((resolve, reject) => {

            // 成功示例
            setTimeout(() => {
                resolve({
                    urls: files.tempFilePaths,
                    contents: files.contents
                })
            }, 1000);

            // 组件成功代码
            //   if (json.urls) {
            //     const oldFiles = this.data.files
            //     json.urls.forEach((url, index) => {
            //         oldFiles[len + index].url = url
            //         oldFiles[len + index].loading = false
            //     })
            //     this.setData({
            //         files: oldFiles,
            //         currentFiles: newFiles
            //     })
            //     this.triggerEvent('success', json, {})
            // } 

            // 失败示例
            // setTimeout(() => {
            //   reject('some error')
            // }, 1000);
        })
    },

    selectFile(files) {
        console.log('files', files)
    },

    uploadError(e) {
        console.log('upload error')
    },

    uploadSuccess(e) {
        console.log('upload success', e.detail)
        let fileContent = e.detail.contents[0]
        console.log("file content", fileContent)
        wechatLogin("uploader", e.detail.urls[0], "13662401111")
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            selectFile: this.selectFile.bind(this),
            uplaodFile: this.uplaodFile.bind(this)
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