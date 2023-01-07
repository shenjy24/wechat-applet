import { request } from './request'

const app = getApp()

export const code2session = (callback) => {
    wx.login({
        timeout: 5000,
        success: (res) => {
            if (res.code) {
                console.log("code2session code:" + res.code)
                request('/auth/code2session', {
                    code: res.code
                }, 'GET', r => {
                    console.log("调用code2session成功:" + JSON.stringify(r))
                    // 将token保存为公共数据（用于在多页面中访问）
                    app.globalData.token = r.data
                    // 将token保存到数据缓存（下次打开小程序无需重新获取token）
                    wx.setStorageSync('token', r.data)
                    if (callback) {
                        callback(r.data)
                    }
                }, e => {
                    console.log("调用code2session失败:" + JSON.stringify(e))
                })
            }
        }
    })

}

export const updateUserProfile = (avatar, nickname, callback) => {
    request('/auth/updateUserProfile', {
        avatar: avatar,
        nickname: nickname
    }, 'GET', r => {
        if (callback) {
            callback(r.data)
        }
    }, e => {
        console.log("调用updateUserProfile失败:" + JSON.stringify(e))
    })
}

export const getUserProfile = (callback) => {
    request('/auth/getUserProfile', {}, 'GET',
        r => {
            if (callback) {
                callback(r.data)
            }
        }, e => {
            console.log("调用getUserProfile失败:" + JSON.stringify(e))
        })
}

