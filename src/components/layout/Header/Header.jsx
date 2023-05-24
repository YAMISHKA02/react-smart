import s from "./header.module.scss";
import logo from '../../../assets/logo.svg'

const Header = () => {
  return (
    <header className={s.mainHeader}>
      <div className="container">
        <div className={s.headerWrapper}>
          <a href="/"><img src={logo} alt="logo"/></a>

          <div className={s.headerMenu}>
            <a href="/" className={s.headerLink_active}>Donation</a>
            <a href="https://docs.cyberbox.art/" className={s.headerLink}>About</a>
          </div>
          <button className={s.headerConnectBtn}>Connect</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
