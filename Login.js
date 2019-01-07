import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputedNum: '',
            inputedPW: null,
        }
    }

    /*
        //做标题的风格定制
        static navigationOptions = ({navigation}) => ({
            headerTitle: `Welcome`,
            herder: null
        });*/

    updateNum(newText) {
        this.setState({
            inputedName: newText,
        });
    }

    updatePwd(newText) {
        this.setState({
            inputedPW: newText,
        });
    }

    login = () => {
        if (this.state.inputedName == '陈家乐' && this.state.inputedPW == '123') {
            const { navigate } = this.props.navigation;  //获取navigation的navigate方法
            navigate('Success');  //跳转到注册过的Home界面
        } else {
            Alert.alert("登陆失败","用户名或密码不正确");  //弹出提示框
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.photos}>
                    <Image style={styles.imageStyle}
                           source={require('./image/img1.jpg')}
                    >
                    </Image>
                </View>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入用户名'}
                           onChangeText={(newText) => this.updateNum(newText)}>
                </TextInput>

                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入密码'}
                           secureTextEntry={true}
                           onChangeText={(newText) => this.updatePwd(newText)}>
                </TextInput>

                <TouchableOpacity onPress={this.login}>
                    <Text style={styles.buttonStyle}>
                        登录
                    </Text>
                </TouchableOpacity>

                <View style={styles.footStyle}>
                    <TouchableOpacity onPress={
                        ()=>{
                            //跳转页面
                            const { navigate } = this.props.navigation;
                            navigate('Register')
                        }
                    }>
                        <Text style={{paddingLeft:20,paddingRight:150}}>新用户注册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    textInputStyle: {
        backgroundColor: '#F5FCFF',
        fontSize: 20,
        margin: 20,
    },
    textDisplayStyle: {
        fontSize: 20,
        margin: 20,
    },
    buttonStyle: {
        backgroundColor: '#F5FCFF',
        color: '#ff5a5b',
        textAlign: 'center',
        fontSize: 25,
        margin: 20,
        borderRadius:10,
        borderColor:'#ff5a5b',
        borderWidth:1,
        borderStyle:'solid',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },
    photos:{
        width: 100,
        height: 100,
        marginBottom:90,
        marginLeft:130
    },
    footStyle:{
        flexDirection: 'row',
        paddingTop:80,
    }
});
