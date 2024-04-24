import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const [sayac, ekle, cikar] = useCounter(0, "sifir");
  const [sayac1, ekle1, cikar1] = useCounter(100, "yuz");

  return (
    <div>
      <div>
        Sayaç: {sayac}
        <button className="my-btn" onClick={ekle}>
          Arttıs
        </button>
        <button className="my-btn" onClick={cikar}>
          Azalt
        </button>
      </div>
      <div>
        Sayaç: {sayac1}
        <button className="my-btn" onClick={ekle1}>
          Arttıs
        </button>
        <button className="my-btn" onClick={cikar1}>
          Azalt
        </button>
      </div>
    </div>
  );
};
