 import React, { Component } from 'react';
import { ListItem,Card ,FormLabel,FormInput,FormValidationMessage,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import {  Image, View, Text,List} from 'react-native';
import { StackNavigator,RootStack,createStackNavigator,MainStack } from 'react-navigation';
import { Calendar, CalendarList, Agenda,LocaleConfig } from 'react-native-calendars';
import ResultCalendar from './ResultCalendar';

export default class SubmitCalendar extends React.Component {
	
	constructor(props) {
		super(props);
		const { navigation } = this.props;
    const startDate = navigation.getParam('startDate', 'NO-ID');
		this.state={
			start:JSON.stringify(startDate.dateString),
			end:''
		};
	}
		
	
	render() {
		 
		return(
	<View>
		<Card title="출타 신청" >
				<FormLabel>휴가 시작일</FormLabel>
				<FormInput name='start' 
				onChangeText={(text) => this.setState({
						start:text
				})} value={this.state.start}
					onChangeText={start => this.setState({ start })}
					/>
				<FormValidationMessage>{'빈칸을 입력해주세요'}</FormValidationMessage>
				<FormLabel>휴가 종료일</FormLabel>
				<FormInput name='end' onChangeText={(text) => this.setState({
						end:text
				})} value={this.state.end} />
				<FormValidationMessage>{'빈칸을 입력해주세요'}</FormValidationMessage>
				
		</Card>
		<View style={{margin:20}}>
			<Button backgroundColor='#1BA0F2' raised title='등록' icon={{name: 'add'}} style={{marginBottom:20}} onPress={()=>this.props.navigation.navigate('ResultCalendar')}/>
			<Button backgroundColor='#1BA0F2' raised title='취소' icon={{name: 'arrow-back'}} onPress={()=>this.props.navigation.goBack()}/>
		</View>
	</View>
			);
	}
}

