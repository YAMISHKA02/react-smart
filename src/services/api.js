import axios, {AxiosInstance, AxiosResponse} from 'axios'
import {StatusCodes} from 'http-status-codes'
import {toast} from 'react-toastify'

const BASE_URL = 'http://ec2-3-89-222-10.compute-1.amazonaws.com:8082/api/v1/'
const TIMEOUT = 5000

const ErrorCodeMapping = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
}

const shouldDisplayError = (response) => ErrorCodeMapping[response.status]

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    // headers: {
    //   'Content-Type': 'application/json',
    // }
  })

  api.interceptors.request.use((config) => {
    config.headers['x-api-key'] = '74803c46-6f65-4aac-90b1-44d147938011';
    config.headers['Content-Type'] = 'application/json';  // Надо ли? а картику как посылать?
    return config
  })

  api.interceptors.response.use((response) => response,
    (error) => {
      if (error.response && shouldDisplayError(error.response)) toast.warn(error.response.data.error)
      throw error
    }
  )

  return api
}


// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://ec2-3-89-222-10.compu
//   headers: {
//     'x-api-key': '74803c46-6f65-4aac-90b1-44d147938011',
//     'Content-Type': 'application/json',
//
//   }
// })

// function App() {
//   const onclick = () => {
//     const data = fetch('http://ec2-3-89-222-10.compute-1.amazonaws.com:8082/api/v1/getInfo', {
//       headers: {
//         'x-api-key': '74803c46-6f65-4aac-90b1-44d147938011',
//         'Content-Type': 'application/json',
//       }
//     }).then(res=>console.log(res));
//     const data = instance.post('', {expertId: 0}).then(resp => resp.data).then(console.log).catch(err => console.log(err));
//   }

// import './App.scss';
//
// return (
//   <div className="App">
//     <header className="header">
//
//     </header>
//     <img src="http://ec2-3-89-222-10.compute-1.amazonaws.com:8082/static/a003f85acbdf379551b0f69ab1d2c8e1.jpeg" alt=""/>
//
//     Привет
//     <br/>
//
//     <button onClick={onclick}>Кнопка</button>
//
//   </div>
// );
// }
