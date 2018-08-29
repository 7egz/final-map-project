import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
class Inputs extends Component {
   render(){
       const {result,handleSearch,handleList}=this.props;
      return (
         <View>
               
              <div id="search-filter">
                <TextInput id="search-filter-input" list="points"
                    tabIndex="1"
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
                                  tabIndex="1"
                                  role="button"
                                  style={{fontSize: '1.35em', lineHeight: 1.3, padding:5, cursor: "pointer",color:"white"}}
                                  onClick={(evt)=>handleList(place)}
                                  onKeyPress={(evt)=>handleList(place)}
                                  aria-pressed="false"
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

