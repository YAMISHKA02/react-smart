import s from './StartWalletBtn.module.scss'


const StartWalletBtn = ({setStep}) => {

  // Обработчик нажатия на кнопку Подключись - нужно все данные, которые придут во время подключения, сложить в редакс.. или они после нажатия кнопки Approve придут или  Confirm..
  const onStartBtnClick = ()=>{
    setStep(3);
  }
  return (
    <button onClick={onStartBtnClick} className={s.connectBtn}>Подключись!</button>
  );
};

export default StartWalletBtn;
