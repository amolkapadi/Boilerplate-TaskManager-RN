import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Style/HomeStyle'
import { notificationImg, UserProfile, AddTaskImg } from '../../theme/Images'


const tasks = [
  { id: 1, taskName: 'Task 1', taskDetails: 'Details of Task 1', taskStatus: 'Pending' },
  { id: 2, taskName: 'Task 2', taskDetails: 'Details of Task 2', taskStatus: 'Pending' },
  { id: 3, taskName: 'Task 3', taskDetails: 'Details of Task 3', taskStatus: 'Pending' },
  { id: 4, taskName: 'Task 4', taskDetails: 'Details of Task 4', taskStatus: 'Pending' },
  { id: 5, taskName: 'Task 5', taskDetails: 'Details of Task 5', taskStatus: 'Pending' },
];

const TaskItem = ({ taskName, taskDetails, taskStatus }) => (
  <View style={styles.taskContainer}>
    <Text style={styles.taskName}>{taskName}</Text>
    <Text style={styles.taskDetails}>{taskDetails}</Text>
    <Text>Status : {taskStatus}</Text>
  </View>
);

const tasksCustom = [
  { id: 1, taskName: 'Task 1', taskDetails: 'Details of Task 1', myStatus: 'Pending' },
  { id: 2, taskName: 'Task 2', taskDetails: 'Details of Task 2', myStatus: 'Pending' },
  { id: 3, taskName: 'Task 3', taskDetails: 'Details of Task 3', myStatus: 'Pending' },
  { id: 4, taskName: 'Task 4', taskDetails: 'Details of Task 4', myStatus: 'In Progress' },
  { id: 5, taskName: 'Task 5', taskDetails: 'Details of Task 5', myStatus: 'In Progress' },
  { id: 6, taskName: 'Task 6', taskDetails: 'Details of Task 6', myStatus: 'In Progress' },
  { id: 7, taskName: 'Task 7', taskDetails: 'Details of Task 7', myStatus: 'Done' },
  { id: 8, taskName: 'Task 8', taskDetails: 'Details of Task 8', myStatus: 'Done' },
  { id: 9, taskName: 'Task 9', taskDetails: 'Details of Task 9', myStatus: 'Done' },
  { id: 10, taskName: 'Task 9', taskDetails: 'Details of Task 9', myStatus: 'Done' },
  { id: 11, taskName: 'Task 9', taskDetails: 'Details of Task 9', myStatus: 'Done' },
];
const CustomTaskItem = ({ taskName, taskDetails, myStatus }) => {
  let statusColor;

  switch (myStatus) {
    case 'Pending':
      statusColor = 'red';
      break;
    case 'In Progress':
      statusColor = 'yellow';
      break;
    case 'Done':
      statusColor = 'green';
      break;
    default:
      statusColor = 'gray';
      break;
  }
  return (
    <View style={styles.taskContainer}>
      <View style={styles.statusCircle}>
        <Text style={styles.taskName}>{taskName}</Text>
        <View style={[styles.pendingTask, { backgroundColor: statusColor }]}></View>
      </View>
      <View style={styles.statusDetails}>
        <Text style={styles.taskDetails}>{taskDetails}</Text>
        <Text style={styles.taskDetails}>{myStatus}</Text>
      </View>
    </View>
  );
};

export default function Home({ navigation }) {
  const [filteredTasks, setFilteredTasks] = useState(tasksCustom);
  const [activeTab, setActiveTab] = useState('All');
  const filterTasks = (myStatus) => {
    let filtered;
    if (myStatus === 'All') {
      filtered = tasksCustom;
    } else {
      filtered = tasksCustom.filter(task => task.myStatus === myStatus);
    }
    setFilteredTasks(filtered);
    setActiveTab(myStatus);
  };

  const goToTask = () => {
    navigation.navigate('AddTask')
  }
  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeView}>
        <View style={styles.profileView}>
          <View>
            <Image source={UserProfile} style={styles.userProfileImg} />
          </View>
          <View style={styles.details}>
            <Text style={styles.mesText}>Good morning John</Text>
            <Text style={styles.tasksText}>4 Tasks remaining</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={notificationImg} style={styles.notiImg} />
        </TouchableOpacity>
      </View>

      <View style={styles.taskSummaryView}>
        <View style={styles.taskSummaryCard}>
          <Text style={styles.taskText}>Today Task Summary</Text>
          <View style={styles.addView}>
            <View>
              <Text>Progress <Text style={styles.percentageText}>85%</Text> </Text>
            </View>
            <TouchableOpacity onPress={goToTask}>
              <Image source={AddTaskImg} style={styles.addTaskImg} />
            </TouchableOpacity>
          </View>
        </View>
      </View>


      <ScrollView>
        <View style={styles.upComings}>
          <Text style={styles.upcoingText}>UpComing Task</Text>
          <FlatList
            data={tasks}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TaskItem taskName={item.taskName} taskDetails={item.taskDetails} taskStatus={item.taskStatus} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={styles.taskListView}>
          <Text style={styles.upcoingText}>My Task List</Text>
          <View style={styles.filterContainer}>
            <TouchableOpacity onPress={() => filterTasks('All')} style={[styles.filterButton, activeTab === 'All' && styles.activeFilterButton]}>
              <Text style={[styles.filterText, activeTab === 'All' && styles.activeFilterText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => filterTasks('Pending')} style={[styles.filterButton, activeTab === 'Pending' && styles.activeFilterButton]}>
              <Text style={[styles.filterText, activeTab === 'Pending' && styles.activeFilterText]}>Pending</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => filterTasks('In Progress')} style={[styles.filterButton, activeTab === 'In Progress' && styles.activeFilterButton]}>
              <Text style={[styles.filterText, activeTab === 'In Progress' && styles.activeFilterText]}>In Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => filterTasks('Done')} style={[styles.filterButton, activeTab === 'Done' && styles.activeFilterButton]}>
              <Text style={[styles.filterText, activeTab === 'Done' && styles.activeFilterText]}>Done</Text>
            </TouchableOpacity>
          </View>
          {filteredTasks.map((item) => (
            <CustomTaskItem key={item.id} taskName={item.taskName} taskDetails={item.taskDetails} myStatus={item.myStatus} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}