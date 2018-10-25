import React from 'react';
import { ListItem ,FormInput , FormLabel, FormValidationMessage,Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import { Button,Image, View, Text,List,FlatList, StyleSheet,TextInput ,ActivityIndicator} from 'react-native';
import { StackNavigator,Navigation ,createStackNavigator} from 'react-navigation'; // 1.0.0-beta.27
import ApplyCalendar from './Components/ApplyCalendar';
import SubmitCalendar from './Components/SubmitCalendar';
import ResultCalendar from './Components/ResultCalendar';
import infoCalendar from './Components/infoCalendar';
import leftCalendar from './Components/leftCalendar';
import AirCalendar from './Components/AirCalendar';
import { Provider,connect } from 'react-redux';
import store from './server';
import { bindActionCreators } from 'redux';
import server from './server/server';
import * as serverDispatcher from './server/server';

const elementList= [
	{name:'출타 신청',icon:'add'},{name: '출타 변경/삭제',icon:'edit'},{name:'국외 여행 신청',icon:'airplanemode-active'},{name:'잔여 휴가 확인',icon:'check'},{name:'내 정보',icon:'account-circle'}
];

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./21.jpg')}
        style={{ width: 350, height: 100 ,marginBottom:60}}
      />
    );
  }
}

export class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  render() {
	 
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingBottom:70,backgroundColor:"#1BA0F2"}}>
        <Text style={{fontSize:40,fontWeight:'bold',marginBottom:50,color:'#FFFFFF'}}>로그인</Text>
        {this.state.errorMessage &&
          <FormValidationMessage>
            {this.state.errorMessage}
          </FormValidationMessage>}
		
        <FormInput
          autoCapitalize="none"
          onChangeText={email => this.setState({ email })}
          
			placeholder="이메일/아이디"
			containerStyle={{width:"50%"}}
			
        />
			
        <FormInput
          secureTextEntry
          autoCapitalize="none"
			placeholder="비밀번호"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
			containerStyle={{width:"50%",marginBottom:30}}
        />
        <Button title="로그인" onPress={() => this.props.navigation.navigate('Details')} color="#fff" />
        <Button
          title="회원가입" color="#fff"
          onPress={() => this.props.navigation.navigate('SignUp',{otherparam:'tjdrnr0557님 환영합니다'})}
        />
      </View>
    )
  }
}


export  class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null,milnum:'',name:'' }

render() {
    return (
      <Card title="회원가입을 해주세요">
        <FormLabel>이메일/아이디</FormLabel>
        {this.state.errorMessage &&
          <FormValidationMessage>
            {this.state.errorMessage}
          </FormValidationMessage>}
        <FormInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
			 <FormLabel>비밀번호</FormLabel>
        <FormInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
		<FormLabel>군번</FormLabel>
        {this.state.errorMessage &&
          <FormValidationMessage>
            {this.state.errorMessage}
          </FormValidationMessage>}
        <FormInput
			secureTextEntry
          autoCapitalize="none"
			style={styles.textInput}
          onChangeText={milnum => this.setState({ milnum })}
          value={this.state.milnum}
        />
		<FormLabel>이름</FormLabel>
        {this.state.errorMessage &&
          <FormValidationMessage>
            {this.state.errorMessage}
          </FormValidationMessage>}
        <FormInput
			secureTextEntry
			style={styles.textInput}
          autoCapitalize="none"
          onChangeText={milnum => this.setState({ name })}
          value={this.state.name}
			
        />
			<FormLabel>잔여 휴가일수</FormLabel>
        {this.state.errorMessage &&
          <FormValidationMessage>
            {this.state.errorMessage}
          </FormValidationMessage>}
        <FormInput
			secureTextEntry
			style={styles.textInput}
          autoCapitalize="none"
         

			containerStyle={{marginBottom:30}}
        />
        <Button title="회원가입" onPress={() => this.props.navigation.navigate('Details')} color="#1BA0F2" />
        <Button
          title="Already have an account? Login"
			color="#1BA0F2"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </Card>
    )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:"#1BA0F2",paddingBottom:100}}>
			<Text style={{fontSize:30,fontWeight:'bold',color:"#fff",paddingBottom:30}}>출타종합체계어플</Text>
        <LogoTitle />
			
        <Button
          title="앱 시작하기" color="#fff"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Login', {
              itemId: 86,
              otherParam: '',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
	 
    return {
      title: params ? params.otherParam : ''
     
    };
  };
	
  render() {
	  
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null; 

    return (
			<View>
			{
				elementList.map((l,i)=> (
					i===4 ?  <ListItem
					key={i}
					title={l.name}
					leftIcon={{name: l.icon}}
					onPress={()=> this.props.navigation.navigate('infoCalendar')}
				/> :
					i===3 ? 
					<ListItem
					key={i}
					title={l.name}
					leftIcon={{name: l.icon}}
					onPress={()=> this.props.navigation.navigate('leftCalendar')}
			
				/>
					:
					i===2?
					<ListItem
					key={i}
					title={l.name}
					leftIcon={{name: l.icon}}
					onPress={()=> this.props.navigation.navigate('AirCalendar')}
			
				/>
					:
				<ListItem
					key={i}
					title={l.name}
					leftIcon={{name: l.icon}}
					onPress={()=> this.props.navigation.navigate('ApplyCalendar')}
			
				/>
					
				))
			}
			</View>

    );
  }
}

export class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20,color:'#1BA0F2' }}>출타를 신청하여 서버에 등록하고 서버에서 개인별로 휴가상황을 알려주는 어플리케이션입니다.</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
			color='#1BA0F2'
          title="닫기"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})

export const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
	ApplyCalendar: ApplyCalendar,
	SubmitCalendar: SubmitCalendar,
	  ResultCalendar: ResultCalendar,
	  leftCalendar:leftCalendar,
	  AirCalendar:AirCalendar,
	Login:Login,
	SignUp:SignUp,
	Loading:Loading, 
	  infoCalendar,infoCalendar
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1BA0F2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export const RootStack = createStackNavigator(
  {
    Main:  MainStack,
    MyModal: ModalScreen,
	  
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export class App extends React.Component {

  render() {
    return <RootStack />;
  }
}

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};


export default Root;