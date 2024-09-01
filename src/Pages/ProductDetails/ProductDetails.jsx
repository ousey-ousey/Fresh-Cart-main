import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingStars from "../../Components/RatingStars";
import LoadingScreen from "../../Components/LoadingScreen";
import ProductImageSlider from "../../Components/ProductImageSlider";
import RelatedProducts from "../../Components/RelatedProducts";

import { AuthContext } from "../../Contexts/AuthContext";
import addProductToCart from "../../cartService";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();
  const { userToken } = useContext(AuthContext);

  async function getProducts() {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products/" + id
      );
      setIsLoding(false);
      setProduct(data.data);
      getRelatedProducts(data.data?.category._id);
    } catch {
      setIsLoding(false);
    }
  }

  async function getRelatedProducts(categoryId) {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products/",
        {
          params: {
            category: categoryId,
          },
        }
      );
      setRelatedProducts(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <>
      {isLoding ? (
        <LoadingScreen />
      ) : (
        <div x-data="{ cartOpen: false , isOpen: false }" className="bg-white">
          <main className="my-8">
            <div className="container mx-auto px-6">
              <div className="md:flex md:items-center">
                <div className="w-full md:w-3/12 lg:h-96">
                  {/* <img
                    className="h-full mx-auto rounded-md object-contain"
                    src={product?.imageCover}
                    alt="..."
                  /> */}
                  <ProductImageSlider images={product?.images} />
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                  <h3 className="text-gray-700 uppercase text-lg">
                    {product?.title}
                  </h3>
                  <span className="text-gray-500 mt-3">{product?.price}$ </span>
                  <hr className="my-3" />
                  <div className="mt-3">
                    <h3 className="text-gray-700 text-sm">Rating</h3>
                    <div className="flex">
                      <RatingStars rate={product?.ratingsAverage ?? 0} />
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        {product?.ratingsAverage}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-gray-700 text-sm">Category</h3>
                    <p>{product?.category.name}</p>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-gray-700 text-sm">Sub Category</h3>
                    <p>{product?.subcategory[0].name}</p>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-gray-700 text-sm">Brand</h3>
                    <p>{product?.brand.name}</p>
                  </div>
                  <div className="flex items-center mt-6">
                    <button
                      onClick={() => {
                        addProductToCart(product.id, userToken);
                      }}
                      className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                    >
                      Order Now
                    </button>
                    <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <RelatedProducts relatedProducts={relatedProducts} />
            </div>
          </main>
        </div>
      )}
    </>
  );
}
