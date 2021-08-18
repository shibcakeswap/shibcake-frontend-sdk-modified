import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x26Fd588afDb93E7c33f5687113DCD05BfC588F69',
      56: '0x26Fd588afDb93E7c33f5687113DCD05BfC588F69',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'SHIBCAKE-BNB LP',
    lpAddresses: {
      97: '0x4f2d19bbd600e4e88396c2f6177ef9f2bfa30671',
      56: '0x4f2d19bbd600e4e88396c2f6177ef9f2bfa30671',
    },
    token: tokens.shibcake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
