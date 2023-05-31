import PageWrapper from "../layout/PageWrapper/PageWrapper";

import './normalize.scss';
import './App.scss';

import {EthereumClient, w3mConnectors, w3mProvider} from '@web3modal/ethereum'
import {Web3Modal} from '@web3modal/react'
import {configureChains, createConfig, WagmiConfig} from 'wagmi'
import {arbitrum, mainnet, polygon} from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const chains = [arbitrum, mainnet, polygon]
const projectId = 'YOUR_PROJECT_ID'

const {publicClient} = configureChains(chains, [w3mProvider({projectId})])

const { webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({projectId, version: 1, chains}),
  publicClient,
  webSocketPublicClient,
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

///////// ----------------




function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <div className="App">
          <PageWrapper/>
        </div>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient}/>
    </>
  );
}

export default App;


