import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet} from 'react-native';
import Button from 'antd-mobile/lib/button';
import SearchBar from 'react-native-search-box'
import db from '../api/db_functions'

class Home extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      lyrics:''
    };  

  }
  static navigationOptions = { header: null }
  findHymn = () =>{
    db.getHymn(this.state.num,(hymnText)=>{
      this.setState({lyrics:hymnText})
      
      this.props.navigation.navigate('Hymns', {
        hymnNumber: this.state.num,
        hymnText: this.state.lyrics,
      });
    })
  }

  onChange= (value) => {
    this.setState({ num: value });
  };


  render(){
    return(
      <View style={styles.screen}>
        <StatusBar hidden={true}/>
        <View></View>
        <View>
          <SearchBar 
            onChangeText={this.onChange}
            placeholder="Hymn"
            backgroundColor = {"#363B3F"} 
            />
          <Button 
            style={styles.buttonStyle}
            onClick={this.findHymn}
          >
            Search
          </Button>
        </View>     
      </View>
      )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius:15,
    borderColor:'#303337',
    width:200,
    backgroundColor:'#303337'
  },
  screen: {
    backgroundColor:"#363B3F",
    flex:1
  }
});


export default Home;