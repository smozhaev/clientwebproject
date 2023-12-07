import React, {useState} from "react";
import Header from "./Components/Header";
import PaginationPage from "./Components/Pagination";
import { Link} from 'react-router-dom';
import MainRouter from "./Components/MainRouter";
import Footer from "./Components/Footer";
const  App = () => {

  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      {/* <Header/> */}
      <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
      <MainRouter isAuth={isAuth}/>
      <Footer />
    </>
  )
}

export default App;
