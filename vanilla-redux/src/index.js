import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//state를 변화시켜주는 건 reducer 뿐!
const countModifier = (count = 0, action) => {
  /*
  count를 변화시키는 방법은 여러개 (ex) 증가하거나 감소 등)
  하나의 리듀서에 action 여러 개를 나눠 state를 변화시켜주자!
  */
  //변화시켜준 후 return

  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

//store 생성: state를 저장하는 곳!
const countStore = createStore(countModifier);

//state가 변화할 때마다 무엇을 할지 (function) subscribe해줘야 함

//store에는 counterModifier라는 리듀서를 가지고 있으며 dispatch함수를 사용해 action을 넘겨 state를 변화시켜보자
//액션은 type를 꼭 명시에 해줘야해 어떤 액션인지 알 수 있게, 다른 데이터(payload) 등도 포함될 수 있으므로 object 형태로 보내줌
//countStore.dispatch({ type: "ADD" });

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener("click", () => {
  countStore.dispatch({ type: "ADD" });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});
