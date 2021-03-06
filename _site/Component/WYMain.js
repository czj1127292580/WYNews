import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';

import WYHome from './WYHome';
import WYMessage from './WYMessage';
import WYFind from './WYFind';
import WYMine from './WYMine';
import WYNewsDetail from './WYNewsDetail'

const TabNav = TabNavigator(
  {
    WYHome: {
      screen: WYHome,
      // path: '/',
      navigationOptions: {
        title: '首页', // 同步设置导航和tabbar文字,不推荐使用
        // headerTitle: '首页',  // 只设置导航栏文字
        // header:{}, // 自定义导航条内容，如果需要隐藏可以设置为null
        // headerBackTitle:null, // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
        // headerTruncatedBackTitle:'', // 设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。
        // headerRight:{}, // 设置导航条右侧。可以是按钮或者其他。
        // headerLeft:{}, // 设置导航条左侧。可以是按钮或者其他。
        // headerStyle:{
        //         backgroundColor:'#4ECBFC'
        //     }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            // headerTitleStyle:{
            //     fontSize:30,
            //     color:'white'
            // }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
            // headerBackTitleStyle:{}, // 设置导航条返回文字样式。
            // headerTintColor:'green', // 设置导航栏文字颜色。总感觉和上面重叠了。
            // gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭

            // TabNavigator 属性部分
            // title:'首页',   // 同上
            tabBarVisible:true, // 是否隐藏标签栏。默认不隐藏(true)
        tabBarIcon: ({ tintColor, focused }) => (
          focused
                    ?
                    <Image
                        source={{uri:'tabbar_home_highlighted'}}
                        style={styles.image}
                    />
                    :
                    <Image
                        source={{uri:'tabbar_home'}}
                        style={styles.image}
                    />
        ),
      },
    },

    WYMessage: {
      screen: WYMessage,
      // path: '/settings',
      navigationOptions: {
        title: '消息',
        tabBarIcon: ({ tintColor, focused }) => (
        focused
                    ?
                    <Image
                        source={{uri:'tabbar_message_center_highlighted'}}
                        style={styles.image}
                    />
                    :
                    <Image
                        source={{uri:'tabbar_message_center'}}
                        style={styles.image}
                    />
        ),
      },
    },

    WYFind: {
      screen: WYFind,
      navigationOptions: {
        title: '发现',
        tabBarIcon: ({ tintColor, focused }) => (
          focused 
            ? 
            <Image 
              source={{uri:'tabbar_discover_highlighted'}} 
              style={styles.image}
            />
            :
            <Image 
              source={{uri:'tabbar_discover'}} 
              style={styles.image}
            />
        ),
      },
    },

    WYMine: {
      screen: WYMine,
      navigationOptions: {
        title: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          focused 
            ? 
            <Image 
              source={{uri:'tabbar_profile_highlighted'}} 
              style={styles.image}
            />
            :
            <Image 
              source={{uri:'tabbar_profile'}} 
              style={styles.image}
            />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions:{
        activeTintColor: '#FF8403', // 改变tabBar选中字体颜色
        // inactiveTintColor: '#CC9999', // 文字和图片默认颜色
        // showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        // indicatorStyle: {
        //     height: 0
        // }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        // style: {
        //     backgroundColor: '#FFFF99', // TabBar 背景色
        // },
        labelStyle: {
            fontSize: 11, // 文字大小
        },
    }
  }
);

const StackNavigators = StackNavigator({
    TabNav: {
      screen: TabNav,
    },

    WYNewsDetail: {
      screen: WYNewsDetail,
    }
});

const styles = StyleSheet.create({
  image: {
    width:30,
    height:30,
  }
});

export default StackNavigators;
