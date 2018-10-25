 import React, { Component } from 'react';
import { ListItem,Card ,FormLabel,FormInput,FormValidationMessage} from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import {  Image, View, Text,List,Button} from 'react-native';
import { StackNavigator,RootStack,createStackNavigator,MainStack } from 'react-navigation';
import { Calendar, CalendarList, Agenda,LocaleConfig } from 'react-native-calendars';

export default class AirCalendar extends React.Component {
	render(){
		
		return(
			<Card title="국외여행허가서">
        <FormLabel>군번</FormLabel>
        
        <FormInput
          placeholder="군번"
          autoCapitalize="none"
        />
		<FormLabel>이름</FormLabel>
        
        <FormInput
          placeholder="이름"
          autoCapitalize="none"
        />
		<FormLabel>소속</FormLabel>
        
        <FormInput
          placeholder="군번"
          autoCapitalize="none"
        />
		<FormLabel>목적지</FormLabel>
        
        <FormInput
          placeholder="목적지"
          autoCapitalize="none"
        />
        <Button title="신청" color="#1BA0F2" />
        
      </Card>
		);
	}
}