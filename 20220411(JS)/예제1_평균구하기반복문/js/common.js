'use strict'

window.onload = function(){

    var title = ["이름", "나이", "키", "점수", "평균", "합계"];
    var name = ["홍길동", "박길동", "김길동", "이길동", "최길동"];
    var age = [30, 18, 21, 35, 38];
    var height = [175, 180, 190, 185, 178];
    var point = [85, 88, 90, 95, 95];
    
    var list = '';

    let tisum = '';
    for (let i=0; i<title.length; i++){
        tisum += title[i];
    }
    console.log(tisum);

    // let nasum = "";
    // for (let i=0; i<name.length; i++){
    //     nasum += name[i];
    // }
    // console.log(nasum);
    
    function total1 (avgNum){
        let total = 0;
        let myAge = avgNum.length;
        let avg;
        for(var i=0; i<avgNum.length; i++){
            total += avgNum[i];
        }
        return avg = total / myAge;
    }
    function total2 (plusNum){
        let total = 0;
        let myAge = plusNum.length;
        let plus;
        for(var i=0; i<plusNum.length; i++){
            total += plusNum[i];
        }
        return plus = total + myAge;
    }
    list += "<table>"
    //이름
    list += `<th> ${title[0]} </th>`;
    for(let i=0; i<name.length; i++){
        list += "<tr>" + `<td> ${name[i]} </td>` + "</tr>"
    }
    //나이
    list += `<th> ${title[1]} </th>`;
    for(let i=0; i<age.length; i++){
        list += "<tr>" + `<td> ${age[i]} </td>` + "</tr>"
    }
    //키
    list += `<th> ${title[2]} </th>`;
    list += `<tr><td>${height[0]}</td></tr>`
    list += `<tr><td>${height[1]}</td></tr>`
    list += `<tr><td>${height[2]}</td></tr>`
    list += `<tr><td>${height[3]}</td></tr>`
    list += `<tr><td>${height[4]}</td></tr>`
    list += `</tr>`

    //점수
    list += `<th> ${title[3]} </th>`;
    list += `<tr>`
    list += `<tr><td>${point[0]}</td></tr>`
    list += `<tr><td>${point[1]}</td></tr>`
    list += `<tr><td>${point[2]}</td></tr>`
    list += `<tr><td>${point[3]}</td></tr>`
    list += `<tr><td>${point[4]}</td></tr>`
    list += `</tr>`

    //합계
    list += `<th> ${title[4]} </th>`;
    for(let i=0; i<1; i++){
        list += `<tr><td> ${total1(age)}</td></tr>`
        list += `<tr><td> ${total1(height)} </td></tr>`
        list += `<tr><td> ${total1(point)} </td></tr>`
    };
    //평균
    list += `<th> ${title[5]} </th>`;
    for(let i=0; i<1; i++){
        list += `<tr><td> ${total2(age)} </td></tr>`
        list += `<tr><td> ${total2(height)} </td></tr>`
        list += `<tr><td> ${total2(point)} </td></tr>`
    };
    list += "</table>"

    document.body.innerHTML = list;
};