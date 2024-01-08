import React, { useState } from "react";
import Header from "./Components/Header/index";
import MainRouter from "./Components/MainRouter";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Form />
      <MainRouter isAuth={isAuth} />
      <Footer />
    </>
  );
};

export default App;
