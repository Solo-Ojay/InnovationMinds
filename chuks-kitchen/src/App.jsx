import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import OnboardingScreen from "./screens/OnboardingScreen";
import HomeScreen from "./screens/HomeScreen";
import PromoScreen from "./screens/PromoScreen";
import MenuScreen from "./screens/MenuScreen";
import FoodDetailsScreen from "./screens/FoodDetailsScreen";
import CartScreen from "./screens/CartScreen";
import DeliveryDetailsScreen from "./screens/DeliveryDetailsScreen";
import OrderSummaryScreen from "./screens/OrderSummaryScreen";
import PaymentOptionsScreen from "./screens/PaymentOptionsScreen";
import OrderCompletionScreen from "./screens/OrderCompletionScreen";
import LoadingScreen from "./screens/LoadingScreen";
import SignInScreen from "./screens/SignInScreen";

function App() {
  const [screen, setScreen] = useState("onboarding");

  const navigate = (next) => {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let content = null;

  switch (screen) {
    case "onboarding":
      content = <OnboardingScreen onStartOrder={() => navigate("home")} />;
      break;
    case "home":
      content = (
        <HomeScreen
          onDiscoverNew={() => navigate("promo")}
          onStartOrder={() => navigate("menu")}
        />
      );
      break;
    case "promo":
      content = <PromoScreen onDiscover={() => navigate("menu")} />;
      break;
    case "menu":
      content = (
        <MenuScreen
          onSelectMeal={() => navigate("food-details")}
          onGoToCart={() => navigate("cart")}
        />
      );
      break;
    case "food-details":
      content = (
        <FoodDetailsScreen
          onAddToCart={() => navigate("cart")}
          onClose={() => navigate("menu")}
        />
      );
      break;
    case "cart":
      content = <CartScreen onCheckout={() => navigate("delivery-details")} />;
      break;
    case "delivery-details":
      content = (
        <DeliveryDetailsScreen onContinue={() => navigate("order-summary")} />
      );
      break;
    case "order-summary":
      content = <OrderSummaryScreen onCheckout={() => navigate("payment")} />;
      break;
    case "payment":
      content = (
        <PaymentOptionsScreen
          onPay={() => navigate("loading")}
          amountLabel="₦9,900"
        />
      );
      break;
    case "loading":
      content = <LoadingScreen onDone={() => navigate("order-complete")} />;
      break;
    case "order-complete":
      content = (
        <OrderCompletionScreen
          onTrackOrder={() => navigate("order-summary")}
        />
      );
      break;
    case "signin":
      content = (
        <SignInScreen
          onContinue={() => navigate("home")}
          onCreateAccount={() => navigate("home")}
        />
      );
      break;
    default:
      content = (
        <HomeScreen
          onDiscoverNew={() => navigate("promo")}
          onStartOrder={() => navigate("menu")}
        />
      );
  }

  const isFullScreen = screen === "onboarding" || screen === "signin";

  return (
    <div className="app-root">
      {!isFullScreen && <Header currentScreen={screen} onNavigate={navigate} />}
      <main className="app-main">
        {isFullScreen ? (
          <div className="full-screen-page">{content}</div>
        ) : (
          <div className="page-shell">
            <div className="page-content page-bg">
              <div className="container">{content}</div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
