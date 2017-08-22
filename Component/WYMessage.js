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

export default class WYMessage extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.textStyle}>
          我是信息页
        </Text>
      </View>
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