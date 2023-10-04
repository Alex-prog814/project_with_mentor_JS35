import React from "react";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import MainRoutes from "./routing/MainRoutes";


const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
