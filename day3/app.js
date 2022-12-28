// var age = 17;
// 오래된 문법

// let cat_age = 2;
// car_age = 3;
// const cot_name = "minsu";
// 최근 문법

// var name = "yeji";
// var name = "yeji2";

// console.log(name); / console.log = 자바에서 print처럼 출력하는 것
// var = 쓰레기 실무에서 쓰면 불려감 진짜 왼만하면 사용X


// let global = "전역";
// if (global === "전역"){
//   let global = "지역";
//   console.log(global); // 지역
// }
// console.log(global);
// 간단한 전역, 지역 구분 소스


// 기본 자료형(원시 자료형)
// const number = 20;
// const name = `ytji's age is ${number}`;

// console.log(name);

// null? = 값이 없다.
// nudefined = 값 넣으려고 자리 만들고 넣지 못한 상태.
// NaN = 숫자가 아님.

// 참조 데이터 타입(주소지를 저장하는 데이터 타입)
// const num1 = 1;
// const num1 = 2;
// const num1 = 3;

// const arr = [1,2,3];
// arr[0] = 10;
// console.log(arr[0]);

// const student = {
//     name: "minsu",
//     age: 17
// };

// console.log(student);

// 객체
// 1. 키값으로 문자, Symbol이라는 일부 자료형만 허용
// 2. 정렬과 관여X
// 3. 안의 데이터를 살펴보려면, 키값을 통해 배열을 얻어서 배열을 순회
// 4. 키 값 사용 등 직접 사이즈를 판별

// const studentMap = new Map();
// studentMap.set("name", "minsu");

// 맵
// 1. 기값으로 모든~! 데이터 타입을 허용
// 2. 삽입된 순서대로 정렬
// 3. map.size로 크기를 바로 알 수 있음!
// 4. map 자체로 순회할 수 있음

// console.log(student["name"]);
// console.log(student.name); => 객체를 불러오는 방법 2가지

// console.log(studentMap);

// const setArr = new Set();
// setArr.add(1);
// setArr.add(1);
// setArr.add(1);
// setArr.add(1);
// setArr.add(1);
// setArr.add(1);
// setArr.add(1);

// console.log(setArr);


// 연산자
// 산술, 증감, 대입, 비교, 논리 (비트, Nullish)

// 산술 (+, -, *, /, %, **)
// a/b -> 몫
// a%b -> 나머지

// 증감 (++, --)
// let age = 10;

// age += 1;
// age++;

// 비교 연산자
// < > <= >=

// == (단순 값 비교) VS === (자료형까지 비교)
// !==

// 논리 연산자
// AND -> &&, OR -> ||, NOT -> !

// 삼항
// 조건 ? 참일때 실행결과 : 거짓일때 실행결과
// const result = 2 < 3 ? '참!' : "거짓";

// 대입 연산자
// &&=
// ||=

// const nums = [10, 20];
// function sum(a,b) {
//     return a+b;
// }

// console.log(sum(nums[0], nums[1]));
// console.log(sum(...num));

// console.log(...arr);

// <조건문>
// if(arr === arr) {
//     // 참일 때 실행
// }else if(arr[0] === 1) {
//     // 두번째 ㅗ건이 참일때 실행
// }else{
//     // 거짓일 때 실랭
// }

// console.log(arr[0]);
// switch(arr[0]) {
//     case 1:
//         console.log("10이 맞습니다")
//         break;
//         //
//     case 10:
//         console.log("1이 맞습니다")
//         break;
//         //
//     default:
//         console.log("아무것도 아닙니다")
//         break;
//         //
// }

// let i = 0;
// for (; i < 10; i++) {
//     console.log(i);
// }

// let j = 0;
// for (; j < 10; j++) {
//     console.log(j);
// }


