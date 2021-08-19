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
      97: '0xD8A844E3439580c5fE060e82718c13891CE7E7fF',
      56: '0xD8A844E3439580c5fE060e82718c13891CE7E7fF',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'CAKE-BNB LP ShibcakeSwap',
    lpAddresses: {
      97: '0x1afbcbf8343c04767bc61aabdd803c302b6a487e',
      56: '0x1afbcbf8343c04767bc61aabdd803c302b6a487e',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'SHIBCAKE-BNB LP PancakeSwap',
    lpAddresses: {
      97: '0x4f2d19bbd600e4e88396c2f6177ef9f2bfa30671',
      56: '0x4f2d19bbd600e4e88396c2f6177ef9f2bfa30671',
    },
    token: tokens.shibcake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP ShibcakeSwap',
    lpAddresses: {
      97: '',
      56: '0xc52c61c3af83aa026c4de6480183eb07a31c664f',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
