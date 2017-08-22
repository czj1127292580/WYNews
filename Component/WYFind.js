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

export default class WYFind extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.textStyle}>
          我是发现页
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