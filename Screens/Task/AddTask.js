import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { styles } from './Style/AddTaskStyle'
import { backArrowImg, calenderImg } from '../../theme/Images'
import DateTimePicker from '@react-native-community/datetimepicker';
export default function AddTask({ navigation }) {
  const goback = () => {
    navigation.navigate('Task')
  }
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [inputFocus, setInputFocus] = useState('');

  const showDatepicker = (input) => {
    setInputFocus(input);
    setShowDatePicker(true);
  };

  const onChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios'); // Close the date picker on iOS after selecting a date
    if (selectedDate) {
      if (inputFocus === 'start') {
        setStartDate(selectedDate);
      } else if (inputFocus === 'end') {
        setEndDate(selectedDate);
      }
    }
  };
  return (
    <ScrollView style={styles.addTaskContainer}>
      <View style={styles.continer}>
        <TouchableOpacity onPress={goback}>
          <Image source={backArrowImg} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.textAdd}>Add Task</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputView}>
          <Text style={styles.label}>Task Name</Text>
          <TextInput placeholder='Task Name' style={styles.Input} />
        </View>
        <View style={styles.inputView}>
        <Text style={styles.label}>Date of Start</Text>
            <View style={styles.dateView}>
            <TextInput
            placeholder="Date of start"
            style={styles.InputDate}
            onFocus={() => showDatepicker('start')}
            value={startDate.toDateString()} // Display selected start date in TextInput
          />
          <TouchableOpacity onPress={() => showDatepicker('start')}>
            <Image source={calenderImg} style={styles.calenderImgs} />
          </TouchableOpacity>
            </View>  
        </View>
        <View style={styles.inputView}>
        <Text style={styles.label}>Date of End</Text>
            <View style={styles.dateView}>
            <TextInput
            placeholder="Date of End"
            style={styles.InputDate}
            onFocus={() => showDatepicker('end')}
            value={endDate.toDateString()} // Display selected end date in TextInput
          />
          <TouchableOpacity onPress={() => showDatepicker('end')}>
            <Image source={calenderImg} style={styles.calenderImgs} />
          </TouchableOpacity>
            </View>  
            {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={inputFocus === 'start' ? startDate : endDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Overview</Text>
          <TextInput placeholder='Overview' style={styles.Input} />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Assign to</Text>
          <TextInput placeholder='Assign to' style={styles.Input} />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Comment</Text>
          <TextInput placeholder='Comment' style={styles.Input} />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Create a task</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}