import { ChainId, Token } from '@shibcakeswap/sdk'

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x26Fd588afDb93E7c33f5687113DCD05BfC588F69',
    18,
    'CAKE',
    'ShibcakeSwap Token',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0x26Fd588afDb93E7c33f5687113DCD05BfC588F69',
    18,
    'CAKE',
    'ShibcakeSwap Token',
  ),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
  ),
}

export const WBNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token',
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
export const USDC = new Token(
  ChainId.MAINNET,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
)

const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  cake: {
    symbol: 'CAKE',
    address: {
      56: '0x26Fd588afDb93E7c33f5687113DCD05BfC588F69',
      97: '0x26Fd588afDb93E7c33f5687113DCD05BfC588F69',
    },
    decimals: 18,
    projectLink: 'https://shibcakeswap.com/',
  },
  shibcake: {
    symbol: 'SHIBCAKE',
    address: {
      56: '0x90bdF238674569684a34F3AF8a3F55f08088bc98',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://shibcake.com/',
  },
  syrup: {
    symbol: 'SYRUP',
    address: {
      56: '0x3739F7EE28dEe59c0270b57080F089a51542506A',
      97: '0x3739F7EE28dEe59c0270b57080F089a51542506A',
    },
    decimals: 18,
    projectLink: 'https://shibcakeswap.com/',
  },
}

export default tokens
