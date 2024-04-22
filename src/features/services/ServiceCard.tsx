import { MdArrowOutward } from 'react-icons/md';
import './serviceCard.css';

interface Props {
  title: string;
  imgUrl: string;
  color: 'light' | 'dark';
}

export default function ServiceCard({ title, imgUrl }: Props) {
  return (
    <div className="service-card">
      <div className="service-card__header">
        <h3>{title}</h3>
        <div>
          <a href="/">
            <div className="service-card__header__icon">
              <MdArrowOutward />
            </div>
            <span>Learn more</span>
          </a>
        </div>
      </div>
      <div className="service-card__img">
        <img src={`/services/${imgUrl}`} />
      </div>
    </div>
  );
}
