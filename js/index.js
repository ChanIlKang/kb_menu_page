const today = new Date();
const year = today.getFullYear() - 2000;
const month = String(today.getMonth() + 1);
const day = String(today.getDate());

const dateElement = document.querySelector('.kb_date');
dateElement.textContent = `${year}년 ${month}월 ${day}일`;

const menuText = `폭찹스테이크
양송이토마토파스타
감자고로케
속풀이 김치콩나물국
제철 물미역줄기볶음
숙주나물과 오이피클
야채샐러드
건강흑미밥과 햅쌀밥
배추김치와 각종반찬
과일 토스트 커피`;

const setMenu = document.querySelector('.kb_menu_txt');

setMenu.innerText = menuText;

const basicInfo = `강남밥상 남부터미널점
남부터미널역(1번출구) 깐부치킨 퓨전캐쥬얼뷔페
이용시간: 조식특선 월~토 06:30~08:30
런치뷔페 월~토 11:00~14:00
이용요금: 1인이용시 현금 8,500원 / 카드 9,000원 식권 10장 현금 75,000원 / 카드 85,000원
위치: 남부터미널역 1번출구/ 서초중앙로42 블루핀타워`