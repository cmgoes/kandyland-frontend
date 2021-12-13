export const configNetwork = "mainnet";

export const Paths = {
  liquidityProvider: "/",
  rptStaking: "/rpt-staking",
  stakingLots: "/staking-lots",
  royaReserve: "/roya-reserve",
  royaAnalytics: "/network-stats",
  buySellRoya: "/roya-swap",
  temrs: "/terms-of-use",
  convertMroya: "/mroya-swap",
};

export const WalletTypes = {
  default: 0,
  metamask: 1,
  walletConnect: 2,
  authereum: 3,
  burnerConnect: 4,
  uniLogin: 5,
  mewWallet: 6,
};

export const ConnectSteps = {
  select: 1,
  connect: 2,
  accept: 3,
};

export const ModalTypes = {
  closed: 0,
  stake: 1,
  claimMRoya: 2,
  claimRewards: 3,
  withdrawFunds: 4,
  claimStableCoins: 5,
};

export const StakeSteps = {
  confirm: 0,
  processing: 1,
  success: 2,
};

export const WithdrawSteps = {
  confirm: 0,
  success: 1,
};

export const StoreageKey = {
  doNotShowAgain: "doNotShowAgain",
  walletType: "walletType",
};

export const StakingLotModals = {
  closed: 0,
  buyKing: 1,
  buyQueen: 2,
  BuyFlush: 3,
  sellKing: 4,
  sellQueen: 5,
  sellFlush: 6,
  queenDiscount: 7,
  queenLockedNft: 8,
};

export const LotRewardProcess = {
  idle: 0,
  qlotReward: 1,
  klotReward: 2,
  flotReward: 3,
};

export const RtpStakingModal = {
  closed: 0,
  unlockRtp: 1,
  lockRtp: 2,
};

export const RoyalFlushModals = {
  closed: 0,
  acquireLots: 1,
  convertLots: 2,
};

export const LockRptSteps = {
  confirm: 1,
  success: 2,
};

export const UnlockRptSteps = {
  confirm: 1,
  success: 2,
};

export const Config = {
  ropsten: {
    etherscanLink: "https://ropsten.etherscan.io",
    defaultGasPrice: "15",
    transactionText: "Transaction Pending",
    coinGeckoApi: "https://api.coingecko.com/api/v3/coins",
    infuraId: "287b5d14c20f4b7d9411d165fac6a688",
  },
  mainnet: {
    etherscanLink: "https://etherscan.io",
    defaultGasPrice: "15",
    transactionText: "Transaction Pending",
    coinGeckoApi: "https://api.coingecko.com/api/v3/coins",
    infuraId: "c7a95b91ffae44e3b7fb80d9fbb98939",
  },
};

export const getConfig = () => {
  return Config[configNetwork];
};

export const SuccessMsgType = {
  hide: 0,
  showBuySuccess: 1,
  showSellSuccess: 2,
};

export const RoyaReserveModal = {
  closed: 0,
  cooldownActivated: 1,
  unstake: 2,
};

export const SocialLinks = {
  twitter: "https://twitter.com/Royale_Finance",
  telegramOfficial: "https://t.me/Royalefinanceofficial",
  telegramAnnouncement: "https://t.me/RoyaleFinance",
  medium: "https://medium.com/@officialroyale",
  docs: "https://royalefinance.gitbook.io/royale-finance-docs/",
  mRoyaSwap: "https://staging.d2brf9r7tb77dk.amplifyapp.com/",
};

export const Networks = {
  mainnet: "0x1",
  ropsten: "0x3",
  rinkeby: "0x4",
  goerli: "0x5",
  kovan: "0x2a",
  moonBaseAlpha: "0x507",
  bscTestnet: "0x61",
  bscMainnet: "0x38",
  maticTestnet: "0x13881",
  maticMainnet: "0x89",
};

export const LotPrice = {
  queenLot: 10000,
  kingLot: 100000,
  flushLot: 1000000,
};

export const RewardsPerBlock = {
  rpt: 4,
  roya: 0.2,
};

export const EtherscanLinks = {
  ethereum: "https://etherscan.io",
  binance: "https://bscscan.com",
  matic: "https://polygonscan.com",
};

export const NetworkOptions = {
  ethereum: "ethereum",
  matic: "matic",
  binance: "binance",
};

export const SwapProcess = {
  idle: 0,
  inWallet: 1,
  stakeRoya: 2,
};
