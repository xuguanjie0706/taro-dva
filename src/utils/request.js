

import Taro from '@tarojs/taro'
import config from "../config"



console.log(process.env.NODE_ENV);

class request {
  static post(options) {
    const defaultData = {
      ...options,
      method: "POST"
    }
    this.init(defaultData)
  }

  static get(options) {
    const defaultData = {
      ...options,
    }
    this.init(defaultData)
  }

  static init({ url, data, method = "GET", isMock = false, complete = () => { }, header }) {
    return new Promise((reselve) => {
      Taro.request({
        url: (isMock ? config.mockUrl : process.env.NODE_ENV == "development" ? config.devUrl : config.prodUrl) + url,
        complete,
        header,
        data,
        method,
        success: (r) => {
          reselve(r)
        }
      })
    })
  }
}


export default request