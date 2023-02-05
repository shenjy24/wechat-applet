// pages/module/weather/weather.js

import { requestBase } from "../../../utils/request"
import { formatTime } from "../../../utils/util"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        areas:[
            {
                province: '广东省',
                city: '广州市',
                zone: '黄埔',
                id: 440112
            },
            {
                province: '广东省',
                city: '广州市',
                zone: '天河',
                id: 440106
            },
            {
                province: '广东省',
                city: '深圳市',
                zone: '南山',
                id: 440305
            },
            {
                province: '福建省',
                city: '厦门市',
                zone: '集美',
                id: 350211
            },
        ],
        provinces: [],
        cities: [],
        zones: [],
        value: [0, 0, 0],

        city: '',
        date: '',
        weather: '',
        temp: '',
        wind: ''
    },

    bindKeyInput(e) {
        city = e.detail.value
    },

    search() {
        let id = this.getDistrictId()
        if (!id) {
            return
        }
        requestBase('/baidu/weather/search', {
            districtId: id
        }, 'GET', res => {
            console.log(res)
            let location = res.data.data.location
            let info = res.data.data.now
            this.setData({
                city: location.country + ',' + location.province + ',' + location.city + ',' + location.name,
                date: formatTime(new Date()),
                weather: info.text,
                temp: info.temp + '度',
                wind: info.wind_class + info.wind_dir
            })
        },  err => {
            console.log(err)
        })
    },

    bindChange(e) {
        this.setData({value: e.detail.value})
        this.refreshSelector()
    },

    getDistrictId() {
        let selectedProvince = this.data.provinces[this.data.value[0]] 
        let selectedCity = this.data.cities[this.data.value[1]] 
        let selectedZone = this.data.zones[this.data.value[2]] 
        console.log(selectedProvince + "," + selectedCity + "," + selectedZone)
        for(let area of this.data.areas) {
            if (area.province === selectedProvince
                && area.city === selectedCity
                && area.zone === selectedZone) {
                return area.id
            }
        }
        return null
    },

    refreshSelector() {
        let tempProvinces = []
        for(let area of this.data.areas) {
            if (!tempProvinces.includes(area.province)) {
                tempProvinces.push(area.province)   
            }
        }
        this.setData({ provinces: tempProvinces })

        let selectedProvince = this.data.provinces[this.data.value[0]] 
        let tempCities = []
        for(let area of this.data.areas) {
            if (selectedProvince === area.province && !tempCities.includes(area.city)) {
                tempCities.push(area.city)
            }
        }
        this.setData({cities: tempCities})

        let tempZones = []
        let selectedCity = this.data.cities[this.data.value[1]] 
        for(let area of this.data.areas) {
            if (selectedProvince === area.province
                && selectedCity === area.city
                && !tempZones.includes(area.zone)) {
                tempZones.push(area.zone)
            }
        }
        this.setData({zones: tempZones})
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.refreshSelector()
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