import React from 'react';
import { Text, View, Image} from 'react-native';
import { StackNavigator } from 'react-navigation'


class Greeting extends React.Component {
    render() {
      return (
        <Text>Hello {this.props.name}!</Text>
      );
    }
  }

export default class Props extends React.Component {
    static navigationOptions = { title: "Learn about Props" }
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          };
      return (
        <View>
          <Text>How i am trying to master props</Text>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <View style={{alignItems: "center"}}>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
        </View>
          
        </View>
        
      
      )
    }
  }
