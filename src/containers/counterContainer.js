import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Counter from "../components/counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  //useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
  //store의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일하다.
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    [shallowEqual]
  );

  //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook이다.
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    //상태와 액션을 디스패치하는 함수들을 props로 넣어준다.
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;