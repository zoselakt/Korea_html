'use strict'

let array = ['사과', '배', '수박', '포도', '키위', '레몬'];
let obj = {car:'승용차', phone:'iphone', house:'아파트'};

// // 일반 객체타입은 iterable하지 않기 때문에 for of를 사용할 수 없다.
// for(let items of array){
//     console.log("for of구문으로 출력하기: "+items);
// }

// // 객체타입 출력 Object.entries 사용
// for(let [key, val] of Object.entries(obj)){
// console.log("for of 구문으로 출력하기: key:"+ key + " val: "+ val)
// }


// // for in
// for(let items in array){
//     console.log("for in구문으로 index출력하기: "+items);
//     console.log("for in구문으로 value출력하기: "+array[items]);
// }

// // 객체타입 출력
// for (let items in obj){
//     console.log("for in구문으로 index출력하기: "+items);
//     console.log("for in구문으로 value출력하기: "+obj[items]);
// }

let userMap = new Map(); //key-value페어로 이루어진 컬렉션 /중복불가
userMap.set("test", "practice"); // set값 추가
userMap.set("car", "trailer");
userMap.set("lunch", "햄버거");
// console.log(userMap);
console.log(userMap.has("car")); // 주어진 ket가 존재하는지 확인
console.log(userMap.get("test")); // get으로 값불러오기
console.log(userMap.size); // 엔트리의 갯수조회

// for(let items of userMap){
//     console.log(items);
// }