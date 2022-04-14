//window 객체: 자바 스크립트 프로그램의 전역객체
// 브라우저안의 모든요소들이 소속된 객체, 최상위 객체
// window 객체 사용해 동적변수 (= 가변변수 = 유동변수) 생성 가능.
window.onload = function(){

var title1, title2, title3, title4;
var name1, name2, name3, name4, name5, name6;
var age1, age2, age3, age4, age5;
var height1, height2, height3, height4, height5;
var point1, point2, point3, point4, point5;
var avg = 5;

title1 = "이름";
title2 = "나이";
title3 = "키";
title4 = "점수";
name1 = "홍길동";
name2 = "박길동";
name3 = "김길동";
name4 = "이길동" ;
name5 = "최길동";
name6 = "평균";
age1 = 30;
age2 = 18;
age3 = 21;
age4 = 35;
age5 = 38;
height1 = 175;
height2 = 180;
height3 = 190;
height4 = 185;
height5 = 178;
point1 = 85;
point2 = 88;
point3 = 90;
point4 = 95;
point5 = 95;
total1 = age1 + age2 +  age3 + age4 + age5;
total2 = height1 + height2 + height3 + height4 + height5;
total3 = point1 + point2 + point3 + point4 + point5;
aver1 = total1 / avg;
aver2 = total2 / avg;
aver3 = total3 / avg;
var list = '';

list += '<table>';
    list += '<tr>';
        list += '<th>' + title1 + '</th>';
        list += '<th>' + title2 + '</th>';
        list += '<th>' + title3 + '</th>';
        list += '<th>' + title4 + '</th>';
    list += '</tr>';

    list += '<tr>';
        list += '<td>' + name1 + '</td>';
        list += '<td>' + age1 + '</td>';
        list += '<td>' + height1 + '</td>';
        list += '<td>' + point1 + '</td>';
    list += '</tr>';

    list += '<tr>';
        list += '<td>' + name2 + '</td>';
        list += '<td>' + age2 + '</td>';
        list += '<td>' + height2 + '</td>';
        list += '<td>' + point2 + '</td>';
    list += '</tr>';

    list += '<tr>';
        list += '<td>' + name3 + '</td>';
        list += '<td>' + age3 + '</td>';
        list += '<td>' + height3 + '</td>';
        list += '<td>' + point3 + '</td>';
    list += '</tr>';

    list += '<tr>';
        list += '<td>' + name4 + '</td>';
        list += '<td>' + age4 + '</td>';
        list += '<td>' + height4 + '</td>';
        list += '<td>' + point4 + '</td>';
    list += '</tr>';

    list += '<tr>';
        list += '<td>' + name5 + '</td>';
        list += '<td>' + age5 + '</td>';
        list += '<td>' + height5 + '</td>';
        list += '<td>' + point5 + '</td>';
    list += '</tr>';

    list += '<tr>';
        list += '<td>' + name6 + '</td>';
        list += '<td>' + aver1 + '</td>';
        list += '<td>' + aver2 + '</td>';
        list += '<td>' + aver3 + '</td>';
    list += '</tr>';
list += '</table>';

    
document.body.innerHTML = list;
}