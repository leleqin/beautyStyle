import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import{StackNavigator} from 'react-navigation'

export default class NewsPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                {/*标头*/}
                <View style={styles.titleStyle}>
                    <Text style={{color: '#898989', fontSize: 20, fontFamily: '微软雅黑'}}>
                        消息
                    </Text>
                </View>

                {/*消息列表*/}
                <TouchableOpacity onPress={
                    ()=>{
                        //跳转页面
                        const { navigate } = this.props.navigation;  //获取navigation的navigate方法
                        navigate('ChatJump');
                    }
                }>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: 60, height: 60}}>
                            <Image style={styles.imageStyle}
                                   source={require('./image/img1.jpg')}
                            >
                            </Image>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            width:240,
                            marginLeft: 35,
                            borderBottomColor: '#d6d6d6',
                            borderStyle: 'solid',
                            borderBottomWidth: 1,
                            paddingBottom:10,
                        }}>
                            {/*作者*/}
                            <Text style={styles.chatTitleStyle}>
                                美搭助手
                            </Text>
                            {/*信息描述*/}
                            <Text style={{marginTop: 8, color: '#898989', fontSize: 14}}>
                                请您核对身材资料
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    titleStyle: {
        borderBottomColor: '#9b9b9b',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 10,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 20
    },
    chatTitleStyle: {
        marginTop: 25,
        fontSize: 16,
        fontFamily: '微软雅黑',
        color: 'black',
    },

});
