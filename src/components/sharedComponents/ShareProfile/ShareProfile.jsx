import cn from 'classnames/bind';
import s from './ShareProfile.module.scss'
import shareIcon from '../../../assets/share-icon.svg'
import {useState} from "react";
import {useClipboard} from "use-clipboard-copy";
import {useLocation} from "react-router-dom";

const ShareProfile = ({classname, expertId}) => {

  const url = `${useLocation().pathname}/${expertId}`;


  const showTooltip = () => {
    setIsTooltipShown(true);
    clipboard.copy(url); // programmatically copying a value

    setTimeout(() => {
      setIsTooltipShown(false)
    }, 3000)
  }

  const clipboard = useClipboard();

  const [isTooltipShown, setIsTooltipShown] = useState(false);
  return (
    <div className={s.shareProfile}>
      <div className={cn(classname, s.wrapper)} onClick={() => showTooltip()}>
        Share profile
        <img className={s.icon} src={shareIcon} alt="share profile icon"/>
      </div>
      {
        isTooltipShown && <div className={s.tooltip}>Link copped!</div>
      }
    </div>

  );
};

export default ShareProfile;
