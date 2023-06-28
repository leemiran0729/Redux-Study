import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//state를 변화시켜주는 건 reducer 뿐!
const countModifier = (count = 0) => {
  /*
  count를 변화시키는 방법은 여러개 (ex) 증가하거나 감소 등)
  하나의 리듀서에 action 여러 개를 나눠 state를 변화시켜주자!
  */
  //변화시켜준 후 return
  return count;
};

//store 생성: state를 저장하는 곳!
const countStore = createStore;
