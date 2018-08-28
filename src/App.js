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
      if (item.pointer.title === point.title) {
        this.setState({
          activeItem: item,
          activeMarker:marker
        })
      }
    });
      
   }

    /**hold the erarch filter according to the user input */
   handleSearch = (text) => {
      this.setState({ query: text });
      const result = points.filter(item=> item.title.toLowerCase().indexOf(text.toLowerCase()) > -1);
      this.setState({points:result});
   }

    /** fetch all Api data for the marker from 4square*/
 componentDidMount(){
    this.state.points.forEach(pointer=>{
      fetch(getUrl(pointer.lat,pointer.lng)).then(response=>{
        return response.json();
      }).then((data)=>{
        this.state.info.push({data:data.response,pointer : {...pointer}});
      });
		 
    });
   console.log(this.state.info);

  }
    

  /**handle the error */
   componentDidCatch(){
    this.setState({hasError:true})
  }

  render() {
    return (
      this.state.hasError?<h1>Something went wrong...</h1>:
        <div id="app">
        <header tabIndex="0" id="header" style={{lineHeight: "1.5em"}}>Map Project</header>
      <main>

        <nav id="nav">
          <Inputs handleSearch={evt=>{this.handleSearch(evt)}} />
        </nav>
      
          <section id='map'>
            <MapContainer  points={this.state.points} activeMarker={this.state.activeMarker} locationInfo={this.state.activeItem} handleMarkerClick={(props,marker,e,item)=>this.handleMarkerClick(props,marker,e,item)} />
          </section>
         {this.activeItem}

         </main>
         <footer id="footer" >End of the project</footer>
         
      </div>
    );
  }
}



export default App