// pages/survey/survey.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        formData: {
            name: 'Jonas',
            gender: '0',
            skills: [],
            opinion: '测试'
        },
        gender: [
            { name: '男', value: '0', checked: false },
            { name: '女', value: '1', checked: false }
        ],
        skills: [
            { name: 'HTML', value: 'html', checked: false },
            { name: 'CSS', value: 'css', checked: false },
            { name: 'JavaScript', value: 'js', checked: false },
            { name: 'Photoshop', value: 'ps', checked: false },
        ],
    },

    submit(e) {
        console.log("submit: " + JSON.stringify(this.data.formData))
        wx.request({
            // 缺少http://无法调用
            url: 'http://localhost:3000/survey',
            method: 'POST',
            data: e.detail.value,
            // 返回数据结构
            // data: 服务器的响应数据
            // errMsg: 成功或失败的信息
            // header: 服务器的响应头
            // statusCode: 服务器的响应状态码
            success(res) {
                console.log(res)
            },
            complete(res) {
                // console.log(res)
            }
        })
    },

    onNameChange(e) {
        let formData = this.data.formData
        formData.name = e.detail.value
        this.setData({formData: formData})
        console.log(this.data.formData)
    },

    // 监听性别单选框变化
    onGenderChange(e) {
        let index = e.currentTarget.dataset.index
        let gender = this.data.gender
        gender.forEach(item => {
            item.checked = false
        })
        gender[index].checked = true
        this.setData({ gender: gender })

        let formData = this.data.formData
        formData.gender = gender[index].value
        this.setData({formData: formData})
        console.log(this.data.formData)
    },

    // 监听技能多选框变化
    onSkillChange(e) {
        let index = e.currentTarget.dataset.index
        let skills = this.data.skills
        skills[index].checked = !skills[index].checked
        this.setData({skills: skills})
        
        let formData = this.data.formData
        formData.skills = []
        skills.forEach(item => {
            if(item.checked) {
                formData.skills.push(item.value)
            }
        })
        this.setData({formData: formData})
        console.log(this.data.formData)
    },

    onOpinionChange(e) {
        let formData = this.data.formData
        formData.opinion = e.detail.value
        this.setData({formData: formData})
        console.log(this.data.formData)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.request({
            url: 'http://localhost:3000/survey/1',
            success: res => {
                this.setData({ formData: res.data })
                let formData = this.data.formData
                let gender = this.data.gender
                gender.forEach(item => {
                    if (item.value === formData.gender) {
                        item.checked = true
                    }
                })
                this.setData({ gender: gender })

                let skills = this.data.skills
                skills.forEach(item => {
                    if (formData.skills.includes(item.value)) {
                        item.checked = true
                    }
                })
                this.setData({ skills: skills })
            },
            complete(res) {
                console.log('onLoad success: ' + JSON.stringify(res))
            }
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