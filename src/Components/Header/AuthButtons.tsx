import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

interface AuthButtonsProps {
  notAuthState: () => void;
  AuthState: () => void;
  isAuth: boolean;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({
  AuthState,
  notAuthState,
  isAuth,
}) => {
  return (
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
      {isAuth ? <></> : <Button variant="secondary">Регистрация</Button>}
    </ButtonGroup>
  );
};

export default AuthButtons;
