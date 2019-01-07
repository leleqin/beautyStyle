import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import majorData from './majorData';

var navigation = null;
type Props = {};
export default class InitDiscovery extends Component<Props> {

    constructor(props) {
        super(props);
        navigation = this.props.navigation;
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        })

        this.state = {
            dataSource: ds.cloneWithRowsAndSections(majorData)
        }
    }

    componentDidMount() {
        this.getNet();
    }

    getNet() {
        fetch('http://www.wanandroid.com/tools/mockapi/14152/majorData')//请求地址
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
                    navigation.navigate('MajorListPageJump', {
                        icon: rowData.icon,
                        title: rowData.title,
                        like: rowData.like,
                        author: rowData.author,
                        fans: rowData.fans
                    })
                }
            }>
                <View style={{
                    borderBottomColor: '#9b9b9b',
                    borderStyle: 'solid',
                    borderBottomWidth: 1,
                }}>
                    {/*头像*/}
                    <View style={{flexDirection: 'row', width: '100%', height: 80}}>
                        <View style={{width: 60, height: 60}}>
                            <Image style={styles.imageStyle}
                                   source={{uri: rowData.icon}}
                            >
                            </Image>
                        </View>
                        {/*标题*/}
                        <Text style={styles.titleStyle}>
                            {rowData.title}
                        </Text>
                    </View>
                    {/*点赞浏览量*/}
                    <Text style={styles.countStyle}>
                        点赞{"  "}{rowData.like} {"     "} 专题作者数{"  "}{rowData.author}{"     "} 粉丝数{"  "}{rowData.fans}
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
    titleStyle: {
        marginTop: 30,
        marginLeft: 35,
        fontSize: 18,
        fontFamily: '微软雅黑',
        color: 'black',
    },
    countStyle: {
        marginTop: 15,
        marginLeft: 50,
        marginBottom: 10,
        fontSize: 14,
        fontFamily: '微软雅黑',
        color: '#898989',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 20
    }
});
