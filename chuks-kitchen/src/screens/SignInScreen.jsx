import signInImage from "../assets/onboardingScreen/images/onboardingMainImg.png";
import mailIcon from "../assets/signInScreen/icons/mail.png";
import passwordIcon from "../assets/signInScreen/icons/password.png";
import googleIcon from "../assets/signInScreen/icons/googleIcon.png";
import facebookIcon from "../assets/signInScreen/icons/facebookIcon.png";
import "./SignInScreen.css";

function SignInScreen({ onContinue, onCreateAccount }) {
  return (
    <div className="signin-container">
      <div className="signin-left">
        <img src={signInImage} alt="Nigerian food spread" />
        <div className="signin-overlay">
          <div className="signin-hero-content">
            <h1 className="signin-logo-text">Chuks Kitchen</h1>
            <p>
              Your journey to delicious, authentic Nigerian meals starts here. Sign
              up or log in to order your favorites today!
            </p>
          </div>
        </div>
      </div>

      <div className="signin-right">
        <div className="signin-form-wrapper">
          <h2 className="signin-brand-logo">Chuks Kitchen</h2>
          <h3 className="signin-heading">Login your Account</h3>

          <div className="signin-form-group">
            <label htmlFor="email-phone">Email or phone number</label>
            <div className="signin-input-wrapper">
              <img src={mailIcon} alt="" className="input-icon" />
              <input
                type="text"
                id="email-phone"
                placeholder="name@gmail.com"
              />
            </div>
          </div>

          <div className="signin-form-group">
            <label htmlFor="password">Password</label>
            <div className="signin-input-wrapper">
              <img src={passwordIcon} alt="" className="input-icon" />
              <input
                type="password"
                id="password"
                placeholder="******"
              />
              <button type="button" className="password-toggle" aria-label="Toggle password visibility">
                <span role="img" aria-label="eye-off">👁️‍🗨️</span>
              </button>
            </div>
            <div className="forgot-password-link">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>

          <button type="button" className="btn-primary-large push-down" onClick={onContinue}>
            Continue
          </button>

          <div className="signin-divider">
            <span>Or continue with</span>
          </div>

          <div className="social-buttons">
            <button type="button" className="btn-social">
              <img src={googleIcon} alt="" />
              Continue with Google
            </button>
            <button type="button" className="btn-social">
              <img src={facebookIcon} alt="" />
              Continue with Apple
            </button>
          </div>

          <p className="signup-prompt">
            Don&apos;t have an account?{" "}
            <a
              href="#signup"
              onClick={(e) => {
                e.preventDefault();
                onCreateAccount?.();
              }}
            >
              Cracte an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInScreen;
