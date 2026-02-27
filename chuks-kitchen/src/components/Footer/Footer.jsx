import "./Footer.css";

function Footer() {
  return (
    <footer className="ck-footer">
      <div className="container ck-footer-inner">
        <div className="ck-footer-column">
          <h3 className="ck-footer-logo">Chuks Kitchen</h3>
          <p className="ck-footer-text">
            Bringing the authentic flavors of Nigerian home cooking to your table, with
            passion and care.
          </p>
          <p className="ck-footer-copy">© 2020 Lift Media. All rights reserved.</p>
        </div>

        <div className="ck-footer-column">
          <h4 className="ck-footer-heading">Quick Links</h4>
          <ul className="ck-footer-list">
            <li>Home</li>
            <li>Explore</li>
            <li>My Order</li>
            <li>Account</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="ck-footer-column">
          <h4 className="ck-footer-heading">Contact Us</h4>
          <ul className="ck-footer-list">
            <li>+234 801 234 5678</li>
            <li>hello@chukskitchen.com</li>
            <li>123 Taste Blvd, Lagos, Nigeria</li>
          </ul>
        </div>

        <div className="ck-footer-column">
          <h4 className="ck-footer-heading">Social</h4>
          <ul className="ck-footer-list">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <button
        type="button"
        className="ck-fab"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;


