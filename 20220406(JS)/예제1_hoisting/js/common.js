/* 엄격모드를 지원하지 않는 브라우저에서는 엄격 모드의 코드가 다른 방식으로 동작할 것입니다, 
그 때문에 엄격 모드가 적절하게 적용된 피쳐 테스트 없이 엄격 모드에 의존하면 안됩니다.
1. 기존에는 조용히 무시되던 에러들을 throwing합니다.
2. JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. 
    가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
3. 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.*/
'use strict' //엄격모드

/* 호이스팅(Hoisting)이란, var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다. 
   자바스크립트는 ES6에서 도입된 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅한다.
   하지만, var 로 선언된 변수와는 달리 let 로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다. */

console.log(foo); // undefined / 첫줄이라도 밑에 선언이되어있으면 출력은 가능

var foo;
console.log(foo); // undefined / var foo의 값이 정의되지 않음

foo = 1;
console.log(foo); // 1 / 값이 정의됨

// hoisting 예제2
foo1 = 1;
console.log(foo1);
var foo1;
// 예제3 / 에러출력
foo2 = 1;
console.log(foo2);
let foo2;

/*변수 선언에는 기본적으로 const를 사용하고, 재할당이 필요한 경우에 한정해 let 을 사용하는 것이 좋다.
그리고 객체를 재할당하는 경우는 생각보다 흔하지 않다. const 를 사용하면 의도치 않은 재할당을 방지해 주기 때문에 보다 안전하다.
1. 재할당이 필요한 경우에 한정해 let 을 사용한다. 이때, 변수의 스코프는 최대한 좁게 만든다.
2. 재할당이필요없는상수와객체에는const를사용한다.*/