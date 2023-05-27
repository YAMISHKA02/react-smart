import s from './MainPage.module.scss'
import About from "./About/About";
import {useSelector} from "react-redux";
import {selectConnectIsShown, selectExperts, selectIsLoading} from "../../../store/reducers/dataReducer";
import {RotatingLines} from 'react-loader-spinner';
import ExpertList from "./ExpertList/ExpertList";
import ConnectModal from "./ConnectModal/ConnectModal";
import {useEffect, useState} from "react";

const MainPage = () => {


  const isLoading = useSelector(selectIsLoading);

  if (isLoading) return <div style={{'textAlign': 'center', 'padding': 50}}><RotatingLines strokeColor="#4481c3"/></div>

  return (
    <>
      <About/>
      <ExpertList/>
    </>
  )
}

export default MainPage;
