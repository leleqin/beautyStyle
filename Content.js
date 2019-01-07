import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation'

type Props = {};
export default class MyEssayPage extends Component<Props> {
    render() {
        const {params}=this.props.navigation.state;
        return (
            <View style={styles.container}>
                {/*标头*/}
                <View style={styles.titleStyle}>
                    <TouchableOpacity
                        onPress={
                            ()=>{
                                //跳转页面
                                const { navigate } = this.props.navigation;
                                navigate('Success')
                            }
                        }
                    >
                        <Text style={{color: '#898989', fontSize: 20, fontFamily: '微软雅黑'}}>
                            {"←  返回"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                <View style={{
                    borderBottomColor: '#9b9b9b',
                    borderStyle: 'solid',
                    borderBottomWidth: 1,
                }}>
                    {/*标题*/}
                    <Text style={styles.titleStyleTow}>
                        {params.title}
                    </Text>
                    {/*作者*/}
                    <View style={{flexDirection:'row',marginTop:10,}}>
                    <Image style={styles.authorImageStyle}
                           source={{uri:params.icon}}/>
                        <Text>{"  "}{params.author}</Text>
                    </View>
                    {/*点赞浏览量*/}
                    <Text style={styles.countStyle}>
                        点赞{"  "}{params.like}{"      "}浏览量{"  "}{params.skim}
                    </Text>
                    {/*内容*/}
                    <Text style={styles.contentStyle}>
                        {"      "}{params.content}
                    </Text>
                </View>
                </ScrollView>
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
    titleStyleTow: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 18,
        fontFamily: '微软雅黑',
        color: 'black',
    },
    contentStyle: {
        marginTop: 10,
        marginLeft: 20,
        marginRight:20,
        marginBottom:20,
        fontSize: 16,
        fontFamily: '微软雅黑',
        color: '#898989',
        letterSpacing:2,
        lineHeight:25,
    },
    countStyle: {
        marginTop: 5,
        marginLeft: 50,
        marginBottom: 20,
        fontSize: 14,
        fontFamily: '微软雅黑',
        color: '#898989',
    },
    authorImageStyle:{
        width:30,
        height:30,
        borderRadius: 100,
        marginLeft:40,
    }
});
