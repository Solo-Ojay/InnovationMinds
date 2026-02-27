import heroImage from "../assets/homeScreen/images/homeScreenBackground.png";
import searchIcon from "../assets/homeScreen/icons/homeScreenSearchIcon.png";
import newMenuImage from "../assets/homeScreen/images/newMenuAdditions.png";
import jollofDelights from "../assets/homeScreen/images/jollofDelights.png";
import swallowSoups from "../assets/homeScreen/images/swallow&Soups.png";
import grillsBBQ from "../assets/homeScreen/images/grills&BBQ.png";
import sweetTreats from "../assets/homeScreen/images/sweetTreats.png";
import egusiPoundo from "../assets/homeScreen/images/egusiSoup&PoundedYam.png";
import jollofChicken from "../assets/homeScreen/images/jollofRice&FriedChicken.png";
import spicyTilapia from "../assets/homeScreen/images/spicyTilapiaPepperSoup.png";
import "./HomeScreen.css";

function HomeScreen({ onDiscoverNew, onStartOrder }) {
  return (
    <div className="ck-home">
      <section className="full-width-hero">
        <img src={heroImage} alt="Selection of Nigerian meals" />
        <div className="hero-overlay-content">
          <h1>The Heart of Nigerian Home Cooking</h1>
          <p>Handcrafted with passion, delivered with care.</p>
          <button
            type="button"
            className="btn-primary"
            onClick={onDiscoverNew}
          >
            Discover what&apos;s new
          </button>
        </div>
        <div className="floating-search-bar">
          <img src={searchIcon} alt="" />
          <input
            type="text"
            placeholder="What are you craving for today?"
            readOnly
          />
        </div>
      </section>

      <section className="ck-section popular-categories-section">
        <h2 className="section-title text-center">Popular Categories</h2>
        <div className="grid grid-3 ck-category-grid">
          <CategoryCard title="Jollof Delights" image={jollofDelights} />
          <CategoryCard title="Swallow & Soups" image={swallowSoups} />
          <CategoryCard title="Grills & BBQ" image={grillsBBQ} />
          <CategoryCard title="Sweet Treats" image={sweetTreats} />
          <CategoryCard title="Jollof Delights" image={swallowSoups} />
          <CategoryCard title="Jollof Delights" image={grillsBBQ} />
        </div>
      </section>

      <section className="ck-section">
        <h2 className="section-title text-center">Chef's Specials</h2>
        <div className="grid grid-3 ck-meal-grid">
          <MealCard
            title="Spicy Tilapia Pepper Soup"
            description="A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy."
            price="₦3,500"
            image={spicyTilapia}
          />
          <MealCard
            title="Jollof Rice & Fried Chicken"
            description="Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
            price="₦3,500"
            image={jollofDelights}
          />
          <MealCard
            title="Jollof Rice & Fried Chicken"
            description="Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
            price="₦3,500"
            image={jollofDelights}
          />
          <MealCard
            title="Jollof Rice & Smoked Chicken"
            description="Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken."
            price="₦3,500"
            image={jollofDelights}
          />
          <MealCard
            title="Jollof Rice & Fried Chicken"
            description="Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
            price="₦3,500"
            image={jollofChicken}
          />
          <MealCard
            title="Egusi Soup & Pounded Yam"
            description="Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam."
            price="₦3,500"
            image={egusiPoundo}
          />
        </div>
      </section>

      <section className="full-width-promo">
        <img src={newMenuImage} alt="New menu additions" />
        <div className="promo-overlay-content">
          <h2>Introducing Our New Menu Additions!</h2>
          <p>
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={onDiscoverNew}
          >
            Discover what&apos;s new
          </button>
        </div>
      </section>

    </div>
  );
}

function CategoryCard({ title, image }) {
  return (
    <article className="ck-category-card card-surface">
      <img src={image} alt={title} className="ck-card-image" />
      <h3 className="ck-card-title">{title}</h3>
    </article>
  );
}

function MealCard({ title, description, price, image }) {
  return (
    <article className="ck-meal-card card-surface">
      <img src={image} alt={title} className="ck-card-image" />
      <div className="ck-meal-body">
        <h3 className="ck-card-title">{title}</h3>
        <p className="ck-card-text">{description}</p>
        <div className="ck-meal-footer">
          <span className="ck-price">{price}</span>
          <button type="button" className="add-to-cart-btn">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default HomeScreen;


