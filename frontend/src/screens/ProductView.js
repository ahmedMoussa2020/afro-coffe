import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../data";
import styles from "../styles/ProductView.css";
import axios from "axios";
import logger from "use-reducer-logger";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function ProductView() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  // starts here fetching data from backend
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL ", payload: err.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);
  // ends here fetching data from backend

  return (
    <div>
      <div className="top-div"></div>
      <div className="product-title">
        <span>SPOTLIGHT</span>
        <h2>Now Roasting</h2>
        <div className="divide-block"></div>
        <p>Featuring a bright spectrum of flavors and essences</p>
      </div>

      {/* <h1></h1> */}
      <br />
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
            <div className="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>

                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default ProductView;
