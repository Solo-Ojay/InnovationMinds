import foodImage from "../assets/foodDetailsScreen/images/foodDetailsBackground.png";
import closeIcon from "../assets/foodDetailsScreen/icons/closeIcon.png";
import mildlySpicyIcon from "../assets/foodDetailsScreen/icons/mildlySpicyIcon.png";
import vegetarianIcon from "../assets/foodDetailsScreen/icons/vegetarianOptionAvailableIcon.png";
import viewAllergiesIcon from "../assets/foodDetailsScreen/icons/viewAllergiesIcon.png";
import chooseProteinIcon from "../assets/foodDetailsScreen/icons/chooseProteinIcon.png";

function FoodDetailsScreen({ onAddToCart, onClose }) {
  return (
    <div className="ck-food-details">
      <div className="ck-food-details-layout">
        <div className="ck-food-details-image">
          <img src={foodImage} alt="Jollof Rice with Fried Chicken" />
        </div>

        <div className="ck-food-details-content card-surface">
          <button
            type="button"
            className="ck-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <img src={closeIcon} alt="" />
          </button>

          <h1>Jollof Rice with Fried Chicken</h1>
          <p className="ck-price-large">N2,800</p>

          <p className="ck-food-description">
            Our signature Jollof rice, cooked to perfection with aromatic spices,
            served with juicy, golden-fried chicken. A classic Nigerian comfort food,
            rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.
          </p>

          <div className="ck-dietary-info">
            <div className="ck-dietary-item">
              <img src={mildlySpicyIcon} alt="" />
              <span>Mildly spicy</span>
            </div>
            <div className="ck-dietary-item">
              <img src={vegetarianIcon} alt="" />
              <span>Vegetarian option available</span>
            </div>
            <a href="#allergies" className="ck-link">
              <img src={viewAllergiesIcon} alt="" />
              View Allergies
            </a>
          </div>

          <div className="ck-option-section">
            <h3>
              <img src={chooseProteinIcon} alt="" />
              Choose Your Protein
            </h3>
            <div className="ck-radio-group">
              <label className="ck-radio-option">
                <input type="radio" name="protein" value="fried-chicken" defaultChecked />
                <span>Fried Chicken (Default)</span>
              </label>
              <label className="ck-radio-option">
                <input type="radio" name="protein" value="grilled-fish" />
                <span>Grilled Fish +N500</span>
              </label>
              <label className="ck-radio-option">
                <input type="radio" name="protein" value="beef" />
                <span>Beef +N700</span>
              </label>
            </div>
          </div>

          <div className="ck-option-section">
            <h3>Extra Sides (Optional)</h3>
            <div className="ck-checkbox-group">
              <label className="ck-checkbox-option">
                <input type="checkbox" name="sides" value="plantain" />
                <span>Fried Plantain +N700</span>
              </label>
              <label className="ck-checkbox-option">
                <input type="checkbox" name="sides" value="coleslaw" />
                <span>Coleslaw +N500</span>
              </label>
              <label className="ck-checkbox-option">
                <input type="checkbox" name="sides" value="pepper-sauce" />
                <span>Extra Pepper Sauce +N300</span>
              </label>
            </div>
          </div>

          <div className="ck-option-section">
            <h3>Special Instructions</h3>
            <textarea
              className="ck-textarea"
              placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
              rows="3"
            />
          </div>

          <button type="button" className="btn-primary" onClick={onAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetailsScreen;

