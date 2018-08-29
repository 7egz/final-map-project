import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import {points} from './config';
class Inputs extends Component {
   render(){
       const {result,handleSearch}=this.props;
      return (
         <View>
               <datalist id="points">
                 {
                  points.map((point)=>{
                      return <option key={point.lat} onClick={(evt)=>handleSearch(point.title)} value={point.title}/>
                  })
                 }
              </datalist>
              <div id="search-filter">
                <TextInput id="search-filter-input" list="points"
                    aria-label = 'Enter a city name to filter the result and select one' value={this.props.query}
                    placeholder = "Search for place" onChangeText = {(evt)=>handleSearch(evt)}
                />
                  <ol className="places-list"
                      style={{color: "#fff"}}
                      role="listbox"
                  >
                      {
                          result.map((place)=>(
                              <li
                                  key={place.lat}
                                  tabIndex="0"
                                  style={{fontSize: '1.35em', lineHeight: 1.3, padding:5, cursor: "pointer",color:"white"}}
                                  onClick={(evt)=>handleSearch(place.city)}
                                  role="option"
                                  aria-selected="false"
                              >{place.city}
                              </li>
                          ))}
                  </ol>
              </div>
         </View>
      )
   }
}
export default Inputs

