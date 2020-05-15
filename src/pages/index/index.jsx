import Taro, { Component, request } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import Tips from '../../utils/tips'
import logger from '../../utils/logger'
import api from '../../api/index'

@connect(({ user }) => ({
  user,
}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  async componentDidMount() {
    // console.log(this.props);
    // console.log(Taro.ENV_TYPE);
    // console.log(Taro.getEnv());
    let data = { age: 12, name: "ab" }
    const r = await api.user.getUserInfo(data);
    //  request("user/page",{data})
    logger({ title: "数据返回", req: data, res: r })
    // const a = { name: 123 }
    // let { name } = a
    // a.b = 12
    // name = 124
    // console.log(name);
    // console.log(globalThis, window);
    console.log(this.fn(6));
    console.log(Taro);


  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  goToUser = () => {
    Taro.navigateTo({
      url: "/pages/user/index"
    })
  }

  changeState = () => {
    const { dispatch } = this.props
    dispatch({
      type: "user/updateState",
      payload: {
        age: 11
      }
    })
  }

  checkTips = () => {
    Tips.success("nihao")
  }

  fn = (n) => {
    // if (n === 0 || n === 1) return 1
    // if (n >= 2) return this.fn(n - 1) + this.fn(n - 2)
    return n > 1 ? (this.fn(n - 1) + this.fn(n - 2)) : 1
  }
  render() {
    const { user } = this.props
    return (
      <View className='index'>
        <Text onClick={this.goToUser}>1Hello world!</Text>
        <Text onClick={this.changeState}>changeState :{user.age}</Text>
        <Text onClick={this.checkTips}>check Tips</Text>
      </View>
    )
  }
}
