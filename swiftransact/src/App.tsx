import React from "react";

//Import Styles
import "./style.scss";

//Import Fontawesome
import "@fortawesome/fontawesome-free/css/all.min.css";

//Import Header Component
import Header from "./compontents/header";

//Import Footer Component
import Footer from "./compontents/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
