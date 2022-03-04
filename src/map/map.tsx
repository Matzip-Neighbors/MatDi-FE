import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map: React.FC = () => {
  useEffect(() => {

    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = { //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    var positions = [
      {
          content: '<div>카카오</div>', 
          latlng: new window.kakao.maps.LatLng(33.450705, 126.570677)
      },
      {
          content: '<div>생태연못</div>', 
          latlng: new window.kakao.maps.LatLng(33.450936, 126.569477)
      },
      {
          content: '<div>텃밭</div>', 
          latlng: new window.kakao.maps.LatLng(33.450879, 126.569940)
      },
      {
          content: '<div>근린공원</div>',
          latlng: new window.kakao.maps.LatLng(33.451393, 126.570738)
      }
  ];

  for (var i = 0; i < positions.length; i ++) {

    var marker = new window.kakao.maps.Marker({
        map: map,
        position: positions[i].latlng 
    });


    var infowindow = new window.kakao.maps.InfoWindow({
        content: positions[i].content 
    });

    window.kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    window.kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}


function makeOverListener(map:any, marker:any, infowindow:any) {
    return function() {
        infowindow.open(map, marker);
    };
}

function makeOutListener(infowindow:any) {
    return function() {
        infowindow.close();
    };
}

   

  }, [])

  return (
    <div className="App">
      <div id="map" style={{ width: "100vw", height: "100vh" }} />
    </div>
  );
}

export default Map;
