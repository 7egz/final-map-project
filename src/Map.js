import React, { Component } from "react";
import {Map,InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends Component {


handleMarkerClick(props,marker,e,item){
	this.props.handleMarkerClick(props,marker,e,item)
}
  render() {
	const  {locationInfo,points} = this.props;

    return (
    	/**run the map on certain lat and lng*/
      <Map google={this.props.google} 
      	   initialCenter={{
            lat: 51.221720,
            lng: 6.776160
          }}
      	   zoom={8}
      	   >
 		{/**loop on my entery data and add the marker */}
       	{points.map((item)=><Marker
       		 onClick={(props,marker,e)=>this.handleMarkerClick(props,marker,e,item)} 
       			key={item.lat}
		       	title={item.city}
            animation= {this.props.google.maps.Animation.DROP}
		        position={{lat: item.lat, lng: item.lng }}
		        />
       )}
    
     {/**view info about the city*/}
  		<InfoWindow 
       		marker={this.props.activeMarker}
			   visible={locationInfo ? true : false}
       		>
             <div>
		 	       {locationInfo && 
		 	    	<div>
		 	    	<h4>About the City</h4>
            <p>Country: {locationInfo.pointer.country}</p>
		 	    	<p>City: {locationInfo.pointer.city}</p>
		 	    	<p>Population: {locationInfo.pointer.Population}</p>
		 	    	<p>Airport: {locationInfo.pointer.Airport}</p>
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


