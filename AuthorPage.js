import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
} from 'react-native';
import recommendData from './recommendData';

import {StackNavigator} from 'react-navigation'

type Props = {};
var navigation = null;
export default class AuthorPage extends Component<Props> {
    constructor(props) {
        super(props);
        navigation = this.props.navigation;
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged:(s1,s2) => s1 !== s2,
        })

        this.state = {
            dataSource: ds.cloneWithRowsAndSections(recommendData)
        }
    }

    componentDidMount(){
        this.getNet();
    }

    getNet(){
        fetch('http://www.wanandroid.com/tools/mockapi/14152/demo')//请求地址
            .then((response) => {
                if (response.ok){
                    return response.json();
                }
            })//取数据
            .then((responseData) => {//处理数据
                //通过setState()方法重新渲染界面
                let ds = new ListView.DataSource({
                    rowHasChanged: (r1, r2) => r1 !== r2,
                    sectionHeaderHasChanged:(s1,s2) => s1 !== s2,
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
                ()=>{
                    //跳转页面
                    navigation.navigate('AuthorListPageJump',{author:rowData.author,icon:rowData.icon})
                }
            }>
                <View style={{
                    borderBottomColor: '#d6d6d6',
                    borderStyle: 'solid',
                    borderBottomWidth: 1,
                }}>
                    {/*头像*/}
                    <View style={{flexDirection: 'row', width: '100%', height: 80, marginBottom: 10}}>
                        <View style={{width: 60, height: 60}}>
                            <Image style={styles.imageStyle}
                                   source={{uri:rowData.icon}}
                            >
                            </Image>
                        </View>
                        <View style={{flexDirection: 'column',marginLeft: 35,}}>
                            {/*作者名*/}
                            <Text style={styles.titleStyle}>
                                {rowData.author}
                            </Text>
                            {/*作者描述*/}
                            <Text style={{marginTop:8,color:'#898989',fontSize:14}}>
                                {rowData.detailed}
                            </Text>
                        </View>
                    </View>
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
        width: '100%',
        height: '100%',
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 100
    },
    titleStyle: {
        marginTop: 25,
        fontSize: 16,
        fontFamily: '微软雅黑',
        color: 'black',
    },
});
