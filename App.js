import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios'
import { Alert } from 'react-native-web';

//overPowered = output




export default class App extends Component{
  constructor(){
    super() //  
    this.state={
      textorsomething: '',
      sankhya: '',
      modal1Visible: false,
      currencykachaabiʑ: {},
      currencyCode1: 'USD',
      currencyCode2: 'INR',
      currencyCode1value: '',
      currencyCode2value: '',
      modal2Visible: false,
      resultInMyConstructor: '',
      USDExchangeRateNameItThatPlease: '',
      ForNowJustSomeInBetweenValue:'', 
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

  calculateorsomething=()=>{
    Alert.alert('calculatedorsomethingidk')
    if(this.state.currencyCode1 === 'USD'){
      this.setState({
        resultInMyConstructor: sankhya * this.state.currencyCode2value
      })
    }
    else if(this.state.currencyCode2 === 'USD'){
      this.setState({
        resultInMyConstructor: sankhya/this.state.currencyCode2value
      })
    }
    else{
      this.setState({
        ForNowJustSomeInBetweenValue: sankhya/USDExchangeRateNameItThatPlease,
        resultInMyConstructor: ForNowJustSomeInBetweenValue*currencyCode2valueisthat
      })
    }
    }
  
    x 
  modal1Display=(bullies)=>{
    this.setState({modal1Visible: bullies})
  }

  modal2Display=(bullies)=>{
    this.setState({modal2Visible: bullies}) 
  }

  getKΣŶ=()=>{
    axios
    .get('https://freecurrencyapi.net/api/v2/latest?apikey=91458540-8b09-11ec-8db9-5d3739fdde2c')
    .then(response=>{
      this.setState({
        currencykachaabiʑ: response.data.data
      })
    })
    
      .catch(errΘr=>{
        alert(errΘr.message)
      })
    
  }

  renderItem1=({item})=>{
    if (item === 'USD'){
      USDExchangeRateNameItThatPlease = this.state.currencies[item];
    }
    return (
      <View>
        <Pressable style={styles.ℳodalPressable}>
          <Text style={{fontSize: 25}} onPress={()=>{this.disGAME1item(item,this.state.currencykachaabiʑ[item])}}>{item}</Text>

        </Pressable>
      </View>
    )
  }

  renderItem2=({item})=>{
    return (
      <View>
        <Pressable style={styles.ℳodalPressable}>
          <Text style={{fontSize: 25}} onPress={()=>{this.disGAME2item(item, this.state.currencykachaabiʑ[item])}}>{item}</Text>

        </Pressable>
      </View>
    )
  }
  
  disGAME1item=(item,value)=>{
    this.setState({
      currencyCode1: item,
      currencyCode1value: value
    })
  }

  disGAME2item=(item,value)=>{
    this.setState({
      currencyCode2: item,
      currencyCode2value: value
    })
  }

  componentDidMount(){
    this.getKΣŶ()
  }

  render(){
    if(Object.keys(this.state.currencykachaabiʑ).length === 0 ){
      return (
        <View>
          <Text>Loading........Go get something to eat 🍔</Text>
        </View>
      )
    }else{
      let currency_ka_chaabiʑ = Object.keys(this.state.currencykachaabiʑ)
    
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar style="auto" />
      <View style={styles.titleContainer}>  
        <Text style={styles.titleText}>Currency Converter</Text>
      </View>

      <View style={styles.currencyMainContainer}>
        <View style={styles.currencySubContainer}>
          <Pressable style={styles.currencyQuarterContainer}>
            <Text style={styles.currencyTextile} onPress={()=>this.modal1Display(true)}>{this.state.currencyCode1}💵</Text>
          </Pressable>

          <Pressable style={styles.currencyQuarterContainer}>
            <Text style={[styles.currencyTextile,{marginLeft:50}]} onPress={()=>this.modal2Display(true)}>{this.state.currencyCode2}💵</Text>
          </Pressable>
        </View>


      
        <View style={styles.currencySubContainer}>
        <TextInput
          style={styles.currencyQuarterContainer}
          onChangeText={()=>this.calculateorsomething()}
          value={this.state.sankhya.toString()}
          placeholder="1"
          //keyboardType="numeric"
        />
          <TextInput
          style={[styles.currencyQuarterContainer,{marginLeft:50}]}
          value={this.state.resultInMyConstructor.toString()}
          editable = {true}  
          //placeholder="75"
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modal1Visible}
        onRequestClose={() => {
          this.modal1Display(!this.state.modal1Visible)
        }}
      >
        <View style={styles.ℳodalStyle}>
          <Pressable>
            <Text onPress={()=>this.modal1Display(!this.state.modal1Visible)}>ok so press this button if you want to close it, if you dont the idk</Text>
          </Pressable>
          <FlatList 
          keyExtractor={(item, index)=>index.toString()}
          data={currency_ka_chaabiʑ}  
          renderItem = {this.renderItem1}
          > 

          </FlatList>
        </View>
        
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modal2Visible}
        onRequestClose={() => {
          this.modal2Display(!this.state.modal2Visible)
        }}
      >
        <View style={styles.ℳodalStyle}>  
          <Pressable>
            <Text onPress={()=>this.modal2Display(!this.state.modal2Visible)}>ok so press this button if you want to close it, if you dont the idk</Text>
          </Pressable>
          <FlatList 
          keyExtractor={(item, index)=>index.toString()}
          data={currency_ka_chaabiʑ}  
          renderItem = {this.renderItem2}
          >

          </FlatList>
        </View>
        
      </Modal>

        
    </SafeAreaView>
  );
}   


  } 
}//render end

//this is embarassing this is embarrasin   



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  currencyTextile: {
    borderWidth: 1,
    backgroundColor: 'lightgoldenrodyellow',
    fontSize: 25
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'turquoise',
    flex: 0.15,
  },
  titleText : {
    fontSize: 25,
  },
  currencyMainContainer: {
    alignItems: 'center',
    //backgroundColor: 'red',
    flex: 0.2
  },
  currencySubContainer: {
    flexDirection: 'row',
    //backgroundColor: 'green',
    marginTop: 15
  },
  currencyQuarterContainer: {
    borderWidth: 0.5,
    fontSize: 25,
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
  },
  ℳodalStyle:{
    flex: 0.5,
    backgroundColor: 'cyan',
    alignItems: 'center'
  },
  ℳodalPressable:{
    fontSize: 20
  }
});
