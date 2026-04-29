// 기본자료형 타입

//숫자
let num: number = 10;
// num = "Hello"; //숫자 타입에 텍스트 입력 = 에러 발생

// 문자
let str: string = "Hello";

// 논리
let bool: boolean = true;

// Undefined
let und: undefined = undefined;

// Null
let nul: null = null;

// symbol
let sym: symbol = Symbol();

// 참조자료형 타입

// 빈 객체
let obj1: {} = {};

// 객체에 프로퍼티 추가
// 속성이 정의되어 있는 경우 속성의 값이 어떤 자료형의 값인지 중요.
// 문자의 값은 우리가 앞에서 스트링으로 타입을 지정해 준다.
// 값이 객체 값에 따른 타입.
let obj2: { name: string } = { name: "Jack" };

// 객체에 프로퍼티 추가
let obj3: { name: string; age: number } = { name: "Minsu", age: 32 };

//  객체에 논리형 프로퍼티 추가
let obj4: { name: string; age: number; adult: boolean } = {
  name: "Jack",
  age: 32,
  adult: false,
};

// 객체에 undefined 프로퍼티 추가
let obj5: { name: string; age: number; adult: boolean; job: null } = {
  name: "Jack",
  age: 32,
  adult: false,
  job: null,
};

// 객체에 프로퍼티 추가
let obj6: { name: string; age: number; adult: boolean; job: { title: string; view: number } } = {
  name: "Jack",
  age: 32,
  adult: false,
  job: { title: "programmer", view: 1000 },
};

// 객체 date 프로퍼티 추가
let obj7: { name: string; age: number; adult: boolean; job: { title: string; view: number }; today: Date } = {
  name: "Jack",
  age: 32,
  adult: false,
  job: { title: "programmer", view: 1000 },
  today: new Date(),
};
