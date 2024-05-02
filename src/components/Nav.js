import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const productsCount = useSelector((store) => store.products.length);

  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get("https://workintech-fe-ecommerce.onrender.com/products")
        .then((res) => res.data),
  });

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
      <NavLink to="/commerce">Commerce [{data?.total}]</NavLink>
    </nav>
  );
};

export default Nav;
