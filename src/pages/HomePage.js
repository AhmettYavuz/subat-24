import { format } from "date-fns";
import { tr } from "date-fns/locale";

export const HomePage = () => {
  const formattedDate = format(new Date(), "yyyy MMMM d EEEE BBBB", {
    locale: tr,
  });

  return (
    <div>
      <h1>Ana Sayfa</h1>
      <hr />
      <p>Sayfama hoşgeldiniz...</p>
      <h2>Özel Tarihler</h2>
      <hr />
      <p>Şu an {new Date().toLocaleString("TR-tr")}</p>
      <p>Şu an {new Date().toLocaleDateString("TR-tr")}</p>
      <p>Şu an {new Date().toISOString()}</p>
      <p>Şu an {new Date().getFullYear()}</p>
      <p>Şu an {new Date().getTime()}</p>
      <p>Şu an {formattedDate}</p>
    </div>
  );
};
