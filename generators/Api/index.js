

import request from '../utils/request'



/**
 * @memberof module:apis
 * @description: 描述方法
 * @function get{{ name }}Info
 * @param {type}  传入参数
 * @author 陈一歌(后端对接人名称)
 * @see {@link https://api-manager.ccrgt.com/doc/MrD0qNADV}
 * @return:  返回值
 */
export const get{{ name }}Info = () => {
  return request("{{name}}/getone")
}


/**
 * @memberof module:apis
 * @description: 描述方法
 * @function get{{ name }}Page
 * @param {type}  传入参数
 * @author 陈一歌(后端对接人名称)
 * @see {@link https://api-manager.ccrgt.com/doc/MrD0qNADV}
 * @return {object}
 *  {type}  传入参数
 */
export const get{{ name }}Page = () => {
  return request("{{name}}/getone")
} 