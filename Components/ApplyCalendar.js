import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import { Button, Image, View, Text,List,FlatList } from 'react-native';
import { StackNavigator,RootStack ,createStackNavigator,MainStack} from 'react-navigation';
import { Calendar, CalendarList, Agenda,LocaleConfig } from 'react-native-calendars';
import SubmitCalendar from './SubmitCalendar';

LocaleConfig.locales['fr'] = {
  monthNames: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Octe','Nov','Dec'],
  monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Octe','Nov','Dec'],
  dayNames: ['Sun','Mon','Tue','Wen','Thur','Fri','Sat'],
  dayNamesShort: ['일','월','화','수','목','금','토']
};

LocaleConfig.defaultLocale = 'fr';


class ApplyCalendar extends React.Component {

	render(){
		return (
		<Calendar
  // Initially visible month. Default = Date()
  current={'2018-10-26'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2018-10-01'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2018-12-31'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {this.props.navigation.navigate('SubmitCalendar',{startDate: day})}
				}
  // Handler which gets executed on day long press. Default = undefined

  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={false}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  //renderArrow={(left,right)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={false}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={false}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.

  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={substractMonth => substractMonth()}
  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
/>
				
				
		);
	}

	
}


export default ApplyCalendar;