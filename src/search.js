import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import {points} from './config';
class Inputs extends Component {
   render(){
      return (
         <View>
               <datalist id="points">
                 {
                  points.map((point)=>{
                        return <option key={point.lat} onClick={(evt)=>this.props.handleSearch(point.title)} value={point.title}/>
                  })
                 }
              </datalist>
              <div id="search-filter">
            <TextInput id="search-filter-input" list="points"
               aria-label = 'Enter a city name to filter the result and select one'
               placeholder = "Search for place"
               onChangeText = {(evt)=>this.props.handleSearch(evt)}/></div>
         </View>
      )
   }
}
export default Inputs

