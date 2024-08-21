import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, TextInput, Button, Modal, TouchableOpacity} from 'react-native';

type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Photo[]>([]);
  const [userId, setUserId] = useState('');
  const [selectedUser, setSelectedUser] = useState<Photo | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const getPhotos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getUserById = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${userId}`);
      const json = await response.json();
      setSelectedUser(json);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      <TextInput
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
        style={{borderWidth: 1, padding: 8, marginBottom: 10}}
      />
      <Button title="Get User" onPress={getUserById} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => { setSelectedUser(item); setModalVisible(true); }}>
              <View>
                <Text>{item.title}</Text>
                <Image source={{uri: item.thumbnailUrl}} style={{width: 150, height: 150}} />
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      {selectedUser && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View style={{width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10}}>
              <Text>Title: {selectedUser.title}</Text>
              <Image source={{uri: selectedUser.url}} style={{width: 250, height: 250}} />
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default App;