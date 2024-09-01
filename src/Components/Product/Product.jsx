import { Link } from "react-router-dom";
import { useContext } from "react";
import RatingStars from "../RatingStars";
import { AuthContext } from "../../Contexts/AuthContext";
import addProductToCart from "../../cartService";


export default function Product({ product }) {
  const {userToken} = useContext(AuthContext);

 


  return (
    <>
      <div className="max-w-2xl mx-auto gap">
        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/productdetails/${product.id}`}>
            <img
              className="rounded-t-lg p-8"
              src={product.imageCover}
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <Link to={`/productdetails/${product.id}`}>
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white line-clamp-1">
                {product.title}
              </h3>
              <p className="line-clamp-3">{product.description}</p>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
              <RatingStars rate={product.ratingsAverage}></RatingStars>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {product.ratingsAverage}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {product.price}
              </span>
              <button
                onClick={() => {
                  addProductToCart(product.id, userToken);
                }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
