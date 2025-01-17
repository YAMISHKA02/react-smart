import s from './UserProfileModal.module.scss'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const UserProfileModal = ({isModalActive, setIsModalActive}) => {
  const navigate = useNavigate()

  const onKeydown = (e) => {
    if (e.key === 'Escape')
      setIsModalActive(false);
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [])


  return (
    isModalActive && <div>
      <div className="overlayTransparent" onClick={() => setIsModalActive(false)}></div>
      <div className={s.modal}>
        <h3 className={s.title}>Are you sure you want to switch to expert?</h3>
        <p className={s.text}>It will not be possible to switch back to the student</p>
        <div className={s.buttonsWrapper}>
          <button className={s.switchBtn} onClick={() => navigate('/edit')}>Yes, switch</button>
          <button className={s.noBtn} onClick={() => setIsModalActive(false)}>No</button>

        </div>


      </div>


    </div>
  );
};

export default UserProfileModal;
