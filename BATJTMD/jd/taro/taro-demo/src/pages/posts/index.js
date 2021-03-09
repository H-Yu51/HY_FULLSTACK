import React from 'react';
// View  Text UI组件 -> compile react  小程序
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

export default class PostIndex extends React.Component {
  state = {
    posts: []
  }

  async componentDidiMount() {
    const response = await Taro.request({
      url: 'http://localhost:3333/posts'
    })
    this.setState({
      posts: response.data
    })
    console.log(response);
  }

  render() {
    return (
      <View className="container">
        {
          this.state.posts.map((post) => 
            <View className="card" key={post.id}>
              <Image mode="aspectFill"
                className="card-img-top"
                src={post.imageUrl}
              />
              <View className="card-title">{post.title}</View>
              <View className="card-subtitle">{post.author}</View>
            </View>
          )
        }
      </View>
    )
  }
}
