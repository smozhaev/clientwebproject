import React, { useState } from "react";
import Header from "./Components/Header/index";
import MainRouter from "./Components/MainRouter";
import Footer from "./Components/Footer";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <MainRouter isAuth={isAuth} />
      <Footer />
    </>
  );
};

export default App;
