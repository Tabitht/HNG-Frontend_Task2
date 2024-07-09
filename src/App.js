import './App.css';
import Desktop from "./HomepageBody/Desktop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./CheckoutPage/Checkout";
import Payment from "./PaymentPage/Payment";
import Homepage from "./HomepageBody/Desktop";

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Payment" element={<Payment />} />
    </Routes>
  </Router>
      <header className="App-header">
        <h1>
          <Desktop />
        </h1>
      </header>
    </div>
  );
}

export default App;
