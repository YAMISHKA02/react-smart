// import About from "./About/About";
// import {useSelector} from "react-redux";
// import {selectIsLoading} from "../../../store/reducers/dataReducer";
// import {RotatingLines} from 'react-loader-spinner';
// import ExpertList from "./ExpertList/ExpertList";
//
// const MainPage = () => {
//   const isLoading = useSelector(selectIsLoading);
//   if (isLoading) return <div style={{'textAlign': 'center', 'padding': 50}}><RotatingLines strokeColor="#4481c3"/></div>
//   return (
//     <>
//       <About/>
//       <ExpertList/>
//     </>
//   )
// }
//
// export default MainPage;


import About from "./About/About";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoading, selectWallet, setWallet} from "../../../store/reducers/dataReducer";
import {RotatingLines} from 'react-loader-spinner';
import ExpertList from "./ExpertList/ExpertList";
import {useAccount, useBalance, useConnect, useContractWrite, useEnsName} from 'wagmi'
import {InjectedConnector} from 'wagmi/connectors/injected'

//
import {Web3Button, Web3NetworkSwitch} from '@web3modal/react'
import {ethers} from "ethers"
import {usePrepareContractWrite} from 'wagmi'
import {useContractRead} from 'wagmi'
import {useEffect} from "react";

//
const MainPage = () => {


  const isMainPageLoading = useSelector(selectIsLoading);
  if (isMainPageLoading) return <div style={{'textAlign': 'center', 'padding': 50}}><RotatingLines
    strokeColor="#4481c3"/></div>

  //
  // function Profile() {
  //   const {address, isConnected} = useAccount()
  //   const {data, isError, isLoading} = useBalance({
  //     address: address,
  //   })
  //   if (isConnected) return <div>Connected to {address}</div>
  //
  //   return <Web3Button/>
  // }
  //
  // function ProfileBalance() {
  //   const {address, isConnected} = useAccount()
  //   const {data, isError, isLoading} = useBalance({
  //     address: address,
  //   })
  //
  //   if (isConnected) {
  //     if (!isError && !isLoading) {
  //       const UserBalance = ethers.formatUnits(data.value, data.decimals).slice(0, -15)
  //       return <div>Balance {UserBalance} Matic</div>
  //
  //     } else {
  //       return <div> Чето не то {isError},{isLoading}</div>
  //     }
  //   }
  //
  // }


  //
  // function Contract() {
  //   const { address, isConnected } = useAccount()
  //   const { data, isError, isLoading } = useContractRead({
  //     address: '0xf79F7c03910c595303fC03b7d99393202C24dAEA',
  //     abi: [{"inputs":[{"internalType":"address","name":"_USDT","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_expertId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_revardsAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_isVoteAdded","type":"bool"}],"name":"Donate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_expertId","type":"uint256"}],"name":"EnableMoneyBack","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_expertId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"_user","type":"address"}],"name":"GotMoneyBack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"address","name":"_expertAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"RegistrationApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"address","name":"_expertAddress","type":"address"}],"name":"RegistrationRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_endTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_revardsAmount","type":"uint256"}],"name":"RoundStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_expertId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_transfered","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_rewardPoints","type":"uint256"}],"name":"TransferDonationsToExpert","type":"event"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"OnMoneyBack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_expertAddr","type":"address"}],"name":"approveExpert","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"donateInUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"expertById","outputs":[{"internalType":"address","name":"expertAddress","type":"address"},{"internalType":"string","name":"expertName","type":"string"},{"internalType":"uint256","name":"expertId","type":"uint256"},{"internalType":"uint256","name":"votes","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"rewardPoints","type":"uint256"},{"internalType":"enum EducationPlatform.CourseStatus","name":"status","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getMoneyBack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExpertRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isUserRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"registerAsExpert","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"registrationRequests","outputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"enum EducationPlatform.Register","name":"registrationStatus","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"round","outputs":[{"internalType":"uint256","name":"budget","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"totalVotes","type":"uint256"},{"internalType":"bool","name":"roundActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timeInHours","type":"uint256"},{"internalType":"uint256","name":"_roundRevardsPoints","type":"uint256"}],"name":"startRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"transferTokensToExpert","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userDonation","outputs":[{"internalType":"bool","name":"isDonated","type":"bool"},{"internalType":"uint256","name":"amountOfDonations","type":"uint256"}],"stateMutability":"view","type":"function"}],
  //     functionName: 'owner',
  //     //args: ['0x9845F17F1dEaB8B9710C995794819e4275d760E9'],
  //   })
  //   console.log(data, isError,isLoading)
  //
  // }
  //
  // function ContractWrite() {
  //   const { address, isConnected } = useAccount()
  //   const { data, isLoading, isSuccess, write } = useContractWrite({
  //     address: '0xf79F7c03910c595303fC03b7d99393202C24dAEA',
  //     abi: [{"inputs":[{"internalType":"address","name":"_USDT","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_expertId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_revardsAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_isVoteAdded","type":"bool"}],"name":"Donate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_expertId","type":"uint256"}],"name":"EnableMoneyBack","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_expertId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"_user","type":"address"}],"name":"GotMoneyBack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"address","name":"_expertAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"RegistrationApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"address","name":"_expertAddress","type":"address"}],"name":"RegistrationRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_endTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_revardsAmount","type":"uint256"}],"name":"RoundStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_expertId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_transfered","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_rewardPoints","type":"uint256"}],"name":"TransferDonationsToExpert","type":"event"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"OnMoneyBack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_expertAddr","type":"address"}],"name":"approveExpert","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"donateInUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"expertById","outputs":[{"internalType":"address","name":"expertAddress","type":"address"},{"internalType":"string","name":"expertName","type":"string"},{"internalType":"uint256","name":"expertId","type":"uint256"},{"internalType":"uint256","name":"votes","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"rewardPoints","type":"uint256"},{"internalType":"enum EducationPlatform.CourseStatus","name":"status","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getMoneyBack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExpertRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isUserRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"registerAsExpert","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"registrationRequests","outputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"enum EducationPlatform.Register","name":"registrationStatus","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"round","outputs":[{"internalType":"uint256","name":"budget","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"totalVotes","type":"uint256"},{"internalType":"bool","name":"roundActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timeInHours","type":"uint256"},{"internalType":"uint256","name":"_roundRevardsPoints","type":"uint256"}],"name":"startRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"transferTokensToExpert","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userDonation","outputs":[{"internalType":"bool","name":"isDonated","type":"bool"},{"internalType":"uint256","name":"amountOfDonations","type":"uint256"}],"stateMutability":"view","type":"function"}],
  //     functionName: 'donateInUSDT',
  //   })
  //   return <div>
  //     <button disabled={!write} onClick={() => write({
  //       args: [0,100],
  //     })}>
  //       Donate
  //     </button>
  //     {isLoading && <div>Check Wallet</div>}
  //     {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
  //   </div>
  // }


  return (
    <>

      {/*<Profile />*/}
      {/*<ProfileBalance/>*/}
      {/*<Contract/>*/}
      {/*<ContractWrite/>*/}

      <About/>
      <ExpertList/>

    </>
  )
}

export default MainPage;
