import furniture1 from "../assets/furniture1.png";
import furniture2 from "../assets/furniture2.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to="">
          <Button variant="contained"> shop now</Button>
        </Link>
      </article>
      <article className="img-container">
        <img src={furniture1} alt="furniture1" className="main-img" />
        <img src={furniture2} alt="furniture2" className="accent-img" />
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  h1 {
    margin-bottom: 1rem;
    color: #1976d2;
    font-weight: 500;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      color: #1976d2;
      font-weight: 700;
    }
    p {
      font-size: 1.25rem;
    }

    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 590px;
      position: relative;
      border-radius: 15px;
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: 10px;
    }
  }
  @media screen and (max-width: 700px) {
  }
`;
export default Hero;
