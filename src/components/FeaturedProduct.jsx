import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";

import { useProductsContext } from "../context/products_context";
import Product from "./Product";
import Loading from "./Loading";
import Error from "./Error";
const FeaturedProduct = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: products,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <div className="title">
        <h2 className="text-slate-700 font-bold ">Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {products.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        <Button variant="contained"> all products</Button>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 2rem 0;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
export default FeaturedProduct;
