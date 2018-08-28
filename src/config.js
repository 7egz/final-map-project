export 	const points = [
  	{lat: 51.221720, lng: 6.776160,title:'Dusseldorf',Population:'573,057',Airport:'Düsseldorf International Airport'},
    { lat: 50.933330, lng: 6.950000,title:'Koln',Population:'963,395',Airport:'	Cologne Bonn Airport' },
    { lat: 51.456570, lng: 7.012280,title:'Essen',Population:'593,085',Airport:'There is no Airport' },
    { lat: 51.432470, lng: 6.765160 ,title:'Duisburg',Population:'504,358',Airport:'There is no Airport'},
    { lat: 51.514940, lng: 7.466000,title:'Dortmund',Population:'588,462',Airport:'Dortmund Airport'}
];
export const getUrl=(lat,lng)=>`https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}&client_id=ZEAJ5DWT3L3MZDYT4THT5H11X510SDVRNA2CZJYCCZWBUWBO&client_secret=4CPNIOO1LJCIS0H2RXVQOSBAVFQJOTDJ2MOXG43YKZDZG3LL&v=20120610`;
export default {points,getUrl}


