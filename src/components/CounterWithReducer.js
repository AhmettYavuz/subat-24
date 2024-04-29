import { useEffect, useReducer, useState } from "react";

import "./Counter.css";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "arttır":
      return state + 1;
      break;

    case "azalt":
      return state - 1;
      break;

    case "reset":
      return 0;
      break;

    default:
      break;
  }
};

const CounterWithReducer = ({ id }) => {
  const [sayac, dispatchSayac] = useReducer(counterReducer, 0);
  const [show, setShow] = useState(true);

  const sayacArttir = () => {
    dispatchSayac({
      type: "arttır",
    });
  };

  const sayacAzalt = () => {
    dispatchSayac({
      type: "azalt",
    });
  };

  const reset = () =>
    dispatchSayac({
      type: "reset",
    });

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Sakla" : "Göster"}
      </button>
      <div className={`counter ${show ? "show" : "hide"}`}>
        <p>
          SAYAÇ:
          <span data-testid="sayac-deger">{sayac}</span>
        </p>
        <button data-testid="arttir-btn" onClick={sayacArttir}>
          + Arttır
        </button>
        <button data-testid="reset-btn" onClick={reset}>
          0 RESET
        </button>
        <button data-testid="azalt-btn" onClick={sayacAzalt}>
          - Azalt
        </button>
      </div>
    </>
  );
};

export default CounterWithReducer;
