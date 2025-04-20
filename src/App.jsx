
import home1 from './assets/home1.png';
import home2 from './assets/home2.png';
import home3 from './assets/home3.png';
import i2 from './assets/2.png';
import i3 from './assets/3.png';
import i7 from './assets/7.png';
import i8 from './assets/8.png';
import i9 from './assets/9.png';
import f2 from './assets/food2.png'
import './App.css';
import './index.css';
import Header from './header';
import Footer from './footer';
import { Cart } from './cart';

function App() {
  return (
    <div>
        <Header/>
 <section className="hero container">
        <div className="hero-content">
            <h1 className="section-title">Nature, Warmth, and Beauty in One Space</h1>
            <p className="section-text">
                One place to release all the stress, bring back happiness, and get back to nature. 
                We provide the best room and nature for you.
            </p>
            <button className="button">Read more</button>
        </div>
        <div className="hero-images">
            <div className="image-container">
                <img src={home1} alt="Cozy cabin exterior"/>
            </div>
            <div className="image-container">
                <img src={home2} alt="Cabin in winter"/>
            </div>
            <div className="image-container">
                <img src={home3} alt="Cabin in winter"/>
            </div>
        </div>
    </section>

  
    <section className="features">
        <div className="container">
            <div className="feature-grid">
                <img src={i2} alt="Cozy cabin"/>
                <div className="hero-content">
                    <h2 className="section-title">Cozy and Down to Earth Cootage Hotel in Norway</h2>
                    <p className="section-text">
                        Our Cootage Hotel brings you Ultimate comfort surrounded by stunning nature. 
                        Experience warmth and tranquility in our carefully designed spaces.
                    </p>
                </div>
            </div>
            
            <div className="feature-grid">
            
                <div className="hero-content">
                    <h2 className="section-title">Cabin Activities</h2>
                    <p className="section-text">
                    Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.
                    </p>
                </div>
                <img src={i2} style={{width:'90%'}} alt="Organic food"/>
            </div>
            <div className="feature-grid">
            <img src={i3} alt="Organic food"/>
                <div className="hero-content">
                    <h2 className="section-title">100% Organic Food</h2>
                    <p className="section-text">
                        We serve 100% organic, eco-friendly and delicious food. We grow our own herbs 
                        to make everything more organic and pure.
                    </p>
                </div>
                
            </div>

        </div>
    </section>

    
    <section className="rooms container" id="rooms">
        <h2 className="section-title text-center">Many Rooms to Choose</h2>
        <p className="section-text text-center">There are many variation of rooms you can choose from</p>
        
        <div className="room-grid">
            <div className="room-card">
                <img src={i7} alt="Single Room"/>
                <div className="room-content">
                    <h3>Single Room</h3>
                    <p className="section-text">Best for solo travelers. Cozy and comfortable single rooms with all amenities.</p>
                    <button className="button button-outline">Learn more</button>
                </div>
            </div>
            <div className="room-card">
                <img src={i8} alt="Double Room"/>
                <div className="room-content">
                    <h3>Double Room</h3>
                    <p className="section-text">Perfect for couples or friends. Spacious rooms with stunning views.</p>
                    <button className="button button-outline">Learn more</button>
                </div>
            </div>
            <div className="room-card">
                <img src={i9} alt="Cottage"/>
                <div className="room-content">
                    <h3>Cottage</h3>
                    <p className="section-text">Ideal for families up to 6 people. Private cottage with full amenities.</p>
                    <button className="button button-outline">Learn more</button>
                </div>
            </div>
        </div>
    </section>

   
    <section className="booking" id="reservation">
        <div className="container">
            <h2 className="section-title">How to Get My Room?</h2>
            <div className="booking-steps">
                <div className="step-card">
                    <h3>1. Choose a room and date</h3>
                    <p className="section-text">Select your preferred room type and stay dates.</p>
                </div>
                <div className="step-card">
                    <h3>2. Check for room availability</h3>
                    <p className="section-text">Contact us via phone or email, ask for availability of your selected dates.</p>
                </div>
                <div className="step-card">
                    <h3>3. Enjoy your room</h3>
                    <p className="section-text">Once confirmed, arrive and enjoy your stay with us!</p>
                </div>
            </div>
            <div className='flex gap-10'>
                <button className="button">Contact Us</button>
                <button className="button button-outline">Learn more</button>
            </div>
        </div>
    </section>

    <section className="testimonials container">
        <img src={f2} alt="" />
        <h2 className="section-title">Hear From Our Happy Customers</h2>
        <div className="testimonial-card">
            <p className="section-text">
                "Great service and such a nice place. the location is very beautiful, you can be so close
                to nature and use your time to learn new things. you should come and see by your self, it
                will all fit for what you need."
            </p>
            <div>
                <h4>Maria Graham</h4>
                <p>Regular Customer</p>
            </div>
        </div>
    </section>
    <Cart text="Salom Hello World"/>
    <Cart text="Salom  World"/>
    <Cart text="Salom Hello"/>
    <Footer/>
    </div>
    
  );
}

export default App;