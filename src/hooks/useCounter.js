import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useCounter = (
  sayacBaslangicDegeri = 0,
  id = Math.round(Math.random() * 99999999999)
) => {
  const [counter, setCounter] = useLocalStorage(
    `sayac-${id}`,
    sayacBaslangicDegeri
  );

  const arttir = () => setCounter(counter + 1);
  const azalt = () => setCounter(counter - 1);

  return [counter, arttir, azalt];
};
