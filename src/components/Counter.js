import { useEffect, useState } from "react";

import "./Counter.css";

const counterStyle = {
  border: "1px solid #ccc",
  borderRadius: "1rem",
  padding: "1rem",
  margin: "1rem",
  display: "inline-block",
  minWidth: 300,
  maxWidth: 600,
};

/*
sayac = {
  sayac1: "12",
  sayac2: 5,
  sayac3: 8
}

*/

const Counter = ({ id }) => {
  const [sayac, setSayac] = useState(() => {
    const sayacLocal = localStorage.getItem("sayac");
    if (sayacLocal) {
      const sayacData = JSON.parse(sayacLocal);

      return Number(sayacData["sayac" + id]) || 0;
    } else {
      return 0;
    }
  });
  const [show, setShow] = useState(true);

  const sayacArttir = () => {
    setSayac(sayac + 1);
    // sayac++;
    console.log("sayaç: ", sayac);
  };

  const sayacAzalt = () => {
    if (sayac > 0) {
      setSayac(sayac - 1);
    }
  };

  const reset = () => setSayac(0);

  console.log("Sayaç değeri: ", sayac);

  useEffect(() => {
    // component did update
    console.log("COUNTER DID UPDATE!!!");
  });

  useEffect(() => {
    const sayacLocal = localStorage.getItem("sayac");
    if (sayacLocal) {
      const sayacData = JSON.parse(sayacLocal);

      sayacData["sayac" + id] = sayac;
      localStorage.setItem("sayac", JSON.stringify(sayacData));
    } else {
      localStorage.setItem("sayac", JSON.stringify({ ["sayac" + id]: sayac }));
    }
  }, [sayac]);

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
        <button data-testid="reset-btn" onClick={() => setSayac(0)}>
          0 RESET
        </button>
        <button data-testid="azalt-btn" onClick={sayacAzalt}>
          - Azalt
        </button>
      </div>
    </>
  );
};

export default Counter;
