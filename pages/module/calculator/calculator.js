// pages/module/calculator/calculator.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num: '123',
        op: '+'
    },

    result: null,   // 用于保存上次的运算结果
    isClear: false, // isClear若值为false，表示下次输入的数字放在当前显示数字的末尾，若值为true表示替代当前显示的数字

    numBtn(e) {
        let num = e.target.dataset.val
        if (this.data.num === '0' || this.isClear) {
            this.setData({ num: num })
            this.isClear = false
        } else {
            // +是字符串拼接
            this.setData({ num: this.data.num + num })
        }
    },

    opBtn(e) {
        let op = this.data.op
        let num = Number(this.data.num)
        this.setData({ op: e.target.dataset.val })
        if (this.isClear) {
            return
        }
        this.isClear = true
        if (this.result === null) {
            this.result = num
            return
        }
        switch (op) {
            case '+':
                this.result = this.result + num
                break
            case '-':
                this.result = this.result - num
                break
            case '*':
                this.result = this.result * num
                break
            case '/':
                this.result = this.result / num
                break
            case '%':
                this.result = this.result % num
                break
        }
        this.setData({ num: this.result + '' })
    },

    dotBtn() {
        if (this.isClear) {
            this.setData({ num: '0' })
            this.isClear = false
            return
        }
        if (this.data.num.indexOf('.') >= 0) {
            return
        }
        this.setData({ num: this.data.num + '.' })
    },

    delBtn() {
        let num = this.data.num.substr(0, this.data.num.length - 1)
        this.setData({ num: num === '' ? '0' : num })
    },

    resetBtn() {
        this.result = null
        this.isClear = false
        this.setData({ num: '0', op: '' })
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