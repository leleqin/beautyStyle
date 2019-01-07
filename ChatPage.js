import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation'

import NewsPage from "./NewsPage";

export default class ChatPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            inputMsg: '', /*用户输入信息*/
            chatText: null, /*存放用户输入信息和头像*/
        }
    }

    static navigationOptions = ({navigation}) => ({
        herder: null
    });

    sendMsg = () => {
        this.setState({
            chatText:
                <View>
                    {this.state.chatText}
                    <View style={styles.chatViewRightItemStyle}>
                        <View style={styles.chatRightHeadStyle}>
                            <Image style={styles.chatOneImageStyle}
                                   source={require('./image/img2.jpg')}>
                            </Image>
                        </View>
                        <Text style={styles.chatRightFontStyle}>
                            {"  "}{this.state.inputMsg}{"  "}
                        </Text>
                    </View>
                </View>,
            emptyText: this.state.inputMsg = "",
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={
                    () => {
                        //跳转页面
                        const {navigate} = this.props.navigation;  //获取navigation的navigate方法
                        navigate('Success');
                    }
                }>
                    <Text style={styles.topTitleTextStyle}>
                        {"<   美搭助手                                                 "}
                    </Text>
                </TouchableOpacity>
                <View style={styles.chatViewStyle}>
                    <ScrollView style={{height: 65}}>
                        <View style={styles.chatViewLeftItemStyle}>
                            <View style={styles.chatHeadStyle}>
                                <Image style={styles.chatOneImageStyle}
                                       source={require('./image/img1.jpg')}>
                                </Image>
                            </View>
                            <Text style={styles.chatFontStyle}>
                                {"  "}跨脚本开始了？{"  "}
                            </Text>
                        </View>
                        <View style={styles.chatViewRightItemStyle}>
                            <View style={styles.chatRightHeadStyle}>
                                <Image style={styles.chatOneImageStyle}
                                       source={require('./image/img2.jpg')}>
                                </Image>
                            </View>
                            <Text style={styles.chatRightFontStyle}>
                                {"  "}是的！{"  "}
                            </Text>
                        </View>
                        <View style={styles.chatViewLeftItemStyle}>
                            <View style={styles.chatHeadStyle}>
                                <Image style={styles.chatOneImageStyle}
                                       source={require('./image/img1.jpg')}>
                                </Image>
                            </View>
                            <Text style={styles.chatFontStyle}>
                                {"  "}什么时候？{"  "}
                            </Text>
                        </View>
                        <View style={styles.chatViewLeftItemStyle}>
                            <View style={styles.chatHeadStyle}>
                                <Image style={styles.chatOneImageStyle}
                                       source={require('./image/img1.jpg')}>
                                </Image>
                            </View>
                            <Text style={styles.chatFontStyle}>
                                {"  "}在哪？{"  "}
                            </Text>
                        </View>
                        {this.state.chatText}
                    </ScrollView>
                </View>
                <View style={styles.sendTextStyle}>
                    <View style={{flex: 8.5}}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            style={styles.sendInputStyle}
                            placeholder={"请输入内容"}
                            value={this.state.inputMsg}
                            onChangeText={(text) => {
                                this.setState({inputMsg: text})
                            }}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.sendButtonStyle}>
                        <Text
                            onPress={this.sendMsg}
                            style={{color: '#ff5a5b', fontSize: 18}}
                        >
                            发送
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topTitleTextStyle: {
        backgroundColor: '#FFFFFF',
        color: '#898989',
        height: 50,
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderBottomColor: '#ff5a5b',
        borderStyle: 'solid',
        borderBottomWidth: 2,
    },
    chatViewStyle: {
        flex: 12,
        backgroundColor: '#FFFFFF'
    },
    chatViewLeftItemStyle: {
        flexDirection: 'row',
        width: '100%',
        height: 65,
    },
    chatViewRightItemStyle: {
        flexDirection: 'row-reverse',
        width: '100%',
        height: 65,
    },
    chatHeadStyle: {
        width: 45,
        height: 45,
        marginLeft: 15,
        marginTop: 10,
    },
    chatRightHeadStyle: {
        width: 45,
        height: 45,
        marginRight: 15,
        marginTop: 10,
    },
    chatFontStyle: {
        fontSize: 18,
        height: 40,
        backgroundColor: '#e3efff',
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: 15,
        marginTop: 15,
    },
    chatRightFontStyle: {
        flexDirection: 'row-reverse',
        fontSize: 18,
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#e3efff',
        borderRadius: 100,
        marginLeft: 15,
        marginTop: 15
    },
    chatOneImageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    sendTextStyle: {
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        height: 50
    },
    sendInputStyle: {
        flex: 1,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#d6d6d6',
        marginLeft:10,
    },
    sendButtonStyle: {
        flex: 1.5,
        paddingTop: 10,
        paddingLeft: 5,
        backgroundColor: '#FFFFFF'
    }
});