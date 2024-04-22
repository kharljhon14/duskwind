import './hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Navigating the digital landscape for success</h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online through a range of
          services including SEO, PPC, social media marketing and content creation
        </p>

        <div>
          <button>Book a consultation</button>
        </div>
      </div>
      <div className="img">
        <img
          src="/hero-img.png"
          alt="Mobile phone with social icons"
        />
      </div>
    </div>
  );
}
