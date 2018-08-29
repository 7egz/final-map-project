import React, { Component } from "react";
import MapContainer from './Map.js';
import Inputs from './search.js'
import {points,getUrl} from './config';
import './App.css';

class App extends Component {
  
   state = {
      query: '',
      hasError:false,
      info:[],
      activeItem : null,
      activeMarker: null,
      points : [...points]
   }
 /** holds current cliked marker information  */
   handleMarkerClick = (props,marker,e,point)=>{
    this.state.info.forEach((item)=>{
      if (item.pointer.city === point.city) {
        this.setState({
          activeItem: item,
          activeMarker:marker
        })
      }
    });
   }

    /**hold the search filter according to the user input */
   handleSearch = (text) => {
      this.setState({ query: text });
      const result = points.filter(item=> item.city.toLowerCase().indexOf(text.toLowerCase()) > -1);
      this.setState({points:result});
   }

    /** fetch all Api data for the marker from 4square*/
 componentDidMount(){
    this.state.points.forEach(pointer=>{
      fetch(getUrl(pointer.lat,pointer.lng)).then(response=>{
        return response.json();
      }).then((data)=>{
              pointer.country=data.response.venues[0].location.country;
              pointer.city=data.response.venues[0].location.city;
              this.setState({points})
        this.state.info.push({data:data.response,pointer : {...pointer}});
      });

    });
  }

  /**handle the error */
   componentDidCatch(){
    this.setState({hasError:true})
  }

  render() {
    return (
      this.state.hasError?<h1>Something went wrong...</h1>:
        <div id="app">
        <header tabIndex="0" id="header">
			Find Places To Hangout While Visiting Germany
		</header>
      <main>
          <section id='map'>
              <MapContainer  points={this.state.points} activeMarker={this.state.activeMarker} locationInfo={this.state.activeItem} handleMarkerClick={(props,marker,e,item)=>this.handleMarkerClick(props,marker,e,item)} />
          </section>
        <nav id="nav">
          <Inputs handleSearch={evt=>{this.handleSearch(evt)}} query={this.state.query} result={this.state.points}/>
        </nav>
      </main>
         <footer id="footer" >Copyrights reserved 2018@ Mahmoud Hassan</footer>
      </div>
    );
  }
}
export default App