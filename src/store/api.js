import fetchJsonp from 'fetch-jsonp'

export default {
  getMusicItems (type) {
    const MUSIC_TYPE = {
      newS: 1,
      hotS: 2
    }
    var url = 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=' + MUSIC_TYPE[type] + '&size=10&offset=0'

    var result = fetchJsonp(url, {
      timeout: 10000
    })
      .then((res) => {
        return res.json()
      }, (res) => {
        return {
          msg: '获取音乐列表失败'
        }
      }).catch()
    return result
  }
}
