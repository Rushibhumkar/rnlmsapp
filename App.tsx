import {View, Text, StatusBar, Platform} from 'react-native';
import React from 'react';

const App = () => {
  const statusbarHeight = StatusBar.currentHeight;
  console.log({statusbarHeight});
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Platform.OS === 'ios' ? 12 : statusbarHeight,
      }}>
      <StatusBar
        translucent={true}
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
      />
      <Text style={{color: '#000'}}>App</Text>
    </View>
  );
};

export default App;
