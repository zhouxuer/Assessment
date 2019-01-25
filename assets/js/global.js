import md5 from 'md5'
const appKey = 'UMp4zD4yey0oluMh'
const appId = '2111640576'
const timeStamp = Math.round(new Date().getTime() / 1000).toString()
const nonceStr = Math.round(new Date()).toString()
let signature = function (params) {
  // 将<key, value>请求参数对按key进行字典升序排序，得到有序的参数对列表N
  const N = Object.keys(params).sort()
  // 将列表N中的参数对按URL键值对的格式拼接成字符串，得到字符串T（如：key1=value1&key2=value2），
  const TT = N.map(key => {
    const value = params[key]
    return `${key}=${encodeURIComponent(value)}`
  })
  // URL键值拼接过程value部分需要URL编码，URL编码算法用大写字母，例如%E8，而不是小写%e8
  const T = TT.join('&')
  // 将应用密钥以app_key为键名，组成URL键值拼接到字符串T末尾，得到字符串S（如：key1=value1&key2=value2&app_key=密钥)
  const S = `${T}&app_key=${this.appKey}`
  // 对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写，得到接口请求签名
  const sign = md5(S).toUpperCase()
  return {
    ...params,
    sign
  }
}

export default {
  timeStamp,
  nonceStr,
  signature,
  appKey,
  appId
}
