const today = new Date();
const year = today.getFullYear() - 2000;
const month = String(today.getMonth() + 1);
const day = String(today.getDate());

const dateElement = document.querySelector('.kb_date');
const setMenu = document.querySelector('.kb_menu_txt');
const billing = document.querySelector(".kb_billing_txt");
const screens = document.querySelectorAll(".kb_section");
const nav = document.querySelectorAll(".kb_nav_container");

let currentView = 1;

const menuText = `돼지불고기와 상추쌈
순살돈까스
웰빙카레
햄감자볶음
건새우아욱된장국
시금치나물
야채샐러드 과일 토스트 커피
건강흑미밥과 햅쌀밥
배추김치와 각종반찬`;

// 위치: 남부터미널역 1번출구/ 서초중앙로42 블루핀타워
//time
dateElement.textContent = `${year}년 ${month}월 ${day}일`;

//txt data
setMenu.innerText = menuText;

//functions
checkScreen();
showCurrentView();
function showCurrentView() {
    nav.forEach(function (div) {
        div.addEventListener('click', function () {
            currentView = div.dataset.index;
            checkScreen();
        })
    })
}

function checkScreen() {
    for (let i = 0; i < screens.length; i++) {
        if (currentView != i) {
            screens[i].style.display = 'none';
        } else {
            screens[i].style.display = 'block';
        }
    }
}

//kakao map
const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
let options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(523954.0, 1084098.0), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var markerPosition  = new kakao.maps.LatLng(523954.0, 1084098.0);

// 마우스 드래그와 모바일 터치를 이용한 지도 이동을 막는다
map.setDraggable(false);

// 지도에 마커를 생성하고 표시한다
var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(523954.0, 1084098.0), // 마커의 좌표
    map: map // 마커를 표시할 지도 객체
});

// 마커 위에 표시할 인포윈도우를 생성한다
var infowindow = new kakao.maps.InfoWindow({
    content : '<div style="padding:5px; color: black; font-size: 0.7rem; text-align: center">강남식당 남부터미널역점</div>' // 인포윈도우에 표시할 내용
});

// 인포윈도우를 지도에 표시한다
infowindow.open(map, marker);