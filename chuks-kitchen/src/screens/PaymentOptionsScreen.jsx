function PaymentOptionsScreen({ onPay, amountLabel }) {
  return (
    <div className="ck-payment">
      <h1 className="section-title">Payment</h1>

      <div className="ck-payment-form card-surface">
        <div className="ck-form-group">
          <label>Pay With:</label>
          <div className="ck-radio-group">
            <label className="ck-radio-option">
              <input type="radio" name="payment-method" value="card" defaultChecked />
              <span>Card</span>
            </label>
            <label className="ck-radio-option">
              <input type="radio" name="payment-method" value="bank" />
              <span>Bank</span>
            </label>
            <label className="ck-radio-option">
              <input type="radio" name="payment-method" value="transfer" />
              <span>Transfer</span>
            </label>
          </div>
        </div>

        <div className="ck-form-group">
          <label htmlFor="card-number">Card Number</label>
          <input
            type="text"
            id="card-number"
            className="ck-input"
            placeholder="1234 5678 9101 1121"
            maxLength="19"
          />
        </div>

        <div className="ck-form-row">
          <div className="ck-form-group">
            <label htmlFor="expiry-date">Expiration Date</label>
            <input
              type="text"
              id="expiry-date"
              className="ck-input"
              placeholder="MM/YY"
              maxLength="5"
            />
          </div>
          <div className="ck-form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              className="ck-input"
              placeholder="123"
              maxLength="3"
            />
          </div>
        </div>

        <div className="ck-form-group">
          <label className="ck-checkbox-option">
            <input type="checkbox" name="save-card" />
            <span>Save card details</span>
          </label>
        </div>

        <button type="button" className="btn-primary" onClick={onPay}>
          Pay {amountLabel}
        </button>

        <p className="ck-privacy-text">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described in our
          privacy policy.
        </p>
      </div>
    </div>
  );
}

export default PaymentOptionsScreen;

