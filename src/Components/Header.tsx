import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Navigate, RouteObject, useRoutes, Link } from "react-router-dom";
import Login from "./Login";
import Registr from "./Registr";
import { useState } from "react";
import { Switch } from "antd";

interface HeaderComponentProps {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

const Header: React.FC<HeaderComponentProps> = ({ isAuth, setIsAuth }) => {
  const AuthState = () => {
    setIsAuth(true);
  };

  const notAuthState = () => {
    setIsAuth(false);
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const changeTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <>
      <Navbar
        variant={currentTheme}
        bg={currentTheme}
        data-bs-theme={currentTheme}
      >
        <Container>
          <Navbar.Brand href="#home">AllUniversities</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/features">О нас</Nav.Link>
            <Nav.Link href="/pricing">Оставте заявку</Nav.Link>
            <ButtonGroup aria-label="Basic example">
              {isAuth ? (
                <Button onClick={notAuthState} variant="secondary">
                  Выход
                </Button>
              ) : (
                <Button onClick={AuthState} variant="secondary">
                  Вход
                </Button>
              )}
              {isAuth ? (
                <></>
              ) : (
                <Button variant="secondary">Регистрация</Button>
              )}
            </ButtonGroup>
            <Switch
              onClick={() => changeTheme()}
              defaultChecked
              onChange={onChange}
            />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
