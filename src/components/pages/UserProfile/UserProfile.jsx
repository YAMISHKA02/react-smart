import s from './UserProfile.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {selectWallet, setUserRole} from "../../../store/reducers/dataReducer";
import WithDrawBtn from "../../smartContractComponents/WithDrawBtn/WithDrawBtn";
import {useState} from "react";
import UserProfileModal from "./UserProfileModal/UserProfileModal";

const UserProfile = () => {

  const wallet = useSelector(selectWallet);
  const [isModalActive, setIsModalActive] = useState(false);
  const dispatch = useDispatch()

  const switchToExpert = () => {
    setIsModalActive(true);
    dispatch(setUserRole('expert'))
  }

  return (
    wallet && <div className={s.container}>
      <div className={s.contentWrapper}>
        <div className={s.mainContent}>
          {wallet.donated === 0 ?
            <h1 className={s.donated}>0 tokens donated</h1> :
            <h1 className={s.donated}>{wallet.donated} Matic donated</h1>
          }
          <WithDrawBtn disabled={wallet.donated === 0}/>

          <p className={s.text}>You can withdraw your tokens if the Expert fails to fulfill its obligations.</p>
        </div>
        <div>
          <button className={s.switchToExpertBtn} onClick={switchToExpert}>Switch to expert</button>
        </div>
      </div>

      <UserProfileModal isModalActive={isModalActive} setIsModalActive={setIsModalActive}/>

    </div>
  );
};

export default UserProfile;
