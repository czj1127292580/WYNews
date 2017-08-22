import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import Request from '../Utils/WYRequest';

export default class WYNewsDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  constructor(props){
    super(props);

    this.state = {
      docid:'',
    };
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;

    this.setState({
      docid: params.docid,
      html: '',
    });

    var url_api = 'http://c.m.163.com/nc/article/' + params.docid + '/full.html';
    Request.get(url_api, (responseData) => {

      // 取出数据
      var allData = responseData[this.state.docid];

      var body = allData['body'];
      // 取出图片
      var img = allData['img'];
      for (var i = 0; i < img.length; i++) {
        var item = img[i];
        var ref = item.ref;
        var src = item.src;
        var newImg = '<img src="'+ src +'" width="100%">';
        body = body.replace(ref, newImg);

        console.log('====================================');
        console.log(ref, src);
        console.log('====================================');
      }

      // 更新UI
      this.setState({
        html: body,
      });
    }, (error) => {
      alert(error);
    });
  }

  render() {
    return (
      <WebView
        automaticallyAdjustContentInsets={true}
        // source={{uri:'http://www.baidu.com'}}  加载网页
        source={{html: this.state.html, baseUrl: ''}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },

  textStyle: {
    fontSize:30,
  }
});