import s from './ConnectBtns.module.scss';
import {useDispatch} from "react-redux";
import {setConnectIsShown, setIsVoted, setWallet} from "../../store/reducers/dataReducer";
import {Link, useLocation, useNavigate} from "react-router-dom";

const ConfirmPaymentBtn = ({step, setStep, expert}) => {

  const dispatch = useDispatch()

  const onConfirmPaymentClick = () => {
    setStep(3)
    dispatch(setIsVoted(expert.expert.id))
  }

  return (

    <button className={s.connectBtn} disabled={step === 1} onClick={onConfirmPaymentClick}>
      Confirm</button>
  );
};

export default ConfirmPaymentBtn;
