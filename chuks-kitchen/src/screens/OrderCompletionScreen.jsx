function OrderCompletionScreen({ onTrackOrder }) {
  return (
    <div className="ck-order-complete">
      <div className="ck-order-complete-content card-surface">
        <div className="ck-success-icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="#22C55E" />
            <path
              d="M25 40L35 50L55 30"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1>Order Placed Successfully!</h1>
        <p className="ck-order-complete-message">
          Your delicious Chuks Kitchen meal is on its way!
        </p>

        <div className="ck-order-id">
          <p>Order #123RGR231567Y Confirmed</p>
        </div>

        <button type="button" className="btn-primary" onClick={onTrackOrder}>
          Track Order
        </button>

        <div className="ck-order-actions">
          <a href="#receipt" className="ck-link">
            Generate Receipt
          </a>
          <a href="#help" className="ck-link">
            Need help with your order?
          </a>
        </div>
      </div>
    </div>
  );
}

export default OrderCompletionScreen;

