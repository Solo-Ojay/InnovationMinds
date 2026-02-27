function OrderSummaryScreen({ onCheckout }) {
  return (
    <div className="ck-order-summary">
      <h1 className="section-title">Order Summary</h1>

      <div className="ck-order-summary-content card-surface">
        <div className="ck-promo-section">
          <label htmlFor="promo-code">Add a Promo Code</label>
          <div className="ck-promo-input-group">
            <input
              type="text"
              id="promo-code"
              className="ck-input"
              placeholder="Enter Code here"
            />
            <button type="button" className="btn-secondary">Apply</button>
          </div>
        </div>

        <div className="ck-cost-breakdown">
          <div className="ck-cost-row">
            <span>Subtotal</span>
            <span>N9,200</span>
          </div>
          <div className="ck-cost-row">
            <span>Delivery Fee</span>
            <span>N500</span>
          </div>
          <div className="ck-cost-row">
            <span>Service Fee</span>
            <span>N200</span>
          </div>
          <div className="ck-cost-row">
            <span>Tax</span>
            <span>N0</span>
          </div>
          <div className="ck-cost-row ck-cost-total">
            <span>Total</span>
            <span>N9,900</span>
          </div>
        </div>

        <div className="ck-delivery-options">
          <label>Delivery Options</label>
          <div className="ck-segmented-control">
            <button type="button" className="ck-segment active">
              Delivery
            </button>
            <button type="button" className="ck-segment">
              Pick up
            </button>
          </div>
        </div>

        <div className="ck-form-group">
          <label htmlFor="special-instructions">
            Special Instructions for Restaurant
          </label>
          <textarea
            id="special-instructions"
            className="ck-textarea"
            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
            rows="4"
          />
        </div>

        <button type="button" className="btn-primary" onClick={onCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default OrderSummaryScreen;

