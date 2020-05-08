

import request from '../../utils/request'



/**
 * @memberof module:apis
 * @description: 描述方法
 * @function getUserInfo
 * @param {type}  传入参数
 * @author 陈一歌(后端对接人名称)
 * @see {@link https://api-manager.ccrgt.com/doc/MrD0qNADV}
 * @return:  返回值
 */
export const getUserInfo = (params) => {
  return request.post({
    ...params,
    url: "user/getone"
  })
}

/**
 * @memberof module:apis
 * @description: 描述方法
 * @function getUserPage
 * @param {type}  传入参数
 * @author 陈一歌(后端对接人名称)
 * @see {@link https://api-manager.ccrgt.com/doc/MrD0qNADV}
 * @return:  返回值
 */
export const getUserPage = () => {
  return request.init("user/getone")
} 