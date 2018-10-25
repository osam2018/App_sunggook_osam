 import React, { Component } from 'react';
import { ListItem,Card ,FormLabel,FormInput,FormValidationMessage} from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import {  Image, View, Text,List,Button} from 'react-native';
import { StackNavigator,RootStack,createStackNavigator,MainStack } from 'react-navigation';
import { Calendar, CalendarList, Agenda,LocaleConfig } from 'react-native-calendars';

export default class infoCalendar extends React.Component {
	render(){
		
		return(
			<View 
				style={{flex:1, justifyContent:'center',alignItems:'center',paddingBottom:60}}>
				
				<Text style={{ color:'#1BA0F2',fontWeight:'bold',fontSize:20}}> 이성국님의 휴가는 "2018-10-28"일부터 "2018-10-30"일까지 입니다.</Text>
				<Button
          onPress={() => this.props.navigation.navigate('Details')}
			color='#1BA0F2'
          title="닫기"
        />
			</View>
		);
	}
}