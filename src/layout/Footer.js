import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { Title } from "../components/Title";

const Footer = () => {
  const { title, description } = useSelector((store) => store.global);

  return (
    <footer className="flex justify-between">
      <div>
        <Title>{title}</Title>
        <p>{description}</p>
        <h2>Web Yazılım öğrenmek çok kolay!</h2>
      </div>
      <Nav />
    </footer>
  );
};

export default Footer;
