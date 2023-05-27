import s from './ConnectBtns.module.scss';

const ApprovePaymentBtn = ({step, setStep}) => {

  const onApprovePayment = ()=>{
    setStep(2);
  }

  return (
    <button
      className={s.connectBtn} disabled={step === 2}
    onClick={onApprovePayment}
    >Approve</button>
  );
};

export default ApprovePaymentBtn;
