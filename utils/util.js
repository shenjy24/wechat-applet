const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
}

const checkName = data => {
    var reg = /^[\u4E00-\u9FA5A-Za-z]+$/
    return check(data, reg, '姓名输入错误！')
}

const checkPhone = data => {
    let reg = /^(((13)|(15)|(17)|(18))\d{9})$/
    return check(data, reg, '手机号码输入有误！')
}

const check = (data, reg, errMsg) => {
    if (!reg.test(data)) {
        wx.showToast({
            title: errMsg,
            icon: 'none',
            duration: 1500
        })
        return false
    }
    return true
}

module.exports = {
    formatTime, checkName, checkPhone
}
