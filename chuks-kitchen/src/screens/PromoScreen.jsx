import promoImage from "../assets/homeScreen/images/newMenuAdditions.png";

function PromoScreen({ onDiscover }) {
  return (
    <section className="ck-section card-surface ck-section-promo-full">
      <div className="ck-promo-full-image">
        <img src={promoImage} alt="New menu additions" />
      </div>
      <div className="ck-promo-full-overlay">
        <div className="ck-promo-full-content container">
          <h1>Introducing Our New Menu Additions!</h1>
          <p>
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>
          <button type="button" className="btn-primary" onClick={onDiscover}>
            Discover what&apos;s new
          </button>
        </div>
      </div>
    </section>
  );
}

export default PromoScreen;


