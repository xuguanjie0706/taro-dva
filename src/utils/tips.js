import Taro from '@tarojs/taro'


/**
 * @description: 提示与加载工具类
 * @module Tips
 */



export default class Tips {
  /**
   * 私有属性 
  */
  static isLoading = false

  /**
    * @description: 信息提示
    * @param {string} title 标题
    * @param {func}  cal  函数
    * @return: 
    */
  static toast(title, cal) {
    Taro.showToast({
      title: title,
      icon: "none",
      mask: true,
      duration: 1500
    })
    if (cal) {
      setTimeout(() => {
        cal()
      }, 500)
    }
  }

  /**
   * @description: 弹出加载提示
   * @param {string} title  标题
   * @param {boolean}  mask 遮罩
   * @return: 
   */
  static loading(title = "加载中", force = false, mask = false) {
    if (this.isLoading && !force) {
      return
    }
    this.isLoading = true
    if (Taro.showLoading) {
      Taro.showLoading({
        title,
        mask
      })
    } else {
      Taro.showNavigationBarLoading()
    }
  }


  /**
   * @description: 加载完毕
   * @return: 
   */
  static loaded() {
    let duration = 0
    if (this.isLoading) {
      this.isLoading = false
      if (Taro.hideLoading) {
        Taro.hideLoading()
      } else {
        Taro.hideNavigationBarLoading()
      }
      duration = 500
    }
    // 隐藏动画大约500ms，避免后面直接toast时的显示bug
    return new Promise(resolve => setTimeout(resolve, duration))
  }

  /**
   * 
   * @description: 弹出提示框
   * @param {string} title  标题
   * @param {number}  duration 延迟
   * @return: 
   */
  static success(title, duration = 1500) {
    Taro.showToast({
      title,
      icon: 'success',
      mask: true,
      duration
    });
    if (duration > 0) {
      return new Promise(resolve => setTimeout(resolve, duration));
    }
  }

}