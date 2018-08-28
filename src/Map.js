import React, { Component } from "react";
import {Map,InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends Component {


handleMarkerClick(props,marker,e,item){
	this.props.handleMarkerClick(props,marker,e,item)
}
  render() {

    return (
    	/**run the map on certain lat and lng*/
      <Map google={this.props.google} 
      	   initialCenter={{
            lat: 51.221720,
            lng: 6.776160
          }}
      	   zoom={9}
      	   >
 		{/**loop on my entery data and add the marker */}
       	{this.props.points.map((item)=><Marker  
       		    onClick={(props,marker,e)=>this.handleMarkerClick(props,marker,e,item)} 
       			key={item.lat}
		       	title={item.title}
		        position={{lat: item.lat, lng: item.lng }}
		        />
       )}
    
     {/**view info about the city*/}
  		<InfoWindow 
       		marker={this.props.activeMarker}
			visible={this.props.locationInfo ? true : false}
       		>
             <div>
		 	    {this.props.locationInfo && 
		 	    	<div>
		 	    	<h4>{this.props.locationInfo.pointer.title}</h4>
		 	    	<p>Address: {this.props.locationInfo.pointer.title}</p>
		 	    	<p>Population: {this.props.locationInfo.pointer.Population}</p>
		 	    	<p>Airport: {this.props.locationInfo.pointer.Airport}</p>
					</div>
		 	    }

		     </div>		

     	 </InfoWindow>
 

      </Map>
    );
  }
} 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAuzKrZrw3HuX-HdzqK-brJUWUpGbUoiow')
})(MapContainer)


