import { Link } from "react-router-dom";

const Nav = ({ productsCount }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products" data-cy="product-link">Products [{productsCount}]</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
