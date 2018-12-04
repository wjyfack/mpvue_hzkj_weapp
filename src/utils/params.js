const host = 'https://www.cdxscn.com/Apiapi'
// let session_id = wx.getStorageSync('userData').session_id == undefined ? '' : wx.getStorageSync('userData').session_id

export const param = '&d=wx_minprogram&s='+wx.getStorageSync('userData').session_id //(wx.getStorageSync('userData').session_id == undefined ? '' : wx.getStorageSync('userData').session_id)
export const oHost= 'https://www.cdxscn.com/'
export default {
    host,
    param
  }
  