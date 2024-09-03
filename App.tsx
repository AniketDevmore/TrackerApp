import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={{color:'#000'}}>
        Hello 
      </Text>
      <StatusBar barStyle={'default'} />
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor:'#fff',
  alignItems:'center',
  justifyContent:'center'
}
});

export default App;
