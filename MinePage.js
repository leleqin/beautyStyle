import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class MinePage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.imageStyle}
                           source={require('./image/img1.jpg')}
                    >
                    </Image>
                    <View style={{flexDirection: 'column', marginTop: 44}}>
                        <Text style={{color: 'black', fontSize: 20, fontFamily: '微软雅黑', paddingBottom: 5}}>
                            乐乐亲
                        </Text>
                        <Text style={{color: '#898989', fontSize: 16}}>{" 22          34           67"}</Text>
                        <Text style={{color: '#898989', fontSize: 16}}>{"关注       粉丝       点赞"}</Text>
                    </View>
                </View>

                <View style={styles.borderStyle}>
                    <TouchableOpacity onPress={
                        () => {
                            //跳转页面
                            const {navigate} = this.props.navigation;
                            navigate('MinePageJump')
                        }
                    }
                    >
                        <Image
                            style={{width: 50, height: 80, marginTop: 15, marginBottom: 5, marginLeft: 20,}}
                            source={require('./image/essay.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{marginLeft: 20,}}>我的文章</Text>
                </View>
            </View>
        );
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
        marginTop: 40,
        marginRight: 10,
        marginLeft: 40,
        marginBottom: 40,
    },
    borderStyle: {
        flexDirection: 'column',
        width: 300,
        height: 150,
        borderColor: '#9b9b9b',
        borderWidth: 1,
        marginLeft: 30,
        borderRadius: 5,
    }
});
