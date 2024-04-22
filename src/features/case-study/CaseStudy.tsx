import { MdArrowOutward } from 'react-icons/md';
import './case-study.css';

export default function CaseStudy() {
  return (
    <div className="case-study">
      <div className="case-study__header">
        <h2>Case study</h2>
        <p>
          Explore Real-Life Example of Our Proven Digital Marketing Success throug Our Case Studies
        </p>
      </div>

      <div className="case-study__content">
        <div className="case-study__content__item">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50%
            increase in website traffic and a 25% increase in sales.
          </p>
          <a href="/">
            Learn more
            <div className="case-study__content__icon">
              <MdArrowOutward />
            </div>
          </a>
        </div>
        <div className="case-study__content__item">
          <p>
            For for B2B software company, we develoled an SEO strategy that resulted in a first page
            ranking for key keywords and a 200% increase in organic traffic.
          </p>
          <a href="/">
            Learn more
            <div className="case-study__content__icon">
              <MdArrowOutward />
            </div>
          </a>
        </div>
        <div className="case-study__content__item">
          <p>
            For a national retail chain, we created a social media marketing campaign that increased
            followers by 25% and generated a 20% increase in online sales.
          </p>
          <a href="/">
            Learn more
            <div className="case-study__content__icon">
              <MdArrowOutward />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
