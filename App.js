/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    Button,
} from 'react-native';

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            inputMsg: '',/*用户输入信息*/
            chatText: null,/*存放用户输入信息和头像*/
        }
    }

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
                <Text style={styles.topTitleTextStyle}>
                    {"<   打僵尸                                                 ···"}
                </Text>
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
                        <TextInput style={styles.sendInputStyle}
                                   placeholder={"请输入内容"}
                                   value={this.state.inputMsg}
                                   onChangeText={(text) => {
                                       this.setState({inputMsg: text})
                                   }}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.sendButtonStyle}>
                        <Button
                            onPress={this.sendMsg}
                            title="发送"
                            color={"green"}
                        />
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
        backgroundColor: 'black',
        color: '#FFFFFF',
        height: 45,
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    chatViewStyle: {
        flex: 12,
        backgroundColor: '#e1e1e1'
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
        backgroundColor: '#FFFFFF',
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
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginLeft: 15,
        marginTop: 15
    },
    chatOneImageStyle: {
        width: '100%',
        height: '100%',
    },
    sendTextStyle: {
        flexDirection: 'row',
        height: 50
    },
    sendInputStyle: {
        flex: 1,
        fontSize: 16,
        backgroundColor: '#FFFFFF'
    },
    sendButtonStyle: {
        flex: 1.5,
        marginTop: 8,
    }
});