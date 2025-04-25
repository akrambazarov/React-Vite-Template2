
import './App.css';
import './index.css';


function Header() {
  return (
    <nav className="nav container">
    <h1 className="nav-logo">Cootels</h1>
    <div className="nav-links">
        <a href="#rooms">Rooms</a>
        <a href="#reservation">Reservation</a>
        <a href="#contact">Contact</a>
    </div>
    <button className="button">Get Started</button>
    </nav>
  );
}

export default Header;