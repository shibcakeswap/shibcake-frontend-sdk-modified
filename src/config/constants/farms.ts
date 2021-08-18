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
]

export default farms
