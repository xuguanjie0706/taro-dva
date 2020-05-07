import Taro, { Component } from '@tarojs/taro'
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

  componentDidMount() {
    console.log(this.props);
    console.log(Tips.isLoading);
    logger({
      title: "nihao",
      res: { a: 123, b: 345 },
      req: { f: 123 }
    })

    console.log(Taro.ENV_TYPE);
    console.log(Taro.getEnv());
    api.user.getUserInfo({ data: { age: 12, name: "ab" } });
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  goToUser = () => {
    Taro.navigateTo({
      url: "/pages/user/index"
    })
    console.log(12);

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
  render() {
    const { user } = this.props
    return (
      <View className='index'>
        <Text onClick={this.goToUser}>Hello world!</Text>
        <Text onClick={this.changeState}>changeState :{user.age}</Text>
        <Text onClick={this.checkTips}>check Tips</Text>
      </View>
    )
  }
}
