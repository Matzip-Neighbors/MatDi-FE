import React from 'react';
import styled from "styled-components";
const MapContainer = styled.div` 
position: relative; 
margin: auto; 
margin-bottom: 60px; 
width: 900px; 
height: 500px; 
@media (max-width: 1000px){ 
  width: 85%; 
}; 
@media (max-width: 450px){ 
  width: 95%; height: 400px; 
}
`
// const Map: React.FC = () => {
//   const [map, setMap ] = useState<any>(0);

//   useEffect(() => {

//     let container = document.getElementById('map'); 
//     let options = { 
//       center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
//       level: 3
//     };

//     let map = new window.kakao.maps.Map(container, options); 

//     setMap(map)

//   }, [])

//   const zoomIn = () => { 
//     map.setLevel(map.getLevel() - 1); 
//   } 

//   const zoomOut = () => { 
//     map.setLevel(map.getLevel() + 1); 
//   }



//   return (
//     <div className="App">
//       <MapContainer id='map'> 
//       <MapBtnContainer> 
//         <MapControlBtn onClick={zoomIn} style={{borderRight: "1px solid #919191"}} >+</MapControlBtn> 
//         <MapControlBtn onClick={zoomOut} >-</MapControlBtn> 
//       </MapBtnContainer> 
//       </ MapContainer>
//     </div>
//   );
// }
const { kakao } = window as any;

function Location() {
  const container = document.getElementById('myMap');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      const options = {
        center: new kakao.maps.LatLng(lat, lon),
        level: 5
      }
      let map = new kakao.maps.Map(container, options);

      let markerPosition = new kakao.maps.LatLng(lat, lon);

      let marker = new kakao.maps.Marker({
        position: markerPosition,
        title: "현재 위치"
      });

      marker.setMap(map);
    },
)
}
  return (
    <MapContainer>
      <div id='myMap' style={{
        width: '480px',
        height: '600px'
      }}>
      </div>
    </MapContainer>
  )
}
export default Location;
