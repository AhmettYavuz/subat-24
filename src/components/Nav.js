import { Link, NavLink } from "react-router-dom";

const Nav = ({ productsCount }) => {
  return (
    <nav>
      {/* Semantic HTML > nav */}
      <NavLink to="/" exact={true}>
        Home
      </NavLink>
      <NavLink to="/products" data-cy="product-link">
        Products [{productsCount}]
      </NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Nav;
