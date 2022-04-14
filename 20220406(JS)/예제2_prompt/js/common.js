'use strict'

// 반지름 입력값에 따라 원의 둘레 구하기
const PI = 3.14159265;
let radiusNum = prompt("원의 둘레구하기", "반지름을 입력해주세요, 숫자");
radiusNum = Number(radiusNum);
console.log(`입력한 반지름 값: ${radiusNum}, 데이터 타입: ${typeof(radiusNum)}`);

const radius = 2 * PI * radiusNum;
alert(`반지름은 ${radiusNum}이고, 원의 둘레는 ${radius} 입니다.`);