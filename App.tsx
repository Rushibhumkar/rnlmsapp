import {View, Text, StatusBar} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        translucent
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
      />
      <Text style={{color: '#000'}}>App</Text>
    </View>
  );
};

export default App;
