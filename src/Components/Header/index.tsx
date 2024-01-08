import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthButtons from "./AuthButtons";
import ThemeButton from "./ThemeButton";
import { useState } from "react";

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
            <ThemeButton changeTheme={changeTheme} />
            <AuthButtons
              notAuthState={notAuthState}
              AuthState={AuthState}
              isAuth={isAuth}
            />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
