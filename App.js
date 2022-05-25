import * as React from 'react';

import { StyleSheet, Text, View,TextInput , SafeAreaView, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      word: ""
    }
  }
  render(){
    return (
      <SafeAreaView>
        <View>
        <View style ={styles.titleCont}>
          <Text style={styles.title}>Monkey Chunky</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter your word"
          onChangeText={text =>{
            this.setState({word: text})
          }}
        />

        <TouchableOpacity style={styles.button}>
          <Text style = {styles.text}>GO</Text>
        </TouchableOpacity>

        <Text style={styles.text}> {this.state.word} </Text>
        
        
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:50,
    fontWeight:"bold",
    alignSelf:"center",
    color:"white"
  },
  titleCont:{
    backgroundColor:"#f0ca62",
    padding: 10,

  },
  input: {
    height: 40,
    width: 350,
    marginTop: 150,
    borderWidth: 1,
    padding: 10,
    alignSelf:"center"
  },
  button:{
    backgroundColor:"#2f8bed",
    width : 100,
    height:100,
    borderRadius: 50,
    padding: 10,
    alignSelf:"center",
    alignContent:"center",
    justifyContent:"center",
    marginTop:50
  },
  text:{
    alignSelf:"center",
    fontSize:20,
    fontWeight:"bold"

  }
});
