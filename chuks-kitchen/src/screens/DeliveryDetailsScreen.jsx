function DeliveryDetailsScreen({ onContinue }) {
  return (
    <div className="ck-delivery-details">
      <h1 className="section-title">Delivery Details</h1>

      <div className="ck-delivery-form card-surface">
        <div className="ck-address-display">
          <div className="ck-address-content">
            <strong>Home:</strong> 123 Main Street, Victoria Island, Lagos Apt 4B,
            Opposite Mega Plaza
          </div>
          <a href="#change" className="ck-link">
            Change Address
          </a>
        </div>

        <div className="ck-form-group">
          <label htmlFor="delivery-time">Delivery Time</label>
          <input
            type="text"
            id="delivery-time"
            className="ck-input"
            defaultValue="ASAP(30-25)"
            readOnly
          />
        </div>

        <div className="ck-form-group">
          <label htmlFor="delivery-instructions">
            Delivery Instructions (Optional)
          </label>
          <textarea
            id="delivery-instructions"
            className="ck-textarea"
            placeholder="E.g leave at the front of the door, knock twice............"
            rows="3"
          />
        </div>

        <div className="ck-form-group">
          <label htmlFor="contact-address">Contact Address</label>
          <input
            type="tel"
            id="contact-address"
            className="ck-input"
            defaultValue="+234 801 234 5678"
            readOnly
          />
        </div>

        <button type="button" className="btn-primary" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default DeliveryDetailsScreen;

