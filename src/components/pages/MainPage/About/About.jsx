import s from "./About.module.scss";
import icon1 from '../../../../assets/about-icon1.svg';
import icon2 from '../../../../assets/about-icon2.svg';
import icon3 from '../../../../assets/about-icon3.svg';

const About = () => {
  return (
    <>
      <h1 className={s.mainTitle}>Quadratic funding #1 for experts Birthplace of Web3 tutorials</h1>
      <p className={s.aboutText}>Support experts from $1 and get NFT coupon for up to 100% discount</p>

      <ul className={s.aboutFeatures}>
        <li className={s.aboutFeaturesItem}>
          <div className={s.featureValue}>$5,872</div>
          <div className={s.featureName}>
            <img className={s.featureImage} src={icon1} alt="feature icon"/>
            <span>Donations</span>
          </div>
        </li>

        <li className={s.aboutFeaturesItem}>
          <div className={s.featureValue}>2342</div>
          <div className={s.featureName}>
            <img className={s.featureImage} src={icon2} alt="feature icon"/>
            <span>Contributors</span>
          </div>
        </li>

        <li className={s.aboutFeaturesItem}>
          <div className={s.featureValue}>$250.000 </div>
          <div className={s.featureName}>
            <img className={s.featureImage} src={icon3} alt="feature icon"/>
            <span>Prizepool</span>
          </div>
        </li>


      </ul>
    </>

  )
}

export default About;
