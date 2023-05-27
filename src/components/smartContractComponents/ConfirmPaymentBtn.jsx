import s from './ConnectBtns.module.scss';
import {useDispatch} from "react-redux";
import {setConnectIsShown, setWallet} from "../../store/reducers/dataReducer";
import {Link, useLocation, useNavigate} from "react-router-dom";

const ConfirmPaymentBtn = ({step, setStep}) => {

  const onApprovePaymentClick = () => {
    setStep(3)
  }

  return (

    <button className={s.connectBtn} disabled={step === 1} onClick={onApprovePaymentClick}>
      Confirm</button>
  );
};

export default ConfirmPaymentBtn;
