import Header from "./components/Header";
import Features from "./components/Features";
import Calculator from "./components/Calculator";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./components/Works";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Features />
              <Calculator />
              <Faq />
              <Footer />
            </>
          }
        />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
  );
}

export default App;
