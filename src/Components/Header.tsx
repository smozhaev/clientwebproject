import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Navigate, RouteObject, useRoutes, Link } from "react-router-dom";
import Login from './Login';
import Registr from './Registr';

interface MyComponentProps {
    isAuth: boolean;
    setIsAuth: (value: boolean) => void;
}
  

const Header: React.FC<MyComponentProps> = ({isAuth, setIsAuth}) => {

    const AuthState = () => {
        setIsAuth(true)
    }

    const notAuthState = () => {
        setIsAuth(false)
    }
    
    return  (
    <>
      <Navbar variant="dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href='/'>Главная</Nav.Link>
            <Nav.Link href='/features'>Features</Nav.Link>
            <Nav.Link href='/pricing'>Pricing</Nav.Link>
            <ButtonGroup aria-label="Basic example">
                {isAuth ? <Button onClick={notAuthState} variant="secondary">Выход</Button> : <Button  onClick={AuthState} variant="secondary">Вход</Button>}
                {isAuth ? <></> : <Button variant="secondary">Регистрация</Button>}
            </ButtonGroup>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;