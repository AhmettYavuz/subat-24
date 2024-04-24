import { useEffect } from "react";
import Counter from "../components/Counter";
import { CounterWithHook } from "../components/CounterWithHook";

export const CounterPage = () => {
  useEffect(() => {
    // component did mount!

    return () => {
      // component will unmount
      // localStorage.setItem("sayac", 0);
    };
  }, []);

  return (
    <div className="bg-kitten bg-contain bg-no-repeat bg-right">
      <h1>Counter Page</h1>
      <hr />
      {/* <Counter id="1" />
      <Counter id="2" />
      <Counter id="3" /> */}
      <CounterWithHook />
    </div>
  );
};
