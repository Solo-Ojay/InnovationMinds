import heroImage from "../assets/onboardingScreen/images/onboardingMainImg.png";
import deliveryIcon from "../assets/onboardingScreen/icons/onboardingDeliveryVanIcon.png";
import forkIcon from "../assets/onboardingScreen/icons/onboardingForkAndKnifeFillIcon.png";
import "./OnboardingScreen.css";

function OnboardingScreen({ onStartOrder, onSignIn }) {
  return (
    <div className="onboarding-container">
      <div className="onboarding-left">
        <img src={heroImage} alt="Family enjoying Nigerian meals" />
      </div>
      <div className="onboarding-right">
        <div className="onboarding-header">
          <div className="onboarding-logo">Chuks Kitchen</div>
          <button type="button" className="btn-outline-blue" onClick={onSignIn}>
            Sign In
          </button>
        </div>

        <div className="onboarding-content">
          <h1 className="onboarding-title">Your Authentic Taste of Nigeria</h1>
          <p className="onboarding-subtitle">
            Experience homemade flavors delivered fresh to your desk or home. We
            bring the rich culinary heritage of Nigeria right to your doorstep.
          </p>

          <div className="onboarding-benefits-grid">
            <div className="benefit-item">
              <div className="icon-wrapper">
                <img src={forkIcon} alt="" />
              </div>
              <span>Freshly Prepared</span>
            </div>
            <div className="benefit-item">
              <div className="icon-wrapper">
                <img src={forkIcon} alt="" />
              </div>
              <span>Support Local Business</span>
            </div>
            <div className="benefit-item">
              <div className="icon-wrapper">
                <img src={deliveryIcon} alt="" />
              </div>
              <span>Fast &amp; Reliable Delivery</span>
            </div>
          </div>

          <div className="onboarding-actions">
            <button type="button" className="btn-primary-large" onClick={onStartOrder}>
              Start Your Order
            </button>
            <button type="button" className="btn-outline-blue-large">
              Learn More About Us
            </button>
          </div>
        </div>

        <div className="onboarding-footer">
          <span>© 2024 Chuks Kitchen.</span>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

export default OnboardingScreen;
