import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, ListView,
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import recommendData from './recommendData'


type Props = {};
var navigation = null;
export default class MinePage extends Component<Props> {

    constructor(props) {
        super(props);
        navigation = this.props.navigation;
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        })

        this.state = {
            dataSource: ds.cloneWithRowsAndSections(recommendData)
        }
    }

    componentDidMount() {
        this.getNet();
    }

    getNet() {
        fetch('http://www.wanandroid.com/tools/mockapi/14152/demo')//请求地址
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })//取数据
            .then((responseData) => {//处理数据
                //通过setState()方法重新渲染界面
                let ds = new ListView.DataSource({
                    rowHasChanged: (r1, r2) => r1 !== r2,
                    sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
                })
                this.setState({
                    dataSource: ds.cloneWithRowsAndSections(responseData)
                })
            })
            .catch((error) => {
                console.warn(error);
            }).done();
    }

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                {/*标头*/}
                <View style={styles.titleStyle}>
                    <TouchableOpacity
                        onPress={
                            () => {
                                //跳转页面
                                const {navigate} = this.props.navigation;
                                navigate('Success')
                            }
                        }
                    >
                        <Text style={{color: '#898989', fontSize: 20, fontFamily: '微软雅黑'}}>
                            {"←  返回"}
                        </Text>
                    </TouchableOpacity>
                </View>
                {/*专题信息*/}
                <View style={{
                    flexDirection: 'row',
                    borderStyle: 'solid',
                    borderBottomColor: '#ff5a5b',
                    borderBottomWidth: 3
                }}>
                    <Image style={styles.imageStyle}
                           source={{uri: params.icon}}
                    >
                    </Image>
                    <View style={{flexDirection: 'column', marginTop: 44}}>
                        <Text style={{color: 'black', fontSize: 20, fontFamily: '微软雅黑', paddingBottom: 5}}>
                            {params.title}
                        </Text>
                        <Text style={{
                            color: '#898989',
                            fontSize: 16
                        }}> {"     "}{params.author}{"              "}{params.fans}{"          "}{params.like}</Text>
                        <Text style={{color: '#898989', fontSize: 16}}>{"专题作者       粉丝       点赞"}</Text>
                    </View>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        );
    }

    _renderRow(rowData) {
        return (
            <TouchableOpacity onPress={
                () => {
                    //跳转页面
                    navigation.navigate('ContentPageJump', {
                        title: rowData.title,
                        content: rowData.content,
                        like: rowData.like,
                        skim: rowData.skim,
                        icon:rowData.icon,
                        author:rowData.author,
                    })
                }
            }>

                <View style={{
                    borderBottomColor: '#9b9b9b',
                    borderStyle: 'solid',
                    borderBottomWidth: 1,
                }}>
                    {/*标题*/}
                    <Text style={styles.titleStyleTow}
                          numberOfLines={1}
                    >
                        {rowData.title}
                    </Text>
                    {/*内容*/}
                    <Text style={styles.contentStyle}
                          numberOfLines={3}
                    >
                        {"      "}{rowData.content}
                    </Text>
                    {/*点赞浏览量*/}
                    <Text style={styles.countStyle}>
                        点赞{"  "}{rowData.like}{"      "}浏览量{"  "}{rowData.skim}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    imageStyle: {
        width: 90,
        height: 90,
        borderRadius: 100,
        marginTop: 30,
        marginRight: 10,
        marginLeft: 40,
        marginBottom: 20,
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
        marginRight: 15,
        fontSize: 16,
        fontFamily: '微软雅黑',
        color: '#898989',
        letterSpacing: 2,
        lineHeight: 25,
    },
    countStyle: {
        marginTop: 15,
        marginLeft: 50,
        marginBottom: 20,
        fontSize: 14,
        fontFamily: '微软雅黑',
        color: '#898989',
    }
});
