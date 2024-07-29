import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/signin">Entrar</Link>
    </header>
  );
}

export default Header;
