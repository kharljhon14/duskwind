import { MdArrowOutward } from 'react-icons/md';
import './serviceCard.css';

interface Props {
  title: string;
  subtitle: string;
  imgUrl: string;
  color: 'light' | 'dark';
}

export default function ServiceCard({ title, subtitle, imgUrl, color }: Props) {
  return (
    <div className={`service-card service-card--${color}`}>
      <div className="service-card__header">
        <h3>
          <span>{title}</span>
          <span>{subtitle}</span>
        </h3>

        <a href="/">
          <div className="service-card__header__icon">
            <MdArrowOutward />
          </div>
          <span>Learn more</span>
        </a>
      </div>
      <div className="service-card__img">
        <img src={`/services/${imgUrl}`} />
      </div>
    </div>
  );
}
