import s from './ConnectBtns.module.scss';
import {useDispatch} from "react-redux";
import {setConnectIsShown, setWallet} from "../../store/reducers/dataReducer";
import {Link, useLocation, useNavigate} from "react-router-dom";

const ConfirmPaymentBtn = ({step, setStep}) => {

  const onConfirmPaymentClick = () => {
    setStep(3)

    // А до всего этого - поправить моки и в редьюсере сетать в результате санки - эти самые моки - весь массив

    // Осталось вытащить эксперта и задиспачить его айдишник - сделать action, который по айдишнику будет этого эксперта в массиве находить и менять ему поле isVoted. Потом значение этого поля сделать доп. условиям к disable кнопки Donate.
    // и будет ура. В общем-то работки на часик максимум.


  }

  return (

    <button className={s.connectBtn} disabled={step === 1} onClick={onConfirmPaymentClick}>
      Confirm</button>
  );
};

export default ConfirmPaymentBtn;
