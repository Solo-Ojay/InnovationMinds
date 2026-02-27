import { useState } from "react";
import closeIcon from "../assets/cartScreen/icons/closeIcon.png";
import jollofPlantain from "../assets/cartScreen/images/jollofRice&FriedChickenWithPlantain.png";
import jollofEgusi from "../assets/cartScreen/images/jollofRice&FriedChickenEgusi.png";
import jollofFruits from "../assets/cartScreen/images/jollofRice&FriedChickenFruits.png";

function CartScreen({ onCheckout }) {
  return (
    <div className="ck-cart">
      <h1 className="section-title">Your Cart</h1>

      <div className="ck-cart-items">
        <CartItem
          image={jollofPlantain}
          title="Jollof Rice & Fried Chicken"
          description="With plantain, extra pepper sauce"
          price="N3,200"
        />
        <CartItem
          image={jollofEgusi}
          title="Jollof Rice & Fried Chicken"
          description="With plantain, extra pepper sauce"
          price="N3,200"
        />
        <CartItem
          image={jollofFruits}
          title="Jollof Rice & Fried Chicken"
          description="With plantain, extra pepper sauce"
          price="N3,200"
        />
        <CartItem
          image={jollofPlantain}
          title="Jollof Rice & Fried Chicken"
          description="With plantain, extra pepper sauce"
          price="N3,200"
        />
      </div>

      <a href="#add-more" className="ck-link">
        + Add more items from Chuks Kitchen
      </a>

      <div className="ck-cart-actions">
        <button type="button" className="btn-primary" onClick={onCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

function CartItem({ image, title, description, price }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <article className="ck-cart-item card-surface">
      <img src={image} alt={title} className="ck-cart-item-image" />
      <div className="ck-cart-item-content">
        <h3 className="ck-card-title">{title}</h3>
        <p className="ck-card-text">{description}</p>
        <div className="ck-cart-item-footer">
          <div className="ck-quantity-controls">
            <button
              type="button"
              className="ck-quantity-btn"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="ck-quantity-value">{quantity}</span>
            <button
              type="button"
              className="ck-quantity-btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <span className="ck-price">{price}</span>
          <button type="button" className="ck-remove-btn" aria-label="Remove">
            <img src={closeIcon} alt="" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartScreen;

