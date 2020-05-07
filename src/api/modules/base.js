

import request from '../../utils/request'



/**
 * @memberof module:apis
 * @description: 描述方法
 * @function getbaseInfo
 * @param {type}  传入参数
 * @author 陈(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */
export const getbaseInfo = () => {
  return request.post("base/getone")
}


/**
 * @memberof module:apis
 * @description: 描述方法
 * @function getbasePage
 * @param {type}  传入参数
 * @author 陈(后端对接人名称)
 * @see {@link https://t.com/doc/MrD0qNADV}
 * @return {object} 接口对象
 */
export const getbasePage = () => {
  return request("base/getone")
} 