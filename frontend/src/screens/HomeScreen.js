import React from "react";
import BannerScreen from "./BannerScreen";
import ProductOne from "./ProductOne";
import ProductView from "./ProductView";
import SpotlightScreen from "./SpotlightScreen";

const HomeScreen = () => {
  return (
    <div>
      <BannerScreen />
      <SpotlightScreen />
      <ProductOne />
      {/* <ProductView /> */}


      {/* <h1>Featured Products</h1>
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
      </div> */}
    </div>
  );
};

export default HomeScreen;
