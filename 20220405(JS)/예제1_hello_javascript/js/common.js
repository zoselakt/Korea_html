var _sum_1, _sum_2, _sum_3, _total;

_sum_1 = 1000;
_sum_2 = 2000;
_sum_3 = 3000;

_total = _sum_1 + _sum_2 + _sum_3;
console.log("_sum_1 + _sum_2 + _sum_3 의 합은 : " + _total);
console.log(`합계는 ${_total} 원 입니다.`);
console.log("합계는 " + _total + "원 입니다.");

var PI = 3.14159265;
var radius = 10;
var result;

result = 2 * PI * radius;
console.log("원의 둘레는 " + result + "입니다.");

var result1 = PI * radius * radius;
console.log(`원의 넓이는 ${result1} 입니다.`);

/*=====================================================================*/
// 최우선연산자 :(), [], . (점)
// 단항연산자: +, -, ~, !, (), ++, --
// 산술연산자: +, -, %, *, /
// 쉬프트연산자: <<, >>, >>>
// 관계연산자: >, <, >=, <=, ==, !=
// 논리연산자: &, ^, |, &&, ||
// 삼항연산자: ?:
// 대입연산자: =, +=, /=, &=, *=, -=, <<=, >>=, >>>= ^=, !=, %=

var _score1, _score2, _score3, _score4, _score5, leng, total, avg;
_score1 = 85;
_score2 = 90;
_score3 = 95;
_score4 = 100;
_score5 = 75;
leng = 5;
total = _score1 + _score2 + _score3 + _score4 + _score5;
avg = total / leng ;

console.log(avg);

// 나이키
var heightTotal, ageTotal, heightAvg, ageAvg;
var countLeng = 10;

// 키변수
var key1 = 175, key2 = 180, key3 = 182, key4= 190, key5 = 185, 
key6 = 179, key7 = 182, key8=183, key9= 192, key10=187;
// 나이변수
var age1=32, age2=44, age3=21, age4=18, age5=52, 
age6=22, age7=45, age8=25, age9=38, age10=28;
// 키 합산
heightTotal = key1 + key2 + key3 + key4 + key5 + 
key6 + key7 + key8 + key9 + key10;
// 나이합산
ageTotal = age1 + age2 + age3 + age4 + age5 + 
age6 + age7 + age8 + age9 + age10;
// 키 평균
heightAvg = heightTotal / countLeng;
// 나이평균 
ageAvg = ageTotal / countLeng;
// alert
console.log("평균 키는 "+ heightAvg +" 입니다");
console.log(`평균 나이는 ${ageAvg} 입니다.`);

//========================================================================

//document에 출력
var list = '';
// 데이터합치기
list += '<ul>';
list += '<li>우리반 학생의 평균 나이는 ' + ageAvg + '살 입니다.</li>';
list += '<li>우리반 학생의 평균 키는 ' + heightAvg + 'cm 입니다.</li>';
list += '</ul>';
console.log(list);
document.body.innerHTML = list;