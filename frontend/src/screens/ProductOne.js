import styles from "../styles/ProductOne.css";

function ProductOne() {
  return (
    <div class="flex-container">
      <br />
      <div class="flex-child magenta">
        <img src="/images/dark-roast-cinamon-jinger.png" alt="banner" />
      </div>
      <div class="flex-child green">
        <div className="ProductOne-info">
          <h2>Campfire MochaCampfire MochaCampfire Mocha</h2>
          <p>Jinger CinamonJinger CinamonJinger Cinamon</p>
        </div>
      </div>
    </div>
  );
}
export default ProductOne;