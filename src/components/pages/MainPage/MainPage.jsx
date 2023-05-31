import About from "./About/About";
import {useSelector} from "react-redux";
import {selectIsLoading} from "../../../store/reducers/dataReducer";
import {RotatingLines} from 'react-loader-spinner';
import ExpertList from "./ExpertList/ExpertList";
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const MainPage = () => {


  const isLoading = useSelector(selectIsLoading);

  if (isLoading) return <div style={{'textAlign': 'center', 'padding': 50}}><RotatingLines strokeColor="#4481c3"/></div>


  function Profile() {
    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    })

    if (isConnected) return <div>Connected to {ensName ?? address}</div>
    return <button style={{"border": "red 1px solid", "padding":10}} onClick={() => connect()}>Connect Wallet</button>
  }

  return (
    <>

      <Profile />


      <About/>
      <ExpertList/>
    </>
  )
}

export default MainPage;
