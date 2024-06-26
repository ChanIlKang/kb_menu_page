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

const menuText = `돼지불고기
두부조림
야채튀김
참치김치찌개 오징어젓 무침
숙주나물
햄야채볶음밥과 흰쌀밥
가지나물
야채샐러드 과일 토스트
배추김치와 각종반찬`;

// 위치: 남부터미널역 1번출구/ 서초중앙로42 블루핀타워
//time
dateElement.textContent = `${year}년 ${month}월 ${day}일`;

//txt data
setMenu.innerText = menuText;

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
    staticMap.relayout();
}

//kakao map 37.48587450311861, 127.01609527609358

// 이미지 지도에서 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(37.48587450311861, 127.01609527609358);

// 이미지 지도에 표시할 마커입니다
// 이미지 지도에 표시할 마커는 Object 형태입니다
var marker = {
    position: markerPosition
};

var staticMapContainer = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
    staticMapOption = {
        center: new kakao.maps.LatLng(37.48587450311861, 127.01609527609358), // 이미지 지도의 중심좌표
        level: 1, // 이미지 지도의 확대 레벨
        marker: marker // 이미지 지도에 표시할 마커
    };

// 이미지 지도를 생성합니다
var staticMap = new kakao.maps.Map(staticMapContainer, staticMapOption);


//functions
checkScreen();
showCurrentView();