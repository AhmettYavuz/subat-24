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

const Counter = () => {
  const [sayac, setSayac] = useState(0);
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

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Sakla" : "Göster"}
      </button>
      <div className={`counter ${show ? "show" : "hide"}`}>
        <p>SAYAÇ: {sayac}</p>
        <button onClick={sayacArttir}>+ Arttır</button>
        <button onClick={() => setSayac(0)}>0 RESET</button>
        <button onClick={sayacAzalt}>- Azalt</button>
      </div>
    </>
  );
};

export default Counter;
