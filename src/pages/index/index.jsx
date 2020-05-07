import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'

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

  render() {
    return (
      <View className='index'>
        <Text onClick={this.goToUser}>Hello world!</Text>
      </View>
    )
  }
}
