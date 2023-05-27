import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {
  fetchOneExpert,
  selectCurrentExpert,
  selectCurrentExpertId,
  selectIsOneExpertLoading
} from "../../../store/reducers/dataReducer";
import {useDispatch, useSelector} from "react-redux";
import {RotatingLines} from "react-loader-spinner";

import s from './ExpertProfile.module.scss'
import ExpertDonations from "../../sharedComponents/ExpertDonations/ExpertDonations";
import ShareProfile from "../../sharedComponents/ShareProfile/ShareProfile";
import ExpertTitle from "../../sharedComponents/ExpertTitle/ExpertTitle";
import ExpertText from "../../sharedComponents/ExpertText/ExpertText";

const ExpertProfile = () => {
  const id = useParams().id;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOneExpert(id))
  }, [])

  const currentExpert = useSelector(selectCurrentExpert);
  const currentId = useSelector(selectCurrentExpertId);
  const isCurrentExpertExpertLoading = useSelector(selectIsOneExpertLoading);

  const navigate = useNavigate()

  const onEditClick = () => {
    console.log('he')
    navigate('/edit')
  }

  if (isCurrentExpertExpertLoading) return <div style={{'textAlign': 'center', 'padding': 50}}><RotatingLines
    strokeColor="#4481c3"/></div>


  return (
    currentExpert && <div>

      <div className={s.container}>
        <div className={s.mainBlock}>

          <div className={s.leftBlock}>
            <img className={s.avatar} src={currentExpert.expert.image} alt="avatar"/>
            {currentId && <button className={s.editBtn} onClick={onEditClick}>Edit profile</button>  }
            <ShareProfile classname={s.shareProfile} />
          </div>
          <div className={s.rightBlock}>
            <ExpertTitle expert= {currentExpert.expert}/>
            <ExpertText expert= {currentExpert.expert} classname={s.text}/>
          </div>





        </div>
        {currentId && <ExpertDonations donations={0} bonus={0} classname={s.expertDonations}/>}
      </div>
    </div>
  );
};

export default ExpertProfile;
