import s from './TopProfileModal.module.scss'

import profileBtn from '../../../../assets/profile-link.svg'
import greenRound from '../../../../assets/wallet-green-round.svg'
import onBtn from '../../../../assets/onBtn.svg'
import WithDrawBtn from "../../../smartContractComponents/WithDrawBtn/WithDrawBtn";
import {useSelector} from "react-redux";
import {selectCurrentExpertId, selectRole, selectRound, selectWallet} from "../../../../store/reducers/dataReducer";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


const TopProfileModal = ({profileModalIsShown, setProfileModalIsShown, classname, walletNumber}) => {

  const wallet = useSelector(selectWallet);
  const role = useSelector(selectRole);
  const currentId = useSelector(selectCurrentExpertId);
  const navigate = useNavigate();

  const onLinkClick = () => {
    if (role === 'student') navigate('/profile')
    if (role === 'expert') navigate('/expertProfile/' + currentId)
    setProfileModalIsShown(false)
  }

  const onKeydown = (e) => {
    if (e.key === 'Escape')
      setProfileModalIsShown(false);
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [])


  return (
    role && profileModalIsShown && <div className={classname}>
      <div className="overlayTransparent" onClick={()=>setProfileModalIsShown(false)}></div>
      <div className={s.modal}>
        <div className={s.header}>
          <h3 className={s.title}>Profile</h3>
          <button className={s.profileBtn}><img src={profileBtn} alt="profile link"
          onClick={onLinkClick}
          /></button>
        </div>
        <div className={s.walletWrapper}>
          <div className={s.balance}>
            <div className={s.balanceName}>Balance</div>
            <div className={s.balanceValue}>{wallet.balance} Matic</div>
          </div>
          <div className={s.walletNumberWrapper}>
            <span className={s.walletNumber}>{walletNumber}</span>
            <img src={greenRound} alt="icon"/>
          </div>
          <button><img src={onBtn} alt="button"/></button>
        </div>
        <div className={s.bottomWrapper}>
          <div className={s.balance}>
            <div className={s.balanceName}>Donated</div>
            <div className={s.balanceValue}>{wallet.donated} Matic</div>
          </div>
          <WithDrawBtn classname={s.withDraw} />
        </div>
      </div>
    </div>
  );
};

export default TopProfileModal;
