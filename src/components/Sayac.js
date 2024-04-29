// JS Fn => HTML (JSX)

import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

export const Sayac = () => {
  const [sayi, setSayi] = useState(0);

  const arttir = () => {
    setSayi(sayi + 1);
  };

  return (
    <div>
      <h2>Sayac Componenti</h2>
      <h2>{sayi}</h2>
      <button onClick={arttir}>+ 1</button>
    </div>
  );
};
