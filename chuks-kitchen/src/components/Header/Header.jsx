import "./Header.css";

const NAV_ITEMS = ["Home", "Explore", "My Orders", "Account"];

function Header({ currentScreen, onNavigate, onSignIn }) {
  return (
    <header className="ck-header">
      <div className="container ck-header-inner">
        <div
          className="ck-logo"
          onClick={() => onNavigate("home")}
          aria-label="Chuks Kitchen home"
        >
          <span className="ck-logo-script">Chuks Kitchen</span>
        </div>

        <nav className="ck-nav" aria-label="Main navigation">
          <ul className="ck-nav-list">
            {NAV_ITEMS.map((item) => {
              const key = item.toLowerCase().replace(" ", "-");
              const targetScreen =
                key === "home"
                  ? "home"
                  : key === "explore"
                  ? "menu"
                  : key === "my-orders"
                  ? "cart"
                  : "signin";

              const isActive =
                (currentScreen === "home" && targetScreen === "home") ||
                (currentScreen === "menu" && targetScreen === "menu") ||
                (currentScreen === "cart" &&
                  (targetScreen === "cart" || targetScreen === "order-summary")) ||
                (currentScreen === "signin" && targetScreen === "signin");

              return (
                <li key={key}>
                  <button
                    type="button"
                    className={`ck-nav-link${isActive ? " ck-nav-link-active" : ""}`}
                    onClick={() => onNavigate(targetScreen)}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="ck-login-btn"
          onClick={onSignIn ?? (() => onNavigate("signin"))}
        >
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;

