import styles from "../styles/Banner.css";

function BannerScreen() {
  return (
    <div className="banner">
      <img src="/images/bannerNew.png" alt="banner" />
      {/* <div class="bottom-left">Bottom Left</div> */}
      <div class="text-block">
        <h4>Quality Coffee <br/> delivered to your Door</h4>
        <p>
          Everything we do is a matter of heart, <br /> body and soul. <br />{" "}
          Our mission is to provide sustainably sourced, <br /> hand-picked,
          quality coffee.
        </p>
      </div>
    </div>
  );
}

export default BannerScreen;
