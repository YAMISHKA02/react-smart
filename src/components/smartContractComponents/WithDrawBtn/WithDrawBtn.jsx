import s from "./WithDrawBtn.module.scss";
import cn from "classnames";

const WithDrawBtn = ({disabled, classname}) => {
  return (
    <button className={cn(s.withDrawBtn, classname)} disabled={disabled}>Withdraw</button>
  );
};

export default WithDrawBtn;
