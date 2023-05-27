import { useEffect, useState} from 'react'
import {BrowserRouter, Router} from 'react-router-dom'

function BrowserHistoryRouter({history, children}) {
  console.log(history)
  const [historyState, setHistoryState] = useState({location: history.location, action: history.action})
  useEffect(()=>{
    history.listen((obj)=> {
      setHistoryState(obj);
      console.log('услышал')

    })
  },[])
  return <Router navigator={history} location={history.location} navigationType={history.action} >
    {children}
  </Router>
}

export default BrowserHistoryRouter
