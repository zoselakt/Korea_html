'use strict'

function check(){
    let fruit = ["사과", "배", "수박", "포도"];
    let count = 0;
    let buy = prompt("1. 과일주문 2.주문취소")
    if(buy == 1){
        let order = prompt("어떤 과일을 주문하시겠습니까?");
        if(order != fruit){
            console.log(`주문하신 ${order}는 재고가 있습니다.`);
            console.log(`${order} 구매하시겠습니까?`);
            let confirm = prompt("1. 구매한다. 2.취소한다.")
            if(confirm == 1){
                console.log("구매성공!");
            }else{
                console.log("취소");
            }
        }
    }else if(buy == 2) {
        console.log("구매가 취소되었습니다.");
    }
}

console.log(check());

//--------------------------------------------------------------------

let inputText = prompt("과일을 입력해주세요.", "과일명");
let product = ["사과", "배", "수박", "포도"];
let count = 0;

function checkProduct(){
    if(count < product.length){
        console.log(product[count]);
        if(inputText == product[count]){
            alert(`${inputText}는 재고가 있습니다.`);
            let checkBuy = confirm("구매하시겠습니까?");
            if(checkBuy){
                alert("구매가 완료되었습니다.");
            }else{
                alert("구매가 취소되었습니다.");
            }
        }
        count++;
        checkProduct(); // 자신을 호출하는 함수
    }
}
checkProduct();