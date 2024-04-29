import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const [sayac, ekle, cikar] = useCounter(0, "sifir");
  const [sayac1, ekle1, cikar1] = useCounter(100, "yuz");

  return (
    <div>
      <div>
        Sayaç 1: {sayac}
        <button className="my-btn" onClick={ekle}>
          Arttır
        </button>
        <button className="my-btn" onClick={cikar}>
          Azalt
        </button>
      </div>
      <div>
        Sayaç 2: {sayac1}
        <button className="my-btn" onClick={ekle1}>
          Arttır
        </button>
        <button className="my-btn" onClick={cikar1}>
          Azalt
        </button>
      </div>
    </div>
  );
};

//  React Componenti çalıştırdı ekrana ekledi : Render
