import s from './ClaimButton.module.scss';
import cn from "classnames";
import {useState} from "react";

const ClaimButton = () => {

  const showTooltip = () => {
    setIsTooltipShown(true);
  }

  const hideTooltip = () => {
    setIsTooltipShown(false)
  }

  const [isTooltipShown, setIsTooltipShown] = useState(false);


  return (

    <div onMouseEnter={() => showTooltip()}
         onMouseLeave={() => hideTooltip()}
         className={s.buttonWrapper}
    >
      <button className={s.claimBtn} disabled>Claim</button>
      {
        isTooltipShown && <div className={s.tooltip}>You can collect donates after voting ends</div>
      }
    </div>





  );
};

export default ClaimButton;
