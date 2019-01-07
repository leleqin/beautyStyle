import React from "react";
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];
console.disableYellowBox = true // 关闭全部黄色警告

import { AppRegistry ,Image} from 'react-native';
import Login from './Login';
import RegisterPage from './RegisterPage';
import InitFirst from './InitFirst';
import Content from './Content';
import InitDiscovery from './InitDiscovery';
import AuthorPage from './AuthorPage';
import NewsPage from './NewsPage';
import ChatPage from './ChatPage';
import MinePage from './MinePage';
import MyEssayPage from './MyEssayPage';
import MajorListPage from './MajorListPage';
import AuthorListPage from './AuthorListPage';
import {StackNavigator} from 'react-navigation'
import {
    TabNavigator,
} from 'react-navigation';

//首页跳转
const FirstPage = StackNavigator({
    first:{screen: InitFirst},
    content:{screen: Content},
},{headerMode: 'none'})

//发现页跳转
const DiscoveryPage = TabNavigator({
    page1:{
        screen:InitDiscovery,
        navigationOptions: {
            tabBarLabel: '专题',
        }
    },
    page2:{
        screen:AuthorPage,
        navigationOptions: {
            tabBarLabel: '作者',
        }
    }
},
    //属性配置
    {
        initialRouteName: 'page1', //初始显示的Tab对应的页面路由名称
        swipeEnabled: true,       //是否可以滑动切换Tab选项卡
        animationEnabled: true,   //点击Tab选项卡切换界面是否需要动画
        lazy: false,              //是否懒加载页面
        tabBarPosition:'top',     // Tab选项卡的位置，有 top 或 bottom两个值
        backBehavior: 'none',     //androd点击返回键时的处理，有initialRoute和none两个值,initailRoute - 返回初始界面,none - 退出
        tabBarOptions:{
            activeTintColor: '#ff5a5b',//选中的文字颜色
            inactiveTintColor: '#000',//未选中的文字颜色
            showIcon: false, //是否显示图标，默认显示
            showLabel: true,//是否显示标签，默认显示
            upperCaseLabel: false,//是否使用大写字母，默认使用
            pressColor: '#788493',//android 5.0以上的MD风格波纹颜色
            pressOpacity: 0.8,//android 5.0以下或者iOS按下的透明度
            //整个TabBar的样式
            style:{
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0,
                borderTopColor: '#ccc',
            },
            //标签的样式
            labelStyle: {
                width:60,
                fontSize: 18,
                paddingBottom:10,
                borderBottomColor:'#ff5a5b',
                borderBottomWidth:2,
                borderStyle:'solid',
            },
            indicatorStyle: {height: 0},
        },
    })

//Tab首页，发现，消息，我的
const beautyTab = TabNavigator({
    firstPage:{
        screen: FirstPage,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/firstPage.png')}
                    style={{width: 20, height: 20, resizeMode: 'stretch'}}
                />
            )
        }
    },
    discovery:{
        screen: DiscoveryPage,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/discovery.png')}
                    style={{width: 20, height: 20, resizeMode: 'stretch'}}
                />
            )
        }

    },
    news:{
        screen: NewsPage,
        navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/news.png')}
                    style={{width: 20, height: 20, resizeMode: 'stretch'}}
                />
            )
        }
    },
    myPage:{
        screen: MinePage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/my.png')}
                    style={{width: 20, height: 20, resizeMode: 'stretch'}}
                />
            )
        }
    }
},
    //属性配置
    {
        initialRouteName: 'firstPage',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
        tabBarOptions:{
            activeTintColor: '#ff5a5b',
            inactiveTintColor: '#000',
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#788493',
            pressOpacity: 0.8,
            style:{
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',			},
            showIcon:true,
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            indicatorStyle: {height: 0},
        },
    })

//登录跳转
const firstLogin = StackNavigator({
    //首页第一个
    Login: {screen: Login},
    Success: {screen: beautyTab},
    Register: {screen: RegisterPage},
    ChatJump: {screen: ChatPage},
    MinePageJump: {screen: MyEssayPage},
    ContentPageJump:{screen:Content},
    MajorListPageJump:{screen:MajorListPage},
    AuthorListPageJump:{screen:AuthorListPage},
}, {headerMode: 'none'});


AppRegistry.registerComponent('Chat', () => firstLogin);
