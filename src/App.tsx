import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const getStaff = async () => {
  //   const data = await axios.get(
  //     "https://e.mospolytech.ru/old/lk_api.php/?getStaff&search=&division=&page=50&perpage=50&token=encs7hdoQvvlRbnmdYMx6iYbN6BV4c0u3OFzrYnFLLnxMTZgPEFWacFk%2BbO2lmIVpB4FZl3gw4Gl4vqwmhv0ZozGywqMuZHzO9Dp7nzjoCq3RxTWE0Lh58dVG%2FAoV9M13ElJ6AUayD%2B9Vw41XTcwOFhTEtm5OaGaCnVtzkeGR28%3D"
  //   );
  //   return response.data;
  // };

  // useEffect(() => {
  //   console.log(getStaff());
  // });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
