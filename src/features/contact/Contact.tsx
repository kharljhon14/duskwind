import './contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__header">
        <h3>Let's make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing services can help your
          business grow and succeed online.
        </p>
        <div>
          <button>Get your free proposal</button>
        </div>
      </div>
      <div className="contact__img">
        <img
          src="/contact.png"
          alt="Girl on computer with bird"
        />
      </div>
    </div>
  );
}
