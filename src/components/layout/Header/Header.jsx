import s from "./header.module.scss";
import logo from '../../../assets/logo.svg'
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectConnectIsShown, selectWallet, setConnectIsShown} from "../../../store/reducers/dataReducer";
import {useState} from "react";

const Header = () => {

  const wallet = useSelector(selectWallet);


  const [isShowProfile, setShowProfile] = useState(false);

  const dispatch = useDispatch();

  const onHeaderBtnClick = () => {
    if (wallet) {
      setShowProfile(true);
    } else {
      dispatch(setConnectIsShown(true))
    }
  }

  let walletStringValue;
  if (wallet) {
    walletStringValue = wallet.number.slice(0, 4) + '...' + wallet.number.slice(-4);
  }

  const path = useLocation().pathname;

  const showMostOfHeader = path !== '/role' && path !== '/edit'

  return (
    <header className={s.mainHeader}>
      <div className="container">
        <div className={s.headerWrapper}>
          <Link to="/"><img src={logo} alt="logo"/></Link>

          {showMostOfHeader && <div className={s.headerMenu}>
            <Link to="/" className={s.headerLink_active}>Donation</Link>
            <a href="https://docs.cyberbox.art/" className={s.headerLink}>About</a>
          </div> }
          {showMostOfHeader && <button className={s.headerConnectBtn}
            onClick={onHeaderBtnClick}
            >{
            !wallet ? `CONNECT` : `${walletStringValue}`}</button>}
        </div>

        {
          isShowProfile && <div className={s.headerProfilePopup}>Профиль</div>
          // Отд. компонент потом сделай - ОКАЙ
        }
      </div>
    </header>
  );
};

export default Header;
