import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./CheckoutPage/Checkout";
import Payment from "./PaymentPage/Payment";
import Desktop from "./HomepageBody/Desktop";

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Checkout/Payment" element={<Payment />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
