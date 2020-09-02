import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import * as Speech from 'expo-speech';
import { Icon } from 'react-native-vector-icons';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
  }
  speak = () => {
    var toSay = this.state.text;
    Speech.speak(toSay);
  };
  render() {
    return (
      <View style={styles.container}>
      
        <Header
          barStyle="light-content"
          centerComponent={{
            text: 'Text-To-Speech',
            style: {
              color: '#333333',
              fontSize: 22,
            },
          }}
          containerStyle={{
            backgroundColor: '#2894B2',
            justifyContent: 'space-around',
            borderBottomWidth: 0,
          }}
        />
        <Image
        source={require('./assets/speech.png')}
        style={{width:200,height:200,marginTop:50}}>

        </Image>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ text })}
            placeholder="Type Here..."
          />
      
        <TouchableOpacity style={styles.button} onPress={this.speak}>
          <Text style={{textAlign:'center'}}>Click to Hear Text</Text>
        </TouchableOpacity>
        </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23A8CC',
    alignItems: 'center',
   
  },
  input: {
    borderRadius: 30,
    borderColor: '#333333',
    width: '90%',
    height: 40,
    alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: '#f1f1f1',
    textAlign: 'center'
  },
  button: {
    borderRadius: 7,
    borderColor: '#333333',
    width: '90%',
    height: 40,
    marginTop: '5%',
    backgroundColor: '#2894B2',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: '5%',
    color: '#333333',
  },
});
