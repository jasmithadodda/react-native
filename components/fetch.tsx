import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const App1 = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  const fetchUserName = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUserName(data.name);
      } else {
        setUserName('No user found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUserName('No user found');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
        keyboardType="numeric"
      />
      <Button title="Get User Name" onPress={fetchUserName} />
      {userName ? <Text style={styles.userName}>{userName}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
  userName: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App1;
