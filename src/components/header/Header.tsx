import { SiPolestar } from 'react-icons/si';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <SiPolestar />
          <h1>Duskwind</h1>
        </a>
      </div>

      <nav>
        <ul>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Use Cases</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </nav>

      <div className="cta-container">
        <button>Request a quote</button>
      </div>
    </header>
  );
}
