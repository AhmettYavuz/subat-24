import { useEffect } from "react";
import CounterWithReducer from "../components/CounterWithReducer";

export const CounterPage = () => {
  useEffect(() => {
    // component did mount!

    return () => {
      // component will unmount
      // localStorage.setItem("sayac", 0);
    };
  }, []);

  let userName = "Ali";

  return (
    <div className="bg-kitten bg-contain bg-no-repeat bg-right">
      <h1>Sayaç Sayfası | {userName}</h1>
      <hr />
      {/* <Counter id="1" />
      <Counter id="2" />
      <Counter id="3" /> */}
      <CounterWithReducer />
    </div>
  );
};
