/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Axios from 'axios';
import {Button, NativeBaseProvider} from 'native-base';
import User from './components/User';

const App = () => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    console.log('Button is pressed');
    try {
      const {data} = await Axios.get('https://randomuser.me/api/');
      const userDetail = data.results[0];
      setDetails(userDetail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!details) {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Loading...</Text>
      </View>
    );
  } else {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <View>
            <User details={details} />
          </View>
          <Button
            borderRadius="full"
            style={styles.buttton}
            onPress={() => fetchDetails()}>
            <Text style={{color: 'white'}}>New user</Text>
          </Button>
        </View>
      </NativeBaseProvider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  buttton: {
    marginTop: 30,
    paddingHorizontal: 40,
  },
});

export default App;
