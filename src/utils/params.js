const host = 'http://cdzj.demo.com/Apiapi'
const param = '&d=wx_minprogram&s='+wx.getStorageSync('userData').session_id
export default {
    host,
    param
  }
  