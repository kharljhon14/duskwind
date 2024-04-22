import ServiceCard from './ServiceCard';
import './services.css';

export default function Services() {
  return (
    <div className="services">
      <div className="services__header">
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help businesses grow and
          succeed online. These services include:
        </p>
      </div>

      <div className="services__cards">
        <ServiceCard
          title="Search engine"
          subtitle="optimization"
          imgUrl="/search.png"
          color="light"
        />
        <ServiceCard
          title="Social media"
          subtitle="marketing"
          imgUrl="/socials.png"
          color="dark"
        />
        <ServiceCard
          title="Pay per click"
          subtitle="advertising"
          imgUrl="/click.png"
          color="dark"
        />
        <ServiceCard
          title="E-mail"
          subtitle="marketing"
          imgUrl="/mail.png"
          color="light"
        />
      </div>
    </div>
  );
}
