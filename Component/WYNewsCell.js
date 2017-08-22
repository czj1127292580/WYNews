import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    PixelRatio
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class WYNewsCell extends Component {
  // 构造
  constructor(props){
    super(props);

    this.state = {
      model: this.props.model,
      navigator: this.props.navigator,
    };
  }
  render() {
    var model = this.state.model;
    var hahah = this.state.navigator;

    return (
      <TouchableOpacity style={styles.cellStyle} onPress={() => {
        hahah.navigate('WYNewsDetail', {title: model.title});
      }}>
        <Image
            source={{uri: model.imgsrc}}
            defaultSource={{uri: 'placeholder'}}
            style={styles.imgStyle}
        />
        <View style={styles.rightViewStyle}>
            <Text
                numberOfLines={2}
            >
                {model.title}
            </Text>
            <View style={styles.rightInnerViewStyle}>
                <Text style={{color:'red', fontSize:14}}>{model.source}</Text>
                <Text style={{color:'#333', fontSize:14}}>{model.ptime}</Text>
            </View>
        </View>
      </TouchableOpacity>
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

module.exports = WYNewsCell;