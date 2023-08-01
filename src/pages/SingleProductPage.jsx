import { useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";

import { single_product_url as url } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";
import { formatPrice } from "../utils/formatPrice";
import { useNavigate } from "react-router-dom";
const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleProducts,
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProducts(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const { company, images, description, name, price, reviews, stars, stock } =
    product;
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className=" px-0 py-12 mx-auto">
        <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          <ProductImages images={images} />
          <div className=" w-full lg:pl-10  lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {name}
              <span
                className="text-[1rem] title-font text-gray-500 tracking-widest"
                style={{
                  marginBottom: "5px",
                  color: "#3a3a3a",
                  fontSize: "1rem",
                }}
              >
                ({company})
              </span>
            </h1>
            <div className="flex mb-1">
              <span className="flex items-center">
                <Stars stars={stars} reviews={reviews} />
              </span>
            </div>
            <span
              style={{
                marginLeft: "0px",
                color: stock > 0 ? "#27ae60" : "#c0392b",
                fontSize: "1.2rem",
              }}
            >
              {stock > 0 ? "In stock" : "Out of stock"}
            </span>

            <h5 className=" price  title-font font-medium text-2xl ">
              {formatPrice(price)}
            </h5>
            <p className="leading-relaxed">{description}</p>
            <div className="flex mt-2 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>

            {stock > 0 && <AddToCart product={product} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
