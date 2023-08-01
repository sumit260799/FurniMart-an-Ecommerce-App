import { ExpFurnitures } from "../utils/constants";
import styled from "styled-components";

const ExploreFurnitures = () => {
  return (
    <Wrapper>
      <div className="title text-center mx-auto">
        <h2 className="text-slate-700 text-center mx-auto mt-2 sm:mt-3 font-medium sm:font-semibold ">
          Explore Our Furniture Range
        </h2>
        <div className="underline"></div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 my-16 w-[80%] md:w-[70%] mx-auto ">
        {ExpFurnitures.map((exp) => {
          const { id, logo, name } = exp;
          return (
            <div
              key={id}
              className=" overflow-hidden object-cover my-5 mx-auto flex flex-col items-center cursor-pointer "
            >
              <img src={logo} alt={name} className="w-[90px] h-[60px] " />
              <p className="capitalize text-[1rem] p-1 text-zinc-600 font-semibold ">
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 3.5rem 0rem;
  margin-top: 8.5rem;

  @media screen and (max-width: 900px) {
    margin-top: 3.5rem;
  }
`;

export default ExploreFurnitures;
