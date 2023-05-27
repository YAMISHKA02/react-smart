import s from './DonateButton.module.scss'
import cn from "classnames";
import {useSelector} from "react-redux";
import {selectRound, selectWallet} from "../../../store/reducers/dataReducer";
import {useState} from "react";

const DonateButton = ({classname}) => {

  const wallet = useSelector(selectWallet);
  const roundStatus = useSelector(selectRound).status;

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
      <button className={cn(s.cellButton, classname)}
              disabled={!wallet || roundStatus !== 1}
      >Donate
      </button>
      {
        isTooltipShown && <div className={s.tooltip}>Connect your wallet for donate</div>
      }
    </div>

  );
};

export default DonateButton;
