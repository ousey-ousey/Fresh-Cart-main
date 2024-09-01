import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../../Components/Product";
import LoadingScreen from "../../Components/LoadingScreen";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  async function getData() {
    try {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );
      setProducts(data.data);
      setIsLoding(false);
    } catch {
      setIsLoding(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoding ? (
        <LoadingScreen />
      ) : (
        <div className="grid grid-cols-4 gap-3">
          {products.map((product, i) => {
            return <Product product={product} key={i} />;
          })}
        </div>
      )}
    </>
  );
}
