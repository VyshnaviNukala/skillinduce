import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg';  // adjust the path based on where the image is located

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src={logo} alt="Logo" className="h-8 w-8" />
      <span className="text-xl font-bold text-gray-900">Skillinduce</span>
    </Link>
  );
}
