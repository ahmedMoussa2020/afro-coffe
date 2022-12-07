import { Link } from "react-router-dom";
import data from "../data";
import styles from "../styles/ProductView.css";

function ProductView() {
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
        {data.products.map((product) => (
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
        ))}
      </div>
    </div>
  );
}
export default ProductView;
