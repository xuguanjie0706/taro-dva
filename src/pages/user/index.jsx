import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import Tips from '../../utils/tips'

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
  checkTips = () => {
    console.log(Tips.loading());

  }
  render() {
    return (
      <View className='index'>
        <Text>{this.props.user.key}</Text>
        <Text>Hello world!</Text>
        <Text onClick={this.checkTips}>check Tips</Text>
      </View>
    )
  }
}
