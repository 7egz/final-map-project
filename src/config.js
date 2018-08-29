export 	const points = [
  	{lat: 51.221720, lng: 6.776160,Population:'573,057',Airport:'Düsseldorf International Airport'},
    { lat: 50.933330, lng: 6.950000,Population:'963,395',Airport:'	Cologne Bonn Airport' },
    { lat: 51.456570, lng: 7.012280,Population:'593,085',Airport:'There is no Airport' },
    { lat: 51.432470, lng: 6.765160 ,Population:'504,358',Airport:'There is no Airport'},
    { lat: 50.7374, lng: 7.0982 ,Population:'300,000',Airport:'Bonn Airport'},
    { lat: 51.9607, lng: 7.6261,Population:'290,000',Airport:'There is no Airport'},
    { lat: 51.514940, lng: 7.466000,Population:'588,462',Airport:'Dortmund Airport'},
    { lat: 50.115520, lng: 8.684170,Population:'650,000',Airport:'Frankfurt Airport, Frankfurt-Hahn Airport'},
    { lat: 51.316670, lng: 9.500000,Population:'194,501',Airport:'Kassel Airport'},
    { lat: 50.082580, lng: 8.249320,Population:'272,432',Airport:'There is no Airport'},
];
export const getUrl=(lat,lng)=>`https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}&client_id=ZEAJ5DWT3L3MZDYT4THT5H11X510SDVRNA2CZJYCCZWBUWBO&client_secret=4CPNIOO1LJCIS0H2RXVQOSBAVFQJOTDJ2MOXG43YKZDZG3LL&v=20120610`;
export default {points,getUrl}


