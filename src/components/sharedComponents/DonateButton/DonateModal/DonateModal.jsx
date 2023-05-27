import s from './DonateModal.module.scss'
import closeBtn from '../../../../assets/closeConnect.svg'
import {useEffect, useState} from "react";

import greyRound from '../../../../assets/grey-round.svg'
import {useSelector} from "react-redux";
import {selectWallet} from "../../../../store/reducers/dataReducer";
import ApprovePaymentBtn from "../../../smartContractComponents/ApprovePaymentBtn";
import ConfirmPaymentBtn from "../../../smartContractComponents/ConfirmPaymentBtn";

const DonateModal = ({expert, isDonateModalShown, setIsDonateModalShown, bonus}) => {
  console.log(expert)

  const onKeydown = (e) => {
    if (e.key === 'Escape')
      setIsDonateModalShown(false);
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [])

  const wallet = useSelector(selectWallet)
  const [step, setStep] = useState(1)

  return (
    isDonateModalShown && <div>
      <div className={s.donateModal}>


        <button className={s.closeBtn}><img src={closeBtn} alt="close button"
                                            onClick={() => setIsDonateModalShown(false)}/></button>

        <h1 className={s.title}>Payment Confirmation</h1>
        <p className={s.youVote}>You vote for {expert.expert.name + ' ' + expert.expert.position}</p>
        <div className={s.youPay}>
          <span>You pay</span>
          <span>$12</span>
        </div>
        <div className={s.textQuadr}>
          <span>Quadratic</span>
          <div className={s.bonusWrapper}><span className={s.bonus}>+{bonus}</span> <img src={greyRound} alt="icon"/>
          </div>
        </div>

        <div className={s.text}>
          <span>Balance</span>
          <div className={s.bonusWrapper}><span>${wallet.balance}</span></div>
        </div>
        <div className={s.buttonWrapper}>
          <ApprovePaymentBtn step={step} setStep={setStep}/>
          <ConfirmPaymentBtn step={step} setStep={setStep}/>
        </div>


      </div>

      <div className="overlay" onClick={() => setIsDonateModalShown(false)}></div>

    </div>
  );
};

export default DonateModal;
