import Header from "../Header/Header";
import MainPage from "../../pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import Role from "../../pages/Role/Role";
import EditExpertProfile from "../../pages/EditExpertProfile/EditExpertProfile";
import ExpertProfile from "../../pages/ExpertProfile/ExpertProfile";
import UserProfile from "../../pages/UserProfile/UserProfile";

const PageWrapper = () => {
  return (
    <>
      <Header/>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/role'} element={<Role/>}/>
          <Route path={'/edit'} element={<EditExpertProfile/>}/>
          <Route path={'/expertProfile/:id'} element={<ExpertProfile/>}/>
          <Route path={'/profile'} element={<UserProfile/>}/>
          <Route path={'*'} element={<div style={{'textAlign': 'center', 'marginTop': 100}}>Страница не найдена</div>}/>
        </Routes>
    </>
  )
}

export default PageWrapper;
