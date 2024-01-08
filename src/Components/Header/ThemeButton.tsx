import { Switch } from "antd";

interface ThemeComponentProps {
  changeTheme: () => void;
}

const ThemeButton: React.FC<ThemeComponentProps> = ({ changeTheme }) => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Switch onClick={() => changeTheme()} defaultChecked onChange={onChange} />
  );
};

export default ThemeButton;
