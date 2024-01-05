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
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);