import './LandingPage.css'; // Make sure to import the custom styles
import { Link } from 'react-router-dom';
import deliveryIcon from '../assets/HomeIcon.png';
import returnIcon from '../assets/return.png';
import paymentIcon from '../assets/payment.png';
import visitIcon from '../assets/visit.png';
import supportIcon from '../assets/support.png';


const LandingPage = () => (
  <div className="landing-page">
    <div className="table">
    <div className="left-content">
      <p>Your one-stop-shop for exquisite houseplants!</p>
      {/* Ranking Section */}
      <div className="ranking">
        <p className="rank-text">Ranked</p>
        <div className="rank-number">#1</div>
        <div className="rank-description">in Online Plant Shop in Pakistan</div>
      </div>
      <Link to="/products">
        <button className="get-started">Get Started</button>
      </Link>
      <div className="company-about">
      <p>Our company is committed to delivering innovative solutions to our clients, ensuring that we meet their needs with excellence and dedication. We are passionate about making a positive impact through our work, and our team is always ready to take on new challenges and provide high-quality results.</p>
      </div>
    </div>

    {/* Right-side Facilities */}
    <div className="right-content">
      <h2>Our Facilities</h2>
      <div className="facility">
        <img src= {deliveryIcon} alt="Delivery Icon" />
        <div>
          <h3>Home Delivery</h3>
          <br></br>
          <p>Delivery service in all cities</p>
        </div>
      </div>
      <div className="facility">
        <img src={returnIcon} alt="Return Icon" />
        <div>
          <h3>Immediate Return</h3>
          <br></br>
          <p>If plants have problems</p>
        </div>
      </div>
      <div className="facility">
        <img src={paymentIcon} alt="Payment Icon" />
        <div>
          <h3>Easy Payment</h3>
          <br></br>
          <p>COD or Easypaisa Payment</p>
        </div>
      </div>
      <div className="facility">
        <img src={visitIcon} alt="Visit Icon" />
        <div>
          <h3>Site Visits</h3>
          <br></br>
          <p>Paid on-demand visits</p>
        </div>
      </div>
      <div className="facility">
        <img src={supportIcon} alt="Support Icon" />
        <div>
          <h3>24/7 Support</h3>
          <br></br>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
    </div>
    <br></br>
     {/* Reviews Section */}
    <div className="reviews">
      <h2>Customer Reviews</h2>
      <div className="reviews-carousel">
        <div className="review">
          <p className="review-text">"Absolutely love my new plants! They arrived healthy and look beautiful in my home. Highly recommend!"</p>
          <div className="review-rating">⭐⭐⭐⭐⭐</div>
          <p className="review-author">– Emily R.</p>
        </div>
        <div className="review">
          <p className="review-text">"The selection is fantastic, and the customer service was amazing. Will definitely shop again."</p>
          <div className="review-rating">⭐⭐⭐⭐</div>
          <p className="review-author">– John D.</p>
        </div>
        <div className="review">
          <p className="review-text">"Green Paradise Plants made my house feel like a true paradise. Their plants are top-notch!"</p>
          <div className="review-rating">⭐⭐⭐⭐⭐</div>
          <p className="review-author">– Sarah W.</p>
        </div>
        <div className="review">
          <p className="review-text">"Great quality plants with fast delivery! My garden looks amazing!"</p>
          <div className="review-rating">⭐⭐⭐⭐⭐</div>
          <p className="review-author">– Mike P.</p>
        </div>
        <div className="review">
          <p className="review-text">"The service was wonderful, and I loved the variety of plants available. Highly recommended!"</p>
          <div className="review-rating">⭐⭐⭐⭐</div>
          <p className="review-author">– Alice F.</p>
        </div>
      </div>
    </div>
    </div>

);

export default LandingPage;
