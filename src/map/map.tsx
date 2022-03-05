import React, { useEffect,useState } from 'react';
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
 const MapBtnContainer = styled.div` 
 position: absolute; 
 top: 15px; 
 right: 10px; 
 z-index: 5; 
 border-radius: 5px; 
 display: flex; 
 align-items: center;
  border:1px solid #919191; 
 background-color: #F5F5F5;
` 
const MapControlBtn = styled.div` 
width:40px; 
height:30px; 
display: flex;
 justify-content: center; 
align-items: center; 
text-align:center; 
cursor:pointer; 
`

declare global {
  interface Window {
    kakao: any;
    _map:any;
  }
}

const Map: React.FC = () => {
  const [map, setMap ] = useState<any>(0);

  useEffect(() => {

    let container = document.getElementById('map'); 
    let options = { 
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3
    };

    let map = new window.kakao.maps.Map(container, options); 

    setMap(map)

  }, [])

  const zoomIn = () => { 
    map.setLevel(map.getLevel() - 1); 
  } 

  const zoomOut = () => { 
    map.setLevel(map.getLevel() + 1); 
  }



  return (
    <div className="App">
      <MapContainer id='map'> 
      <MapBtnContainer> 
        <MapControlBtn onClick={zoomIn} style={{borderRight: "1px solid #919191"}} >+</MapControlBtn> 
        <MapControlBtn onClick={zoomOut} >-</MapControlBtn> 
      </MapBtnContainer> 
      </ MapContainer>
    </div>
  );
}

export default Map;
