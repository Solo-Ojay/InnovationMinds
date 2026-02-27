import menuImage from "../assets/menuScreen/images/menu&FoodListing.png";
import jollofChicken from "../assets/menuScreen/images/jollofRice&FriedChicken.png";
import jollofSmokedFish from "../assets/menuScreen/images/jollofRice&SmokedFish.png";
import ebaEgusi from "../assets/menuScreen/images/eba&EgusiSoupGoatMeat.png";
import amalaGbegiri from "../assets/menuScreen/images/amalaWithGbegiri&Ewedu.png";
import fufuOkra from "../assets/menuScreen/images/fufu&OkraSoup.png";

function MenuScreen({ onSelectMeal, onGoToCart }) {
  return (
    <div className="ck-menu">
      <section className="ck-hero card-surface">
        <div className="ck-hero-image">
          <img src={menuImage} alt="Menu and food listing" />
        </div>
        <div className="ck-hero-content">
          <h1>Chuks Kitchen</h1>
          <p>Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)</p>
        </div>
      </section>

      <div className="ck-menu-layout">
        <aside className="ck-menu-sidebar">
          <h2>Menu Categories</h2>
          <nav className="ck-menu-nav">
            <button type="button" className="ck-menu-nav-item active">
              Popular
            </button>
            <button type="button" className="ck-menu-nav-item">
              Jollof Rice & Entrees
            </button>
            <button type="button" className="ck-menu-nav-item">
              Swallow & Soups
            </button>
            <button type="button" className="ck-menu-nav-item">
              Grills & sides
            </button>
            <button type="button" className="ck-menu-nav-item">
              Beverages
            </button>
            <button type="button" className="ck-menu-nav-item">
              Desserts
            </button>
          </nav>
        </aside>

        <main className="ck-menu-content">
          <section className="ck-section card-surface">
            <h2 className="section-title">Jollof Rice & Entrees</h2>
            <div className="grid grid-3 ck-meal-grid">
              <MealCard
                title="Jollof Rice & Smoked Fish"
                description="Flavorful jollof rice served with perfectly smoked fish."
                price="₦3,500"
                image={jollofSmokedFish}
                onSelect={onSelectMeal}
              />
              <MealCard
                title="Party Jollof Rice (Veg)"
                description="Vegetarian party jollof, full of rich flavors."
                price="₦2,800"
                image={jollofChicken}
                onSelect={onSelectMeal}
              />
              <MealCard
                title="Party Jollof Rice (Veg)"
                description="Vegetarian party jollof, full of rich flavors."
                price="₦3,500"
                image={jollofChicken}
                onSelect={onSelectMeal}
              />
            </div>
          </section>

          <section className="ck-section card-surface">
            <h2 className="section-title">Swallow & Soups</h2>
            <div className="grid grid-3 ck-meal-grid">
              <MealCard
                title="Amala with Gbegiri & Ewedu"
                description="Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup."
                price="₦3,100"
                image={amalaGbegiri}
                onSelect={onSelectMeal}
              />
              <MealCard
                title="Fufu & Okra Soup (Fish)"
                description="Light Fufu served with fresh okra soup and tilapia fish."
                price="₦3,300"
                image={fufuOkra}
                onSelect={onSelectMeal}
              />
              <MealCard
                title="Fufu & Okra Soup (Fish)"
                description="Light Fufu served with fresh okra soup and tilapia fish."
                price="₦3,500"
                image={fufuOkra}
                onSelect={onSelectMeal}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function MealCard({ title, description, price, image, onSelect }) {
  return (
    <article className="ck-meal-card" onClick={onSelect}>
      <img src={image} alt={title} className="ck-card-image" />
      <div className="ck-meal-body">
        <h3 className="ck-card-title">{title}</h3>
        <p className="ck-card-text">{description}</p>
        <div className="ck-meal-footer">
          <span className="ck-price">{price}</span>
          <button
            type="button"
            className="ck-add-circle"
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.();
            }}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default MenuScreen;

