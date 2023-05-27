import Header from "../Header/Header";
import MainPage from "../../pages/MainPage/MainPage";
import {Outlet} from "react-router-dom";

const PageWrapper = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
}

export default PageWrapper;


