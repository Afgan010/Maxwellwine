import { Link } from "react-router-dom";

interface IButton {
  path: string;
  name: string;
  className?: string;
}

const CustomButtons = ({ path, name, className }: IButton) => {
  return (
    <Link className={className} to={path}>
      {name}
    </Link>
  );
};

export default CustomButtons;
