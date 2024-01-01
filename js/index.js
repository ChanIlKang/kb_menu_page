const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const dateElement = document.querySelector('.kb_date');
dateElement.textContent = `${year}년 ${month}월 ${day}일`;