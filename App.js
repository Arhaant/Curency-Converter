import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';


export default class App extends Component{
  constructor(){
    super()
    this.state={
      textorsomething: '',
      sankhya: '',
    }
  }

  chaabikakarya=(emptyVariable)=>{
    if(emptyVariable == 'see'){
      this.setState({sankhya : ''})
    }
    else if(emptyVariable == 'bakcspaes'){
     //str = 123
     //str.length = 3
     var str = this.state.sankhya
     var overPowered = str.slice(0,str.length-1) 
     this.setState({sankhya : overPowered})
    }
    else{
    emptyVariable=this.state.sankhya + emptyVariable
    this.setState({sankhya : emptyVariable})
    }
  }

  render(){
  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Currency Converter</Text>
      </View>

      <View style={styles.currencyMainContainer}>
        <View style={styles.currencySubContainer}>
          <Pressable style={styles.currencyQuarterContainer}>
            <Text style={styles.currencyTextile}>Currency 1</Text>
          </Pressable>

          <Pressable style={styles.currencyQuarterContainer}>
            <Text style={styles.currencyTextile}>Currency to the right of 1</Text>
          </Pressable>
        </View>


      
        <View style={styles.currencySubContainer}>
        <TextInput
          style={styles.currencyQuarterContainer3}
          onChangeText={(textorsomething)=>this.setState({textorsomething})}
          value={this.state.sankhya.toString()}
          //placeholder="¯\_( ͡° ͜ʖ ͡°)_/¯"
          //keyboardType="numeric"
        />
          <TextInput
          style={styles.currencyQuarterContainer4}
          //value={this.state.sankhya.toString()}
          //placeholder="¯\_(ツ)_/¯"
          //keyboardType="numeric"
        />
        </View>


        </View>
      <View style={styles.chaabikaadda}>
        <View style={styles.chaabikaguchha}>
          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('1')}>1</Text>
          </Pressable>


          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('2')}>2</Text>
          </Pressable>


          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('3')}>3</Text>
          </Pressable>


          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('bakcspaes')}>←</Text>
          </Pressable>
        </View>




        <View style={styles.chaabikaguchha}>
          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('4')}>4</Text>
          </Pressable>


          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('5')}>5</Text>
          </Pressable>


          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('6')}>6</Text>
          </Pressable>


          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('see')}>C</Text>
          </Pressable>
        </View>




        <View style={styles.chaabikaguchha}>
          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('7')}>7</Text>
          </Pressable>


          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('8')}>8</Text>
          </Pressable>


          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('9')}>9</Text>
          </Pressable>


          <Pressable style={styles.chaabikasheily}>
            <Text style={styles.chaabikapath}  onPress={()=>this.chaabikakarya('0')}>0</Text>
          </Pressable>
        </View>


      </View>
    </View>
  );
}

}//render end



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  currencyTextile: {
    //padding:
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.2
  },
  titleText : {
    fontSize: 25,
  },
  currencyMainContainer: {
    alignItems: 'center',
  },
  currencySubContainer: {
    flexDirection: 'row'
  },
  currencyQuarterContainer1: {
    borderWidth: 0.5
  },
  currencyQuarterContainer2: {
    borderWidth: 0.5
  },
  currencyQuarterContainer3: {
    borderWidth: 0.5
  },
  currencyQuarterContainer4: {
    borderWidth: 0.5
  },
  chaabikaguchha: {
    flexDirection: 'row'
  },
  chaabikasheily: {
    borderWidth: 1,
    backgroundColor: "#ff6600",
    flex: 0.25,
    justifyContent: 'center',
  },
  chaabikaadda: {
    flex:0.75,
    //backgroundColor: "#000000"
  },
  chaabikapath:{
    textAlign: 'center',
    height: 100,
    fontSize: 50,
    paddingTop: 12
  }
});
