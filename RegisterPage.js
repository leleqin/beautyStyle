import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputedNum: '',
            inputedPW: null,
            updateTowPwd:null,
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

    updateTowPwd(newText){
        this.setState({
            updateTowPwd: newText,
        });
    }

    register = () => {
        if (this.state.updateTowPwd === this.state.inputedPW && this.state.updateTowPwd != null) {
            Alert.alert("注册成功");
            const { navigate } = this.props.navigation;  //获取navigation的navigate方法
            navigate('Login',{userName:this.state.inputedNum,userPwd:this.state.inputedPW});  //跳转到Login界面
        }else if (this.state.updateTowPwd == null){
            Alert.alert("密码不能为空")
        }
        else {
            Alert.alert("两次密码不一致");  //弹出提示框
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入用户名'}
                           onChangeText={(newText) => this.updateNum(newText)}>
                </TextInput>

                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入密码'}
                           secureTextEntry={true}
                           onChangeText={(newText) => this.updatePwd(newText)}>
                </TextInput>

                <TextInput style={styles.textInputStyle}
                           placeholder={'请再次输入密码'}
                           secureTextEntry={true}
                           onChangeText={(newText) => this.updateTowPwd(newText)}>
                </TextInput>

                <TouchableOpacity onPress={this.register
                }>
                    <Text style={styles.buttonStyle}>
                        注册
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={
                    ()=>{
                        //跳转页面
                        const { navigate } = this.props.navigation;
                        navigate('Login')
                    }
                }>
                    <Text style={styles.buttonStyle}>
                        返回
                    </Text>
                </TouchableOpacity>
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
