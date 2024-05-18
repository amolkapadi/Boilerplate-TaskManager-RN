import { View, Text, Image, TouchableOpacity,FlatList, TextInput } from 'react-native'
import React, {useState} from 'react'
import { styles } from './Style/InboxStyle'
import { notificationImg, UserProfile, searchImg } from '../../theme/Images'

const Data = [
  {
    id: '1',
    name: 'John Doe',
    status: 'Hello there!',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    receivedBy: 'Today',
  },
  {
    id: '2',
    name: 'Jane Smith',
    status: 'Busy',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    receivedBy: 'Today',
  },
  {
    id: '3',
    name: 'Michael Johnson',
    status: 'Available',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    receivedBy: 'Today',
  },
  {
    id: '4',
    name: 'Emily Williams',
    status: 'Away',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    receivedBy: 'Today',
  },
  {
    id: '5',
    name: 'David Brown',
    status: 'On a call',
    profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
    receivedBy: 'Today',
  },
  {
    id: '6',
    name: 'Olivia Taylor',
    status: 'Offline',
    profileImage: 'https://randomuser.me/api/portraits/women/6.jpg',
    receivedBy: 'Yesterday',
  },
  {
    id: '7',
    name: 'William Jones',
    status: 'Available',
    profileImage: 'https://randomuser.me/api/portraits/men/7.jpg',
   receivedBy: 'Yesterday',
  },
  {
    id: '8',
    name: 'Sophia Davis',
    status: 'Busy',
    profileImage: 'https://randomuser.me/api/portraits/women/8.jpg',
    receivedBy: 'Yesterday',
  },
  {
    id: '9',
    name: 'James Miller',
    status: 'Away',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
   receivedBy: 'Yesterday',
  },
  {
    id: '10',
    name: 'Isabella Wilson',
    status: 'On a call',
    profileImage: 'https://randomuser.me/api/portraits/women/10.jpg',
    receivedBy: 'Yesterday',
  },
  {
    id: '11',
    name: 'Daniel Garcia',
    status: 'Available',
    profileImage: 'https://randomuser.me/api/portraits/men/11.jpg',
   receivedBy: 'Yesterday',
  },
 
];

export default function Inbox() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = Data.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  const renderMessage = ({ item }) => {
    return (
      <View style={styles.messageContainer}>
        <Image source={{ uri: item.profileImage }} style={styles.avatar} />
        <View style={styles.messageContent}>
          <Text style={styles.senderName}>{item.name}</Text>
          <Text style={styles.messageText}>{item.status}</Text>
        </View>
      </View>
    );
  };

  const renderTitle = (title) => (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item, index }) => {
    if (index === 0 || (index > 0 && filteredData[index - 1]?.receivedBy !== item.receivedBy)) {
      return (
        <>
          {renderTitle(item.receivedBy)}
          {renderMessage({ item })}
        </>
      );
    } else {
      return renderMessage({ item });
    }
  };

  return (
    <View style={styles.inboxContiner}>
      <View style={styles.inboxView}>
        <View style={styles.profileView}>
          <View>
            <Image source={UserProfile} style={styles.userProfileImg} />
          </View>
          <View style={styles.details}>
            <Text style={styles.mesText}>Inbox</Text>
            <Text style={styles.tasksText}>New 25 Message</Text>
          </View>
         
        </View>
        <TouchableOpacity>
          <Image source={notificationImg} style={styles.notiImg} />
        </TouchableOpacity>
      </View>

      <View>
          </View>
      <View style={styles.inboxContainerMain}>
          <View >
          <View style={styles.searchView}>
          <TextInput
          placeholder='Search Member'
          style={styles.searchInput}
          onChangeText={(text) => setSearchTerm(text)}
        />
          <Image source={searchImg} style={styles.notiImg} />
          </View>
          {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noResultsText}>No results found</Text>
      )}
          </View>
      </View>
    </View>
  )
}