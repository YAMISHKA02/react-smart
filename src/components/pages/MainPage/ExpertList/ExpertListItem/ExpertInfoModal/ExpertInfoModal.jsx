import s from './ExpertInfoModal.module.scss'
import React, {useEffect} from "react";
import ExpertTitle from "../../../../../sharedComponents/ExpertTitle/ExpertTitle";
import tg from "../../../../../../assets/social-tg.svg";
import twitter from "../../../../../../assets/social-twitter.svg";
import web from "../../../../../../assets/social-web.svg";
import insta from "../../../../../../assets/social-insta.svg";
import ExpertText from "../../../../../sharedComponents/ExpertText/ExpertText";
import ShareProfile from "../../../../../sharedComponents/ShareProfile/ShareProfile";

const ExpertInfoModal = ({isExpertModalActive, setExpertModalActive, expert, avatar}) => {

  const onKeydown = (e) => {
    if (e.key === 'Escape')
      setExpertModalActive()
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [])

  return (
    isExpertModalActive &&
    <>
      <div className="overlay" onClick={() => setExpertModalActive(false)}></div>

      <div className={s.expertInfoModal}>
        <div className={s.header}>
          <div className={s.mainInfo}>
            <img src={avatar} alt="avatar" className={s.avatar}/>
            <ExpertTitle expert={expert}/>
          </div>
          <ShareProfile expertId={expert.id} classname={s.modal__shareProfile} />
        </div>
        <ExpertText expert={expert} />

      </div>
    </>
  );
};

export default ExpertInfoModal;
