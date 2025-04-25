import './App.css'
import './index.css'
function Footer(){
    return(
<footer className="footer" id="contact">
        <div className="container footer-grid">
            <div className="footer-links">
                <h3 className="nav-logo">Cootels</h3>
                <p>Your perfect getaway in nature.</p>
            </div>
            <div className="footer-links">
                <h4>Rooms</h4>
                <ul>
                    <li><a href="#">Single Room</a></li>
                    <li><a href="#">Double Room</a></li>
                    <li><a href="#">Cottage</a></li>
                </ul>
            </div>
            <div className="footer-links">
                <h4>Reservation</h4>
                <ul>
                    <li><a href="#">See My Options</a></li>
                    <li><a href="#">Book Now</a></li>
                </ul>
            </div>
            <div className="footer-links">
                <h4>Contact</h4>
                <ul>
                    <li>Phone: +1 123 456 7890</li>
                    <li>Email: info@cootels.com</li>
                </ul>
            </div>
        </div>
    </footer>
    )
}
export default Footer