import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    PixelRatio
} from 'react-native';

import Request from '../Utils/WYRequest'
import WYSwiper from './Swiper/WYHomeSwiper'
import WYNewsCell from './WYNewsCell'

export default class WYHome extends Component {
  static defaultProps = {
    api_url: 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=1&prog=LTitleA&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&offset=0&size=20&version=14.0&spever=false&net=wifi&lat=DUH4Hf95lyIDaAI03C3RSA%3D%3D&lon=HJ4tj6FL5wRHQxcf5GLEcg%3D%3D&ts=1470728804&sign=1H8K3yy9bMXakmxAlZ9P86meraJtjKQFz5vJuwhjNyl48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore',
    key_word: 'T1348647853363'
  };

  // 构造
  constructor(props){
    super(props);

    // 数据源
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // 初始状态
    this.state = {

      dataSource:ds,
      // 广告
      headerAdArr:[],

      // 判断是否为空
      flag:false
    };
  }
  render() {
    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderHeader={this._renderHeader.bind(this)}
        renderRow={this._renderRow.bind(this)}
      >
      
      </ListView>
    );
  }

  componentDidMount() {
    Request.get(this.props.api_url, (responseData) => {
      // 取出数组
      const dataArr = responseData[this.props.key_word];
      // 临时数组
      var tempListArr = [], adArr = [];

      // 遍历数组
      dataArr.forEach((value, index) => {
        
        if(value.hasAd == 1 || value.hasHead == 1) {
          adArr = value.ads;
        } else {
          tempListArr.push(value);
        }
      });

      // 更新状态，刷新UI
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(tempListArr),
        headerAdArr:adArr,
        flag:true
      });
    }, (error) => {
        alert(error);
    });
  }

  // 广告
  _renderHeader(){
    // 防止空数据
    if(!this.state.flag) return;

    // 容错
    if(this.state.headerAdArr.length == 0) return;

    return(
      <WYSwiper dataArr={this.state.headerAdArr}></WYSwiper>
    );
  }

  /**
     * 返回具体的行
     * @private
     */
    _renderRow(rowData){
        // 0. 防止空数据
        if(!this.state.flag) return;

        return(
            // <TouchableOpacity style={styles.cellStyle} onPress={() => {
            //   const { navigate } = this.props.navigation;
            //   navigate('WYNewsDetail', {title: rowData.title});
            //   title="Chat with Lucy";
            // }}>
            //     <Image
            //         source={{uri: rowData.imgsrc}}
            //         defaultSource={{uri: 'placeholder'}}
            //         style={styles.imgStyle}
            //     />
            //     <View style={styles.rightViewStyle}>
            //         <Text
            //             numberOfLines={2}
            //         >
            //             {rowData.title}
            //         </Text>
            //         <View style={styles.rightInnerViewStyle}>
            //             <Text style={{color:'red', fontSize:14}}>{rowData.source}</Text>
            //             <Text style={{color:'#333', fontSize:14}}>{rowData.ptime}</Text>
            //         </View>
            //     </View>
            // </TouchableOpacity>
            <WYNewsCell model={rowData} navigator={this.props.navigation}/>
        );
    }
}

const styles = StyleSheet.create({
    cellStyle:{
        borderBottomWidth: 1/PixelRatio.get(),
        borderBottomColor: '#666',

        flexDirection:'row',
        padding:10
    },

    imgStyle:{
        width:90,
        height:90,
        borderRadius:5,
        marginRight:10
    },

    rightViewStyle:{
        flex:1,
        justifyContent:'space-around'
    },

    rightInnerViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
});