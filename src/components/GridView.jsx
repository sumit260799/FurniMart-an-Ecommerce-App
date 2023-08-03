import React from "react";
import Product from "./Product";
import styled from "styled-components";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }
    @media screen and (max-width: 390px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 0.2rem;
    }
  }

  img {
    height: 155px;
  }
`;

export default GridView;
